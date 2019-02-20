import { connect } from 'react-redux';
import { Dispatch, } from 'redux';
import { handleSubmit, formActions } from '../../actions/signup/form';
import SignupForm from '../../components/signup/form';

const mapDispatchToProps = (dispatch: Dispatch) : typeof formActions => ({
  handleSubmit: form => dispatch(handleSubmit(form)),
})

export default connect(
  mapDispatchToProps
)(SignupForm);
