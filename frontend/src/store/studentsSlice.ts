import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import Student from '../components/Students/ListStudents/StudentsData';
import { urlStudents } from "../endpoints/endpoints";

type StudentsState = {
    list: Student[],
}


export const axiosGetStudents = createAsyncThunk(
    'students/getStudents',
    async () => {
        const response = await axios.get(urlStudents)
            .then((response) => {
                return response.data;
            });
        return response;
    }
);

export const axiosPostStudents = createAsyncThunk<Student, Student>(    
    'students/postStudents',
    async (student) => {
        const response = await axios.post(urlStudents, student)
            .then((response) => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error)
            });
        return response
    }
);

export const axiosDeleteStudents = createAsyncThunk<Student, number>(
    'students/deleteStudents',
    async (id: number | any) => {
        const response = await axios.delete(`${urlStudents}/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error)
            });
        return id
    }
);


const initialState: StudentsState = {
    list: [],
}

const studentsSlice = createSlice({
    name: 'students', 
    initialState,
    reducers: {

        addStudents(state, action: PayloadAction<Student>) {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(axiosGetStudents.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(axiosPostStudents.fulfilled, (state, action) => {
                state.list.push(action.payload)
            })
            .addCase(axiosDeleteStudents.fulfilled, (state, action) => {
                state.list = state.list.filter(todo => todo.StudentId !== action.payload)
            })

    }
});


export const { addStudents } = studentsSlice.actions;

export default studentsSlice.reducer;