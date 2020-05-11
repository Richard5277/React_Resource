import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar'
import XStatePage from './pages/XState'
import SpreadOperator from './pages/spreadOperator/SpreadOperator'

import './shared/colors.scss';
import './App.scss';

const AppListItem = (props: any) => {
  const { title, desc } = props
  return (
    <li className="app-list-item">
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  )
}


function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <div className="app">
              <h1 className="app-title">REACT RESOURCE</h1>
              <ul className="app-list">
                <AppListItem title='XState' desc='React state management tool' />
                <AppListItem title='Spread Oporator' desc='ES6 spread {...}' />
              </ul>
            </div>
          </Route>
          <Route path='/about'>
            <h1>ABOUT</h1>
          </Route>
          <Route path='/xstate'>
            <XStatePage />
          </Route>
          <Route path='/spread'>
            <SpreadOperator />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
