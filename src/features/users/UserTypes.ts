export interface User {
    id: string,
    name: string,
}

export interface UsersState {
    users: User[]
}

export const initialState: UsersState = {
    users: []
}
