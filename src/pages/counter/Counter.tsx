import {
  increment,
  decrement,
  incrementByAmount,
  asyncUpFetch,
  asyncUpFetchWithArgument,
} from 'store/slices/counterSlice';
import { useAppSelector, useAppDispatch } from 'store/store';

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);
  const status = useAppSelector((state) => state.counter.status);

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
      <button onClick={() => dispatch(asyncUpFetchWithArgument(10))}>
        asunc Increase 10 button
      </button>
    </div>
  );
}

export default Counter;
