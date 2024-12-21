import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../State.ts";
import {initialState, User} from "./UserTypes.ts";
import axios from "axios";


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL);
        return [...response.data];
    } catch (error) {
        return Promise.reject(error);
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        })
    }
})

export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;