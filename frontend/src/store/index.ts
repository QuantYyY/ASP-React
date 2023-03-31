import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice';
import pageViewReducer from './pageViewSlice';

const store = configureStore({
    reducer: {
        students: studentsReducer,
        pageView: pageViewReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;