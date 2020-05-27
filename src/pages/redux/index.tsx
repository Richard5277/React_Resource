import React from 'react';
import AddTodoContainer from './addTodo.container';
import styles from '../../shared/styles.module.css';
import TodoListContainer from './todoList.container';

const TodoPage = () => {
  return (
    <div>
      <h1 className={styles.header}>My Todo APP</h1>
      <AddTodoContainer />
      <br />
      <TodoListContainer />
    </div>
  )
}

export default TodoPage;