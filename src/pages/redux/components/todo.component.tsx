import React from 'react'

interface TodoPropTypes {
  text: string;
  completed: boolean;
  onToggleTodo: () => void
}
const Todo = ({text, completed, onToggleTodo}: TodoPropTypes) => (
  <li
    className="app_todo_list_item"
    onClick={() => {
      onToggleTodo()
    }}
    style={{
      textDecoration : completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo;