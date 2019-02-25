import { ThunkAction } from 'redux-thunk';
import Router from 'next/router'
import { UserAPI } from '../api/user';
import { changeLoginState } from './session';

const AFTER_HANDLE_SUBMIT = "AFTER_HANDLE_SUBMIT";

export interface Form {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
}

export const handleSubmit = (form: Form) : ThunkAction<Promise<void>, {}, {}, ReturnType<typeof afterHandleSubmit>> => async (dispatch) => {
  let res;
  try {
    res = await UserAPI.create(form)
  } catch (error) {
    console.log(error);
    // disptach to display something
  }

  if (!res.success) {
    console.log(res.body.message);
    // disptach to display something
    return
  }
  Router.push({
    pathname: '/'
  })

  dispatch(changeLoginState());
  dispatch(afterHandleSubmit());
}

export const afterHandleSubmit = () => {
  return ({
    type: "AFTER_HANDLE_SUBMIT" as typeof AFTER_HANDLE_SUBMIT,
  });
}

export const formActions = { handleSubmit };