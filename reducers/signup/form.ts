import { Reducer } from 'redux';
import { handleSubmit } from '../../actions/signup/form';

const initialState = {
  
};

export type State = {
  
};

export type Action = ReturnType<typeof handleSubmit>

const reducer : Reducer<State, Action> = (state=initialState, action) => {
  switch (action.type) {
    case "HANDLE_SUBMIT":
      return state;
    default:
      return state;
  }
}

export default reducer