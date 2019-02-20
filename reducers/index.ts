import { Reducer } from 'redux';
import { increment, decrement } from '../actions/counter'

const initialState: State = {
  number: 0,
}

export type State = {
  number: number
}

export type Action = ReturnType<typeof increment | typeof decrement>

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, number: state.number + action.number }
    case 'DECREMENT':
      return { ...state, number: state.number - action.number }
    default:
      return state;
  }
}

export default reducer;

