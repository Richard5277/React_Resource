import { TodoActionType, ADD_TODO, TOGGLE_TODO } from "../actions/todo/todo.actiontype"
import { ITodo } from "../../../shared/models/todo.model";

const todosReducer = (state: Array<ITodo> = [], action: TodoActionType) => {
  switch ( action.type ) {  
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
      case TOGGLE_TODO:
        return state.map(todo =>
          todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
      
      default:
        return state
  }
}

export default todosReducer;