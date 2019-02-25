import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { handleSubmit, formActions } from '../actions/signup';
import SignupForm from '../components/signup/index';
import { SignupState } from '../reducers/signup';

const mapStateToProps = (state: SignupState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch<any>) : typeof formActions => ({
  handleSubmit: form => dispatch(handleSubmit(form)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
