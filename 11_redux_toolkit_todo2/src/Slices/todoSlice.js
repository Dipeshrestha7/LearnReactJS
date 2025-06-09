import {createSlice} from '@reduxjs/toolkit'
import{nanoid} from '@reduxjs/toolkit'

const initialState =[
    {
        id:1,
        text:"Hello Dipesh"
    }
]
export const todoSlice = createSlice({
    name :'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
            id: nanoid(),
            text: action.payload
        }
            state.push(todo);
        },

        removeTodo:(state,action)=>{
            return state.filter((todo)=> todo.id !== action.payload);
        },
        removeAll:() =>{
            return []
        }
    }
})

export const {addTodo, removeTodo,removeAll} = todoSlice.actions;
export default todoSlice.reducer;