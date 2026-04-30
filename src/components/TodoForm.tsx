import { useState } from 'react'
import type { FormEvent } from 'react'

type TodoFormProps = {
  onAddTodo: (title: string) => void
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddTodo(value)
    setValue('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">New todo</label>
      <input
        id="todo-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit">Add</button>
    </form>
  )
}
