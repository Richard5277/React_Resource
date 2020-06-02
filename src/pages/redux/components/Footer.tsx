import React from 'react'
import FooterLink from '../containers/footerLink.container'
import {TodoFilters} from '../actions/todo/todo.actiontype'

const Footer = () => (
  <div>
    <span>SHOW: </span>
    <FooterLink filter={{filter: TodoFilters.SHOW_ALL}}>ALL</FooterLink>
    <FooterLink filter={{filter: TodoFilters.SHOW_ACTIVE}}>ACTIVE</FooterLink>
    <FooterLink filter={{filter: TodoFilters.SHOW_COMPLETED}}>COMPLETED</FooterLink>
  </div>
)

export default Footer