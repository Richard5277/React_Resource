import React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux'
import { addTodo } from './actions/todo/todo.action';

import './todo.scss';

interface AddTodoProps {
  dispatch : Dispatch<Action<any>>
}

const AddTodoContainer = (props: AddTodoProps) => {
  let input: HTMLInputElement
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if(!input.value.trim()) {
          return
        }
        props.dispatch(addTodo(input.value))
        input.value = '';
      }}>
        <input ref={node => { if (node) (input = node)} } />
        <button className="add_todo_button" type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodoContainer);