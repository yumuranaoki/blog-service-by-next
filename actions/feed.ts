import { Dispatch } from "react";
import { PostAPI } from '../api/post';
import { changeLoginStateToFalse } from './session';
import { PostProps } from '../reducers/feed'

export const getPosts = () => async (dispatch: Dispatch<any>) => {
  let res;
  try {
    res = await PostAPI.getAll();
  } catch (error) {
    console.log(error)
    dispatch(changeLoginStateToFalse())
    return
  }
  
  if (res.code === 401) {
    dispatch(changeLoginStateToFalse())
    return
  }

  dispatch(afterGetPosts(res.body.posts))
}

export const afterGetPosts = (posts: PostProps[]) => {
  return ({
    type: 'AFTER_GET_POSTS',
    posts,
  })
}