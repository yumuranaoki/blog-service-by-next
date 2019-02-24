import { Reducer } from 'redux';
import { afterHandleSubmit } from '../../actions/signup/form';

const initialState: State = {
};

export type State = {
};

export type Action = ReturnType<typeof afterHandleSubmit>

const reducer : Reducer<State, Action> = (state=initialState, action) => {
  switch (action.type) {
    case "AFTER_HANDLE_SUBMIT":
      return state;
    default:
      return state;
  }
}

export default reducer