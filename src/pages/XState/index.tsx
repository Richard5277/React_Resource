import React from 'react';
import XStateFuncComonent from './XStateFuncComponent'
import XStateClssComponent from './XStateClassComponent'

import './xstate.scss'

const XStatePage = () => (
  <div>
    <XStateClssComponent />
    <XStateFuncComonent />
  </div>
)

export default XStatePage