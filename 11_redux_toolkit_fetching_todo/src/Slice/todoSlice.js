import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState =[
    {
        name: 'todo',
        id:1,
        title:"Dipesh Shrestha",
        completed:false

    }
] 

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           const todo={
                id: nanoid(),
                title: action.payload,
                completed: false 
            }
            state.push(todo)
        },

        setTodos:(state,action) =>{
            return action.payload;
        },

        toggleTodo:(state,action) =>{
            const todo= state.find((t) => t.id === action.payload);
            if (todo){
                todo.completed = !todo.completed;
            }
        }
        
    }

})

export const {addTodo,setTodos, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;