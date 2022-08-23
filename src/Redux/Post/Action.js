import { ADD_POST, GET_GIF, GET_POST } from "./ActionType";

export const newpost = (data) => async (dispatch) => {
 const res = await fetch("https://mock-9-api.herokuapp.com/posts", {
  method: "POST",
  headers: {
   "Content-Type":"application/json"
  },
  body:JSON.stringify(data)
 })
 const post =await res.json();
 console.log("newpost", post)
 
 dispatch({type:ADD_POST,payload:post})
}

export const getallpost = (data) => async (dispatch) => {
 const res = await fetch("https://mock-9-api.herokuapp.com/posts?_sort=id&_order=desc")
 const posts =await res.json();
console.log("all post",posts)
 dispatch({type:GET_POST,payload:posts})
}


export const getgif = (q) => async (dispatch) => {
 const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=kvsah4vEScW2FikzeethaaCr7T5imVVW&q=${q}`) 
 const data = await res.json();
 console.log("data gif",data)
 dispatch({type:GET_GIF, payload:data})
}