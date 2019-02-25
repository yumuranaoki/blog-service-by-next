import { AnyAction } from "redux";

const CHANGE_LOGIN_STATE = "CHANGE_LOGIN_STATE";

export const changeLoginState = () : AnyAction => ({
  type: 'CHANGE_LOGIN_STATE' as typeof CHANGE_LOGIN_STATE
})