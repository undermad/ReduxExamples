import {createAsyncThunk, createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../State.ts";
import {initialState, Post, PostAddedAction, ReactionAddedAction, Status} from "./PostTypes.ts";
import axios from "axios";


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {

    try {
        const response = await axios.get(POSTS_URL);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }

});

export const updatePosts = createAsyncThunk('posts/updatePost', async (initialPost: Post) => {
    const {id} = initialPost;
    try {
        const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
});


const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
                state.posts.push(action.payload);
            },
            prepare(action: PostAddedAction) {
                return {
                    payload: {
                        id: nanoid(),
                        ...action,
                    }
                }
            }
        },
        reactionAdded(state, action: PayloadAction<ReactionAddedAction>) {
            const existingPost = state.posts.find(post => post.id === action.payload.postId);
            if (!existingPost) {
                return;
            }
            const reaction = existingPost.reactions.find(reaction => reaction.name === action.payload.reactionName);
            if (reaction) {
                reaction.like++;
            }
        }

    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = Status.LOADING;
            })

            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = Status.SUCCEEDED;
                const loadedPosts = action.payload.map(post => {
                    post.timestamp = new Date().getTime();
                    post.reactions = [{like: 0, name: 'likes'}, {like: 0, name: 'coffee'}];
                    post.id = String(post.id)
                    return post;
                })
                state.posts = state.posts.concat(loadedPosts);
            })

            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = Status.FAILED;
                state.error = action.error.message || 'Failed to fetch posts';
            })

            .addCase(updatePosts.fulfilled, (state, action: PayloadAction<Post>) => {
                if (!action.payload?.id) {
                    console.log("Update could not complete.");
                    console.log(action.payload);
                    return;
                }
                
                const { id } = action.payload;
                const posts = state.posts.filter(post => post.id !== id);
                state.posts = [...posts, action.payload];
            })
    }
})

export const selectAllPosts = (state: RootState) => state.posts;
export const getPostsStatus = (state: RootState) => state.posts.status;
export const getPostError = (state: RootState) => state.posts.error;

export const selectPostById = (state: RootState, postId: string) => {
    const post = state.posts.posts.find(post => post.id === postId);
    if (post) return post;
}

export const {postAdded, reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;

