import { combineReducers } from 'redux';
import signupReducer, { SignupState } from './signup';
import sessionReducer, { SessionState } from './session';

export interface Reducer {
  signupReducer: SignupState,
  sessionReducer: SessionState,
}

const reducer = combineReducers({
  signupReducer,
  sessionReducer,
})

export default reducer;
