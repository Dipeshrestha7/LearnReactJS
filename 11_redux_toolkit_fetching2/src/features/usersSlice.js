import {createSlice} from '@reduxjs/toolkit'

const initialState =[
    {
        id:1,
        name:"Dipesh Shrestha"
    }
]

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        },

        setUsers:(state,action) =>{
            return action.payload;
        }
    }

})

export const {addUser,setUsers} = userSlice.actions;
export default userSlice.reducer;