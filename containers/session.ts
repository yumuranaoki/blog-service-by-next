import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Session from '../components/session';
import { Reducer } from '../reducers/index';

const mapStateToProps = (state: Reducer) => ({
  isLoggedIn: state.sessionReducer.isLoggedIn,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Session);
