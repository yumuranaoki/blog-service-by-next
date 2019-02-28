import * as React from 'react';
import styled from 'styled-components';
import { feedActions } from '../../containers/feed';
import { FeedState, PostProps } from '../../reducers/feed';
import { PostInList } from '../post/index';

interface FeedProps {
  posts: PostProps[]
}

class Feed extends React.Component<FeedProps> {
  render() {
    const posts = [];
    for (let i=0; i < this.props.posts.length; i++) {
      const {
        id,
        title,
        place,
        detail,
      } = this.props.posts[i]
      posts.push(<PostInList key={i} title={title} place={place} detail={detail} id={id} />)
    }

    return (
      <div>
        <span>This is Feed</span>
        { posts }
      </div>
    )
  }
}

export default Feed;
