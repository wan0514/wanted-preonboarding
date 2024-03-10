import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  asyncUpFetch,
  asyncUpFetchWithArgument,
} from '../../store/slices/counterSlice';
import { RootState } from 'store/store';
import { AppDispatch } from 'store/store';

function Counter() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);
  const status = useSelector((state: RootState) => state.counter.status);

  return (
    <div>
      <span>{count}</span>
      <span>{status}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(asyncUpFetch())}>
        asunc Increase 10 button
      </button>
      {/*매개변수를 받는 경우*/}
      <button onClick={() => dispatch(asyncUpFetchWithArgument(10))}>
        asunc Increase 10 button
      </button>
    </div>
  );
}

export default Counter;
