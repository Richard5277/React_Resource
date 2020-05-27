import {
  TodoActionType,
  ADD_TODO,
  TOGGLE_TODO
} from './todo.actiontype'

let nextTodoId = 0;

export const addTodo = (text: string): TodoActionType => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text: text,
    completed: false
  }
})

export const toggleeTodo = (id: number): TodoActionType => ({
  type: TOGGLE_TODO,
  payload: id
})
