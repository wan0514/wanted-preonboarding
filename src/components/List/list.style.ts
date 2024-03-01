import styled from 'styled-components';

export const TodoUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  margin-bottom: 16px;
  list-style: none;
`;

export const TodoLi = styled.li`
  display: flex;
  gap: 10px;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  justify-content: space-between;
  width: 100%;
  padding: 8px;

  background-color: #f0f0f0;
  border-radius: 8px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const RemoveButton = styled.button`
  background-color: #ff6961;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc4c4c;
  }
`;
