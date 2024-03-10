import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// redux toolkit의 특징
// configureStore로 store를 만든다.
// createSlice로 작은 store를 만든다.
// actionCreator 함수를 자동으로 만들어준다.
// immer.js가 내장 되어 있어서 불변하게 데이터를 처리하지 않아도 된다.

//createAsuncThunk를 통해 비동기 액션 생성자를 만든다.
// createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>
/* 
Returned: 액션 생성자가 반환하는 값의 타입을 나타냅니다.
ThunkArg: 액션 생성자가 받을 인자의 타입을 나타냅니다. 만약 액션 생성자가 어떤 인자도 받지 않는다면, void 타입을 사용합니다.
ThunkApiConfig: Redux Toolkit의 추가적인 설정을 위한 객체 타입입니다. 대부분의 경우에는 이 값을 기본값인 {}로 설정하면 됩니다.
*/

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

//액션생성자로부터 받은 인자는 타입 지정을 해줘야한다.
// number타입으로 받고 있으니 두번째 인자타입을 number라고 정의한다.
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
