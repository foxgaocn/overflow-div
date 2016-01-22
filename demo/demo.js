'use strict';

import React from 'react'
import ReactDOM from 'react-dom';
import OverflowDiv from '../main.js'

ReactDOM.render(
  <OverflowDiv divClassName='test' divContent='i am a test'> </OverflowDiv>,
  document.getElementById('example')
);