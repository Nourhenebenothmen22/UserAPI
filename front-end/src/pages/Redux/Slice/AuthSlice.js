import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    isAuthenticated: false,
    Tokens:null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.Tokens=action.payload.Tokens
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.Tokens=null
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;