import { ThunkAction } from 'redux-thunk';
import Router from 'next/router'
import { UserAPI } from '../api/user';
import { changeLoginStateToTrue } from './session';

const AFTER_HANDLE_SUBMIT = "AFTER_HANDLE_SUBMIT";

export interface SignupForm {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
}

export const handleSubmit = (form: SignupForm) : ThunkAction<Promise<void>, {}, {}, ReturnType<typeof afterHandleSubmit>> => async (dispatch) => {
  let res;
  try {
    res = await UserAPI.create(form)
  } catch (error) {
    console.log(error);
    // disptach to display something
    return
  }

  if (!res.success) {
    console.log(res.body.message);
    // disptach to display something
    return
  }

  Router.push({
    pathname: '/'
  })

  dispatch(changeLoginStateToTrue());
  dispatch(afterHandleSubmit());
}

export const afterHandleSubmit = () => {
  return ({
    type: "AFTER_HANDLE_SUBMIT" as typeof AFTER_HANDLE_SUBMIT,
  });
};