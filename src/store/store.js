import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers'; // 모든 리듀서를 포함하는 root 리듀서를 가져온다

const store = configureStore({
  reducer: rootReducer,
});

export default store;
