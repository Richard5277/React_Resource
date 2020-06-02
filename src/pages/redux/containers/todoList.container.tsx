import React from 'react';
import { connect } from 'react-redux';
import { ITodo } from '../../../shared/models/todo.model';
import Todo from '../components/todo.component';
import { RootState } from '../reducers';
import { TOGGLE_TODO, TodoFilters } from '../actions/todo/todo.actiontype';
import { Filter } from '../../../shared/models/filter.model';

interface TodoListPropTypes {
  todos: Array<ITodo>;
  toggleTodo: (id: number) => void
}

// apply filter
const getVisibleTodos = (todos: Array<ITodo>, filter: Filter) => {
  switch(filter.filter) {
    
    case TodoFilters.SHOW_ALL:
      return todos
    
    case TodoFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)

    case TodoFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    
    default:
      throw new Error(`Unknown filter : ${filter}`)
  }
}

// since map both state and dispatch to props
// this props has the store access
const TodoListComponent = (props: TodoListPropTypes) => (
  (props.todos !== undefined && props.todos.length !== 0) ?
  <ul className="app_todo_list">
    { props.todos.map(todo => (
      <Todo key={todo.id} {...todo} onToggleTodo={() => props.toggleTodo(todo.id)}/>
    ))}
  </ul> :
null
)

// map state to props
// This is super important
// pass the corret state down
const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todosReducer, state.visibilityFilter)
})

// map diapatch
const mapDispatchToProps = {
  toggleTodo: (id: number) => ({type: TOGGLE_TODO, payload: id})
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);