import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../State.ts";

export interface Post {
    id: string,
    title: string,
    content: string,
}

interface PostsState {
    posts: Post[];
}

export interface PostAddedAction {
    title: string,
    content: string,
    userId: string
}


const initialState: PostsState = {
    posts: [{
        id: nanoid(),
        title: "Welcome to React with Redux",
        content: "In this guide we will learn how to write scalable react application using react.",
    }, {
        id: nanoid(),
        title: "Welcam to Redux",
        content: "In this post we will look closer at redux nad its core technologies."
    }]
};

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
                        title: action.title,
                        content: action.content
                    }
                }
            }
        }

    }
})

export const selectAllPosts = (state: RootState) => state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;

