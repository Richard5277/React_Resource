import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './shared/colors.scss';
import './App.scss';

import NavBar from './components/NavBar'
import XStatePage from './pages/XState'
import SpreadOperator from './pages/spreadOperator/SpreadOperator'
import CustomHookPage from './pages/customHook';

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
              <h1 className="app-title">REACT RESOURCE BOOK</h1>
              <ul className="app-list">
                
                <Link to='xstate' className="app-list-link">
                  <AppListItem title='XState' desc='React state management tool' />
                </Link>
                
                <Link to='xstate' className="app-list-link">
                  <AppListItem title='Spread Oporator' desc='ES6 spread {...}' />
                </Link>

                <Link to='/custom-hook' className="app-list-link">
                <AppListItem title='Custom Hook' desc='V16 custom hook func' />
                </Link>

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
          <Route path='/custom-hook'>
            <CustomHookPage />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
