import { configureStore } from "@reduxjs/toolkit";
import { userSclice } from "./Slices/UserSlice";

export const store = configureStore({
    reducer: {
        users: userSclice.reducer,
    }
})