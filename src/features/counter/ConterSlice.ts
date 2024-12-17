import {createSlice} from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    changeValue: number;
}

const initialState: CounterState = {
    value: 0,
    changeValue: 1
}

export interface CounterPayload {
    value: number;
}


// reducer doesn't mutate the current state, it create current state copy,
// apply the changes to that copy and override current state with the new state 

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + state.changeValue;
        },
        decrement: (state) => {
            state.value = state.value - state.changeValue;
        },
        reset: (state) => {
            state.value = 0;
            state.changeValue = 1;
        },
        updateChangeValue: (state, action) => {
            state.changeValue = action.payload;
        }
    },
})

export const {increment, decrement, reset, updateChangeValue} = counterSlice.actions;

export default counterSlice.reducer;


