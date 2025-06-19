import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    jobs:[]
}

const jobSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        addJob(state,action){
            state.jobs.push(action.payload);
        },
        removeJob(state,action){
            state.jobs = state.jons.filter(job=>job.id !== action.payload)
        }
    }
})

export const {addJob, removeJob} = jobSlice.actions;
export default jobSlice.reducer;