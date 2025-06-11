import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slice/todoSlice.js";

export const store = configureStore({
    reducer:{
        todos: todoReducer
    }
})