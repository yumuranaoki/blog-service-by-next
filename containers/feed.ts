import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { changeLoginState } from '../actions/session';
import Feed from '../components/feed/index';

export const feedActions = { changeLoginState };

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch: Dispatch<any>) : typeof feedActions => ({
  changeLoginState: () => dispatch(changeLoginState()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
