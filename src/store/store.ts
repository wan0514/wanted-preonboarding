import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers'; // 모든 리듀서를 포함하는 root 리듀서를 가져온다

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // 타입 지정을 해서 새로운 hook으로 만든 useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // 타입 지정을 해서 새로운 hook으로 만든 useDispatch
