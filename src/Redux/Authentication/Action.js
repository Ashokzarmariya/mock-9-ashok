
import { LOGIN, REQ_USER, SIGN_UP } from "./ActionType";

export const signup = (userData) => async (dispatch) => {
 console.log("signup pendding")
 const res = await  fetch('https://mock-9-api.herokuapp.com/users', {
  method: "POST",
  headers: {
   "Content-Type":"application/json"
  },
  body: JSON.stringify(userData)
 })
 const data = await res.json();
 console.log("signup data", data)
 dispatch({type:SIGN_UP, payload:data})
}

export const login = (userData) => async (dispatch) => {
 const res = await fetch("https://mock-9-api.herokuapp.com/users");
 const users = await res.json();

 let reqUser;
 for (let i = 0; i < users.length; i++){
  if (users[i].email === userData.email && users[i].password === userData.password) {
   reqUser = users[i]
   break;
  }
 }

  dispatch({ type: LOGIN, payload: reqUser });
 if (reqUser) {
  localStorage.setItem("userid", reqUser.id)
 }
 
}

export const reqUser = (userid) => async (dispatch) => {
 const res = await fetch(`https://mock-9-api.herokuapp.com/users/${userid}`)
 const user = await res.json();

 dispatch({ type: REQ_USER, payload: user });
}


