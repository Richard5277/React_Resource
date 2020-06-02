import { TodoActionType, SET_VISIBILITY_FILTER } from '../actions/todo/todo.actiontype';
import { Filter } from '../../../shared/models/filter.model';
import { VisibilityFilters } from '../actions/todo/todo.action';

const visibilityFilter = (state: Filter = {filter: VisibilityFilters.SHOW_ALL} , action: TodoActionType) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER :
      return action.payload
    default :
      return state
  }
}

export default visibilityFilter