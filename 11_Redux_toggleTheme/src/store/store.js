import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../themeSlice/ThemeSlice"


export const store = configureStore({
    reducer:{
        theme: themeReducer
    }
})