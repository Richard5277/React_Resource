import React from 'react';
import { connect } from 'react-redux';
import { ITodo } from '../../shared/models/todo.model';
import Todo from './todo.component';
import { RootState } from '../../reducers';
import { TOGGLE_TODO } from '../../actions/todo/todo.actiontype';

interface TodoListPropTypes {
  todos: Array<ITodo>;
  toggleTodo: (id: number) => void
}

// since map both state and dispatch to props
// this props has the store access
const TodoListContainer = (props: TodoListPropTypes) => (
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
  todos: state.todosReducer
})

// map diapatch
const mapDispatchToProps = {
  toggleTodo: (id: number) => ({type: TOGGLE_TODO, payload: id})
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);