import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from '@reduxjs/toolkit';

const initialState =[
    {
        name:'Dipesh Shrestha',
        id:1
    }
]

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const newUser={
                name: action.payload,
                id: nanoid()
            }
            state.push(newUser);
        },
        removeUser:(state,action) =>{
            return state.filter((user)=> user.id !== action.payload);
        }
    }
})

export const{addUser,removeUser} =userSlice.actions;
export default userSlice.reducer;