import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: "theme",
    initialState:"light",
    reducers:{
        lightTheme:(state)=>'light',
        darkTheme:(state)=>'dark'
    }
})

export const {lightTheme, darkTheme} =themeSlice.actions;
export default themeSlice.reducer; 