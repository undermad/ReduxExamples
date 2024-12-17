import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../State.ts";

interface User {
    id: string,
    name: string,
}

interface UsersState {
    users: User[]
}

const initialState: UsersState = {
    users: [
        {id: '0', name: 'Dominik Tworek'},
        {id: '1', name: 'Rafal Tworek'},
        {id: '2', name: 'Kinga Tworek'},
    ]
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;