import { Reducer } from 'redux';
import { changeLoginState } from '../actions/session'

const initialState: SessionState = {
  isLoggedIn: true,
}

export type SessionState = {
  isLoggedIn: boolean,
}

type Action = ReturnType<typeof changeLoginState>

const reducer: Reducer<SessionState, Action> = (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_STATE":
      return { ...state, isLoggedIn: !state.isLoggedIn }
    default:
      return state;
  }
}

export default reducer;
