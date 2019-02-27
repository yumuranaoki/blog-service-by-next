import { AnyAction } from "redux";

const CHANGE_LOGIN_STATE_TO_TRUE = "CHANGE_LOGIN_STATE_TO_TRUE";
const CHANGE_LOGIN_STATE_TO_FALSE = "CHANGE_LOGIN_STATE_TO_FALSE";

export const changeLoginStateToTrue = () : AnyAction => ({
  type: 'CHANGE_LOGIN_STATE_TO_TRUE' as typeof CHANGE_LOGIN_STATE_TO_TRUE
})

export const changeLoginStateToFalse = () : AnyAction => ({
  type: 'CHANGE_LOGIN_STATE_TO_FALSE' as typeof CHANGE_LOGIN_STATE_TO_FALSE
})