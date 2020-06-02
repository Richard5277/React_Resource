import { combineReducers } from 'redux';
import todosReducer from './todo.reducer'
import visibilityFilter from './visibilityFilter.reducer'

const rootReducer = combineReducers({
  todosReducer,
  visibilityFilter
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
