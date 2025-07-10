import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../features/budgetSlice';
import { saveToLocalStorage } from '../utils/localStorage';

export const store = configureStore({
    reducer: {
        budget: budgetReducer,
    },
});

store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state.budget);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;