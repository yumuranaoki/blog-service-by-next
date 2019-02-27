import * as React from 'react';
import styled from 'styled-components';
import { feedActions } from '../../containers/feed';
import { FeedState } from '../../reducers/feed';
import { PostInList } from '../post/index';

class Feed extends React.Component<FeedState & typeof feedActions> {
  async componentDidMount() {
    this.props.getPosts()
  }

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
