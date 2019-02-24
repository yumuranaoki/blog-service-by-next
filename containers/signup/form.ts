import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { handleSubmit, formActions } from '../../actions/signup/form';
import SignupForm from '../../components/signup/form';
import { State } from '../../reducers/signup/form';

const mapStateToProps = (state: State) => ({
})

const mapDispatchToProps = (dispatch: Dispatch<any>) : typeof formActions => ({
  handleSubmit: form => dispatch(handleSubmit(form)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
