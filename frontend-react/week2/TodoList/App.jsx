import "./index.css";
import { useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  background: #eee7d3;
  border-radius: 14px;
  padding: 28px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
export default function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1); // id 카운트 초기값

  // 할 일 추가 핸들러
  const handleInsert = (text) => {
    const newTodos = { id: nextId, text, checked: false };
    setTodos([newTodos, ...todos]);
    setNextId(nextId + 1); // 다음 id 준비
  };

  // 할 일 체크 핸들러
  const handleToggle = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  // 삭제 핸들러
  const handleRemove = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <Container>
      <Title>TodoList</Title>
      <TodoInsert onInsert={handleInsert} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </Container>
  );
}
