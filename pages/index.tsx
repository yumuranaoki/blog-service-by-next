import * as React from 'react';
import DefaultLayout from '../layouts/default';
import Session from '../containers/session';
import Feed from '../components/feed';
import Main from '../components/main/index';
import { PostAPIServer } from '../api/fromServer/post';
import { PostAPI } from '../api/post';
import { PostProps } from '../reducers/feed';

interface AppProps {
  posts: PostProps[],
  isLoggedIn: boolean,
}

const App: React.FC<AppProps> = ({ posts, isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <DefaultLayout logoutButton={isLoggedIn}>
        <Main />
      </DefaultLayout>
    );
  }
  return (
    <DefaultLayout logoutButton={isLoggedIn}>
      <Feed posts={posts}/>
    </DefaultLayout>
  )
}

App.getInitialProps = async ({ req }) => {
  try {
    let res;
    if (process.browser) {
      res = await PostAPI.getAll();
    } else {
      const cookie = req.headers.cookie
      res = await PostAPIServer.getAll(cookie);
    }
    
    const posts = res.body.posts

    if (res.code === 401 || 500) {
      return {
        posts: [],
        isLoggedIn: false,  
      }  
    }
    return {
      posts,
      isLoggedIn: true,
    }

  } catch (error) {
    return {
      posts: [],
      isLoggedIn: false,
    }
  }
}

export default App;