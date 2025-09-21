import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
