import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// Define the type for the entire Redux store state
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store