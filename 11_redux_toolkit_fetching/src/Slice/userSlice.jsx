import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{
        fetchUsersStart:(state) =>{
            state.loading=true;
            state.error =null
        },
        fetchUsersSuccess:(state,action) =>{
            state.loading= false;
            state.users =action.payload;
        },
        fetchUsersFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const {fetchUsersStart, fetchUsersSuccess, fetchUsersFailure} = userSlice.actions;
export default userSlice.reducer;