import React from 'react';
import { useMachine } from '@xstate/react';
import ToggleMachine from './ToggleMachine';

const XStateFuncComonent = () => {

  const [ current, send ] = useMachine(ToggleMachine);

  return (
    <div className="rr-xstate rr-xstate-funcComponent">
      <h1>XState Functional Component</h1>
      <button onClick={() => send('TOGGLE')}>
        {current.matches('inactive') ? 'Off' : 'On'}
      </button>
      <p>CURRENT STATUS : {current.value} </p>
    </div>
  )

}

export default XStateFuncComonent