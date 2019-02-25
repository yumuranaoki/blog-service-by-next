import { Reducer } from 'redux';
import { afterHandleSubmit } from '../actions/signup';

const initialState: SignupState = {
};

export type SignupState = {
};

export type Action = ReturnType<typeof afterHandleSubmit>

const reducer : Reducer<SignupState, Action> = (state=initialState, action) => {
  switch (action.type) {
    case "AFTER_HANDLE_SUBMIT":
      return state
    default:
      return state;
  }
}

export default reducer