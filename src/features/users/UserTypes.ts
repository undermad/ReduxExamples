export interface User {
    id: number,
    name: string,
}

export interface UsersState {
    users: User[]
}

export const initialState: UsersState = {
    users: []
}
