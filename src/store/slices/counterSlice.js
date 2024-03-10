import { createSlice } from '@reduxjs/toolkit';

// redux toolkit의 특징
// configureStore로 store를 만든다.
// createSlice로 작은 store를 만든다.
// actionCreator 함수를 자동으로 만들어준다.
// immer.js가 내장 되어 있어서 불변하게 데이터를 처리하지 않아도 된다.

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
