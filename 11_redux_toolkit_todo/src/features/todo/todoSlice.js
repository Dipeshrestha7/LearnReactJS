import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}


export const todSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state, action)=>{
                const todo ={
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(todo)
        },
        removeTodo:()=>{},
    }
})