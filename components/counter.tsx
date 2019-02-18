import * as React from 'react';
import { State, } from '../reducers/index'
import { counterActions } from '../actions/counter';

const Counter: React.SFC<State & typeof counterActions> = (props) => {
  return (
    <div>
      <p>Count: {props.number}</p>
      <button onClick={() => props.increment(5)}>increment</button>
      <button onClick={() => props.decrement(5)}>increment</button>
    </div>
  )
}

export default Counter;