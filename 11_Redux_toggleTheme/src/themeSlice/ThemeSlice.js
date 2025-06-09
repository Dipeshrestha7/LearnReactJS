import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: "theme",
    initialState:"dark",
    reducers:{
        lightTheme:()=>'light',
        darkTheme:()=>'dark'
    }
})

export const {lightTheme, darkTheme} =themeSlice.actions;
export default themeSlice.reducer; 