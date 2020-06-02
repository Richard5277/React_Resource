import React from 'react'

export interface LinkPropsType {
  children: any;
  active: boolean;
  onClick: () => void
}

const Link = (props: LinkPropsType) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.active}
      style={{
        marginLeft: '6px'
      }}
    >
      {props.children}
    </button>
  )
}

export default Link;