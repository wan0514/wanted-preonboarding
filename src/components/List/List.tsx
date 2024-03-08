import React from 'react';
import { TodoUl, TodoItem, TodoLi, RemoveButton } from './list.style';

type Todo = { id: number; text: string };

interface ListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
}

function List({ todos, onRemove }: ListProps) {
  return (
    <TodoUl>
      {todos.map((todo, index) => (
        <TodoItem key={index}>
          <TodoLi> {todo.text}</TodoLi>
          <RemoveButton onClick={() => onRemove(todo.id)}>제거</RemoveButton>
        </TodoItem>
      ))}
    </TodoUl>
  );
}

export default List;
