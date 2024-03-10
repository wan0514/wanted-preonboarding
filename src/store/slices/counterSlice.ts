import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
}

interface FetchDataType {
  value: number;
}

const asyncUpFetch = createAsyncThunk<FetchDataType>(
  'counterSlice/asyncUpFetch',
  async () => {
    const rep = await fetch('/mockData.json');
    const data = await rep.json();
    return { value: data.data.value };
  },
);

const asyncUpFetchWithArgument = createAsyncThunk<FetchDataType, number>(
  'counterSlice/asyncUpFetchWithArgument',
  async (argument) => {
    const rep = await fetch(`/mockData${argument}.json`);
    const data = await rep.json();
    return { value: data.data.value };
  },
);

const initialState: CounterState = {
  count: 0,
  status: 'idle',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },

    // PayloadAction<number> 는 dispatch 해오는 함수의 파라미터 타입을 number로 지정한다.
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.count += action.payload.value;
      state.status = 'fulfilled';
    });
    builder.addCase(asyncUpFetch.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(asyncUpFetchWithArgument.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(asyncUpFetchWithArgument.fulfilled, (state, action) => {
      state.count += action.payload.value;
      state.status = 'fulfilled';
    });
    builder.addCase(asyncUpFetchWithArgument.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export { asyncUpFetch, asyncUpFetchWithArgument };
