import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.scss'

const NavItem = (props: any) => {
  const { location, title, exact } = props;
  const { onClickItem } = props;
  return (
    <li className="nav-item rr_nav-item" onClick={() => { onClickItem() }}>
      <NavLink exact={exact ? exact : false} className="rr_nav-link" activeClassName='is-active' to={location}>{title}</NavLink>
    </li>
  )
}

const NavBar = () => {
const [ isOpen, setIsOpen ] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light rr_nav">
      <NavLink className="navbar-brand" style={{color: '#3e92cc'}} to='/'>R.R.B</NavLink>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="navbar-toggler rr_nav-button"
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon rr_nav-icon"></span>
      </button>
      <div className={isOpen ? 'navbar-collapse' : 'collapse navbar-collapse'} id="navbarNav">
        <ul className="navbar-nav">
          <NavItem location='/' title='Home' exact={true} onClickItem={() => setIsOpen(false)} isHamburger={isOpen} />
          <NavItem location='/xstate' title='XState' onClickItem={() => setIsOpen(false)} />
          <NavItem location='/spread' title='Spread' onClickItem={() => setIsOpen(false)} />
          <NavItem location='/custom-hook' title='Custom Hook' onClickItem={() => setIsOpen(false)} />
          <NavItem location='/redux' title='Redux' onClickItem={() => setIsOpen(false)} />
          <NavItem location='/es6-feature' title='ES6 New Feature' onClickItem={() => setIsOpen(false)} />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar