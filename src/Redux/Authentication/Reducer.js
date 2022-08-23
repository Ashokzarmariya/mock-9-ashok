import { LOGIN, LOGOUT, REQ_USER, SIGN_UP } from "./ActionType"

const initialState = {
 reqUser: {},
 isError: false,
 isLogin:false,
}

export const authReducer = (store=initialState, {type,payload}) => {
 if (type === LOGIN) {
  return {...store, loginData:payload, isLogin:payload?true:false, isError:payload?false:true}
 }
 else if (type === SIGN_UP) {
  return {...store,signupData:payload, isSignup:true}
 }
  
 else if (type === REQ_USER) {
  return {...store, reqUser:payload}
  }
 
 else if (type === LOGOUT) {
  return {...store, isSignup:false}
 }
 
 else return store
}