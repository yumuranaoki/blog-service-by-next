import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getPosts } from '../actions/feed';
import { Reducer } from '../reducers/index';
import Feed from '../components/feed/index';

export const feedActions = { getPosts };

const mapStateToProps = (state: Reducer) => ({
  posts: state.feedReducer.posts,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) : typeof feedActions => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
