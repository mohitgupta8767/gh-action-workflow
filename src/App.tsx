import { useMemo, useState } from 'react'
import { TodoForm } from './components/TodoForm.tsx'
import { TodoList } from './components/TodoList.tsx'

export type Todo = {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  )

  const addTodo = (title: string) => {
    const trimmedTitle = title.trim()

    if (!trimmedTitle) return

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: `${Date.now()}-${Math.random()}`, title: trimmedTitle, completed: false },
    ])
  }

  const toggleTodo = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const removeTodo = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  return (
    <main className="app-shell">
      <section className="todo-card">
        <h2>Todo App</h2>
        <p className="description">Manage your daily tasks with reusable components.</p>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
        <p className="summary">
          {completedCount} / {todos.length} completed
        </p>
      </section>
    </main>
  )
}

export default App
