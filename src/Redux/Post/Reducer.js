import { ADD_POST, GET_GIF, GET_POST} from "./ActionType"

const initialState = {
 post: {},
 posts: [],
 gif:[],
}

export const postReducer = (store=initialState, {type,payload}) => {
 if (type === ADD_POST) {
  return {...store, post:payload}
 }
 else if (type === GET_POST) {
  return {...store,posts:payload}
 }
 else if (type === GET_GIF) {
  return {...store, gif:payload}
  }
 else return store
}