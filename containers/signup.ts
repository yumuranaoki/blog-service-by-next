import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { handleSubmit } from '../actions/signup';
import SignupForm from '../components/signup/index';
import { SignupState } from '../reducers/signup';

export const signupActions = { handleSubmit };

const mapStateToProps = (state: SignupState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch<any>) : typeof signupActions => ({
  handleSubmit: form => dispatch(handleSubmit(form)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
