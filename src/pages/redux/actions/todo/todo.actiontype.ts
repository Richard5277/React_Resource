import { ITodo } from "../../../../shared/models/todo.model";
import { Filter } from "../../../../shared/models/filter.model";

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const TodoFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: ITodo
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO,
  payload: number
}

interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER,
  payload: Filter
}

export type TodoActionType = AddTodoAction | ToggleTodoAction | SetVisibilityFilterAction