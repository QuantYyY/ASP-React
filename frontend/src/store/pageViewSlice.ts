import { createSlice } from "@reduxjs/toolkit";

type StudentsState = {
    pageView: string;
}


const initialState: StudentsState = {
    pageView: 'listStudents',
}

const pageViewSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        
        changePageView(state, action){
            state.pageView = action.payload;
        }
    },
    
});


export const { changePageView } = pageViewSlice.actions;

export default pageViewSlice.reducer;