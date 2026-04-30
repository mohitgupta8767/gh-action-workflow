import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('adds a todo item from the input', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/new todo/i), 'Read docs')
    await user.click(screen.getByRole('button', { name: /add/i }))

    expect(screen.getByText('Read docs')).toBeInTheDocument()
    expect(screen.getByText('0 / 1 completed')).toBeInTheDocument()
  })

  it('toggles a todo completion state', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/new todo/i), 'Ship feature')
    await user.click(screen.getByRole('button', { name: /add/i }))
    await user.click(screen.getByRole('checkbox', { name: /ship feature/i }))

    expect(screen.getByText('1 / 1 completed')).toBeInTheDocument()
  })

  it('deletes an existing todo item', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/new todo/i), 'Clean inbox')
    await user.click(screen.getByRole('button', { name: /add/i }))
    await user.click(screen.getByRole('button', { name: /delete clean inbox/i }))

    expect(screen.queryByText('Clean inbox')).not.toBeInTheDocument()
    expect(screen.getByText(/no todos yet/i)).toBeInTheDocument()
  })
})
