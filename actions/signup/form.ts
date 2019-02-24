import { ThunkAction } from 'redux-thunk';
import { UserAPI } from '../../api/user';

const AFTER_HANDLE_SUBMIT = "AFTER_HANDLE_SUBMIT";

export interface Form {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
}

export const handleSubmit = (form: Form) : ThunkAction<Promise<void>, {}, {}, ReturnType<typeof afterHandleSubmit>> => async (dispatch) => {
  const res = UserAPI.create(form)
  console.log(res);
  dispatch(afterHandleSubmit())
}

export const afterHandleSubmit = () => {
  return ({
    type: "AFTER_HANDLE_SUBMIT" as typeof AFTER_HANDLE_SUBMIT,
  });
}

export const formActions = { handleSubmit };