import React from 'react';
import { useState } from 'react';
import List from 'components/List/List';
import * as S from './todo.style';

type Todo = {
  id: number;
  text: string;
};

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const onSubmit = () => {
    setTodos((prev) => [...prev, { id: prev.length + 1, text: value }]);
    setValue('');
  };

  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <S.TodoListContainer>
      <S.TodoInsertSection>
        <S.TodoInput
          type="text"
          placeholder="todo를 적어주세요!"
          value={value}
          onChange={onChange}
        />
        <S.TodoButton onClick={onSubmit}> Add </S.TodoButton>
      </S.TodoInsertSection>
      {todos.length !== 0 && <List todos={todos} onRemove={onRemove}></List>}
    </S.TodoListContainer>
  );
}
