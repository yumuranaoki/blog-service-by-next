import * as React from 'react';
import DefaultLayout from '../layouts/default';
import { PostAPIServer } from '../api/fromServer/post'
import { PostAPI } from '../api/post'
import { PostProps } from '../reducers/feed';

type PostComponentProps = { post: PostProps } & { isLoggedIn: boolean }

const Post: React.FC<PostComponentProps> = ({ post, isLoggedIn }) => {
  const {
    title,
    place,
    detail
  } = post
  return (
    <DefaultLayout logoutButton={isLoggedIn} >
      <h1>Post</h1>
      <span>{ title }</span>
      <span>{ place }</span>
      <span>{ detail }</span>
    </DefaultLayout>
  )
}

Post.getInitialProps = async ({ query, req }) => {
  try {
    let res;
    if (process.browser) {
      res = await PostAPI.get(query.id)
    } else {
      const cookie = req.headers.cookie
      res = await PostAPIServer.get(query.id, cookie)
    }

    if (res.code === 401 || 500) {
      return {
        post: [],
        isLoggedIn: false,
      }  
    }

    const post = res.body.post;
    return {
      post,
      isLoggedIn: true,
    }

  } catch (error) {
    console.log(error);
    return {
      post: {},
      isLoggedIn: false,
    }
  }
}

export default Post;


