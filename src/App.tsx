import { Route, Routes } from 'react-router-dom';
import Counter from 'pages/counter/Counter';
import Todo from 'pages/todo/Todo';

function App() {
  return (
    <Routes>
      {/* 사용법이 바뀌어서 Route는 반드시 Routes로 감싸져있어야한다. */}
      <Route path="/" element={<Todo />}></Route>
      <Route path="counter" element={<Counter />}></Route>
    </Routes>
  );
}

export default App;
