import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// redux toolkit의 특징
// configureStore로 store를 만든다.
// createSlice로 작은 store를 만든다.
// actionCreator 함수를 자동으로 만들어준다.
// immer.js가 내장 되어 있어서 불변하게 데이터를 처리하지 않아도 된다.

//createAsuncThunk를 통해 비동기 액션 생성자를 만든다.
const asyncUpFetch = createAsyncThunk('counterSlice/asyncUpFetch', async () => {
  const rep = await fetch('/mockData.json');
  const data = await rep.json();
  return data.data.value;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'welcome',
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

  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value += action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(asyncUpFetch.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export { asyncUpFetch };
