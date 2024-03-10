import styled from 'styled-components';

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 400px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TodoInsertSection = styled.div`
  display: flex;
  width: 100%;
`;

export const TodoInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 14px;

  &.focus {
    border-color: #2ecc71;
  }
`;

export const TodoButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
`;
