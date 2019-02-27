import { afterGetPosts } from '../actions/feed'
import { Reducer } from 'redux';

export interface PostProps {
  id: number,
  title: string,
  place: string,
  detail: string,
}

export type FeedState = {
  posts: PostProps[]
}

const iniitialState: FeedState = {
  posts: []
}

export type FeedAction = ReturnType<typeof afterGetPosts>

const reducer: Reducer<FeedState, FeedAction> = (state=iniitialState, action) => {
  switch (action.type) {
    case 'AFTER_GET_POSTS':
      return { ...state , posts: action.posts };
    default:
      return state;
  }
} 

export default reducer;



