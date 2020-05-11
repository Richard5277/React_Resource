import { Machine } from 'xstate';

const ToggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' }},
    active: { on: { TOGGLE: 'inactive' }},
  }
})

export default ToggleMachine