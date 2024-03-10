import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  asyncUpFetch,
} from '../../store/slices/counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);

  return (
    <div>
      <span>{count}</span>
      <span>{status}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(asyncUpFetch(3))}>
        asunc Increase 3 button
      </button>
    </div>
  );
}

export default Counter;
