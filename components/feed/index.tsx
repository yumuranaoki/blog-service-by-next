import * as React from 'react';
import styled from 'styled-components';
import { PostAPI } from '../../api/post';
import { feedActions } from '../../containers/feed';

class Feed extends React.Component<typeof feedActions> {
  async componentDidMount() {
    let res;
    try {
      res = await PostAPI.get();
    } catch (error) {
      console.log(error)
    }
    
    console.log(res);
    if (res.code === 401) {
      this.props.changeLoginState()
    }
  }

  render() {
    return (
      <div>
        <span>Feed</span>
      </div>
    )
  }
}

export default Feed;
