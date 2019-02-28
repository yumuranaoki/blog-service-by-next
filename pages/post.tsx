import * as React from 'react';
import DefaultLayout from '../layouts/default';
import { PostAPIServer } from '../api/fromServer/post'
import { PostAPI } from '../api/post'
import { PostProps } from '../reducers/feed';

const Post: React.FC<{post: PostProps}> = ({ post }) => {
  const {
    title,
    place,
    detail
  } = post
  return (
    <DefaultLayout>
      <h1>Post</h1>
      <span>{ title }</span>
      <span>{ place }</span>
      <span>{ detail }</span>
    </DefaultLayout>
  )
}

Post.getInitialProps = async ({ query, req }) => {
  try {
    if (process.browser) {
      const res = await PostAPI.get(query.id)
      console.log(res);
      const post = res.body.post;
      return {
        post
      }
    } else {
      const cookie = req.headers.cookie
      const res = await PostAPIServer.get(query.id, cookie)
      console.log(res);
      const post = res.body.post;
      return {
        post
      }
    }
  } catch (error) {
    console.log(error);
    return {
      post: {}
    }
  }
}

export default Post;


