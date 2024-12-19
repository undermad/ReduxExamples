import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../State.ts";
import {initialState, Post, PostAddedAction, ReactionAddedAction} from "./PostTypes.ts";

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

    }
})

export const selectAllPosts = (state: RootState) => state.posts;

export const {postAdded, reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;

