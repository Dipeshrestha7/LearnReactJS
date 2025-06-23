import {createSlice} from '@reduxjs/toolkit'


const initialState = [
    {
        name:"user",
        id:1
    }
]
export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state, action) =>{
            state.push(action.payload);
        },
        removeUser:(state,action) =>{
            return state.filter((item) => item.id !==action.payload);
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;