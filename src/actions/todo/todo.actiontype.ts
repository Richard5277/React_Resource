import { ITodo } from "../../shared/models/todo.model";

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: ITodo
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO,
  payload: number
}

export type TodoActionType = AddTodoAction | ToggleTodoAction