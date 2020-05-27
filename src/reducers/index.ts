import { combineReducers } from 'redux';
import todosReducer from './todo.reducer'

const rootReducer = combineReducers({
  todosReducer
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
