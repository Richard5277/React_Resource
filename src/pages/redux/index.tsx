import React from 'react';
import AddTodoContainer from './addTodo.container';
import styles from '../../shared/styles.module.css';
import TodoListContainer from './containers/todoList.container';
import Footer from './components/Footer';

const TodoPage = () => {
  console.log('PROCESS.ENV => ', process.env)
  return (
    <div className="app-todo">
      <h1 className={styles.header}>My Todo APP</h1>
      <AddTodoContainer />
      <br />
      <TodoListContainer />
      <br />
      <Footer />
    </div>
  )
}

export default TodoPage;