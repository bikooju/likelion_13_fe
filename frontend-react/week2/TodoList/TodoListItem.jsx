export default function TodoListItem({ todo, onToggle, onRemove }) {
  return (
    <li className="item">
      <label className="left">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.checked}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button className="removeButton" onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </li>
  );
}
