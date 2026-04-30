import type { Todo } from '../App.tsx'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? 'todo-title completed' : 'todo-title'}>
          {todo.title}
        </span>
      </label>
      <button type="button" onClick={() => onRemove(todo.id)} aria-label={`Delete ${todo.title}`}>
        Delete
      </button>
    </li>
  )
}
