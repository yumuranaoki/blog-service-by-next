import { Reducer } from 'redux';
import { changeLoginStateToTrue, changeLoginStateToFalse } from '../actions/session'

const initialState: SessionState = {
  isLoggedIn: true,
}

export type SessionState = {
  isLoggedIn: boolean,
}

type Action = ReturnType<typeof changeLoginStateToTrue | typeof changeLoginStateToFalse>

const reducer: Reducer<SessionState, Action> = (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_STATE_TO_TRUE":
      return { ...state, isLoggedIn: true }
    case "CHANGE_LOGIN_STATE_TO_FALSE":
      return { ...state, isLoggedIn: false }
    default:
      return state;
  }
}

export default reducer;
