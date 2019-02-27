import { combineReducers } from 'redux';
import signupReducer, { SignupState } from './signup';
import sessionReducer, { SessionState } from './session';
import feedReducer, { FeedState } from './feed';

export interface Reducer {
  signupReducer: SignupState,
  sessionReducer: SessionState,
  feedReducer: FeedState,
}

const reducer = combineReducers({
  signupReducer,
  sessionReducer,
  feedReducer,
})

export default reducer;
