import type { Todo } from '../App.tsx'
import { TodoItem } from './TodoItem.tsx'

type TodoListProps = {
  todos: Todo[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  if (!todos.length) {
    return <p className="empty-state">No todos yet. Add your first task.</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  )
}
