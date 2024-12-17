import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counter/ConterSlice.ts"
import postReducer from "./features/posts/PostSlice.ts"
import usersReducer from "./features/users/UsersSlice.ts"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        users: usersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

