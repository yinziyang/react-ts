import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store';

export interface CounterState {
  value: number;
  status: 'loading' | 'idle';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    setTimeout(() => resolve({ data: amount }), 1000);
  });
}

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount);
  return response.data;
});

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = getState().counter.value;
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
