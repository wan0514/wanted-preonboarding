import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers'; // 모든 리듀서를 포함하는 root 리듀서를 가져온다

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
