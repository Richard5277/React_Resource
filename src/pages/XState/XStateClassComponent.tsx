import React from 'react';
import { interpret } from 'xstate';
import ToggleMachine from './ToggleMachine';

export default class XStateClssComponent extends React.Component<{}, { status: string, user: string }> {

  constructor(props:any) {
    super(props);
    this.state = {
      status: String(ToggleMachine.initialState),
      user: 'rich'
    }
  }

  service = interpret(ToggleMachine).onTransition(listener => {
    const { value } = listener;
    this.setState({
      status: String(value)
    })
  })

  componentDidMount(){
    this.service.start();
  }

  componentWillUnmount(){
    this.service.stop();
  }

  render() {
    let { status, user } = this.state;
    return (
      <div className="rr-xstate rr-xstate-classComponent">
        <h1>XState Class Component</h1>
        <h2>Current User :  {user}</h2>
        <h2>SERVER STATUS:  {status}</h2>
        <button onClick={() => this.service.send('TOGGLE')}>TOGGLE</button>
      </div>
    );
  }
  
}