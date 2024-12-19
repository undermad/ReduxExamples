import {nanoid} from "@reduxjs/toolkit";

export interface Post {
    id: string,
    title: string,
    content: string,
    userId: string,
    timestamp: number,
    reactions: Reaction[]
}

export interface Reaction {
    like: number,
    name: string
}

export interface PostsState {
    posts: Post[];
}

export interface PostAddedAction {
    title: string,
    content: string,
    userId: string,
    timestamp: number,
    reactions: Reaction[]
}

export interface ReactionAddedAction {
    postId: string,
    reactionName: string,
}

export const initialState: PostsState = {
    posts: [{
        id: nanoid(),
        title: "Welcome to React with Redux",
        content: "In this guide we will learn how to write scalable react application using react.",
        userId: '1',
        timestamp: new Date().getTime(),
        reactions: [{like: 1, name: 'likes'}, {like: 2, name: 'coffee'}]
    }, {
        id: nanoid(),
        title: "Welcam to Redux",
        content: "In this post we will look closer at redux nad its core technologies.",
        userId: '2',
        timestamp: new Date().getTime(),
        reactions: [{like: 1, name: 'likes'}, {like: 2, name: 'coffee'}]
    }]
};