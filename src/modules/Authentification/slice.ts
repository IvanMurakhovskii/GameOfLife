import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginState = {
    username: string,
}

export const initialState: LoginState = {
    username: "",
};

const game = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        logout: (state) => {
            state.username = "";
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
    }
});

export const { actions, reducer } = game;
