import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../utils/localStorage';

interface Transaction {
    id: string;
    description: string;
    amount: number; 
    category: string;
}

interface BudgetState {
  transactions: Transaction[];
  balance: number;
  income: number;
  expense: number;
}

const defaultState: BudgetState = {
    transactions: [],
    balance: 0,
    income: 0,
    expense: 0,
}

const initialState: BudgetState = loadFromLocalStorage() || defaultState;

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addTransaction(state, action: PayloadAction<Transaction>) {
            state.transactions.push(action.payload);
            const amount = action.payload.amount;
            if(amount > 0){
                state.income += amount;
            } else {
                state.expense += Math.abs(amount);
            }
            state.balance = state.income - state.expense;
        },
        deleteTransaction(state, action: PayloadAction<string>) {
            const id = action.payload;
            const transaction = state.transactions.find(t => t.id === id);
            if(transaction) {
                const amount = transaction.amount;
                if(amount > 0) {
                    state.income -= amount;
                } else {
                    state.expense -= Math.abs(amount);
                }
                state.transactions = state.transactions.filter(t => t.id !== id);
                state.balance = state.income -state.expense;
            }
        },
    },
});

export const { addTransaction, deleteTransaction } = budgetSlice.actions;
export default budgetSlice.reducer;