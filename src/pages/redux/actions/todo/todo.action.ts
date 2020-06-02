import {
  TodoActionType,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './todo.actiontype'
import { Filter } from '../../../../shared/models/filter.model';

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

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setVisibilityFilter = (filter: Filter): TodoActionType => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter
})
