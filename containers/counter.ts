import { connect } from 'react-redux';
import { Dispatch, } from 'redux';
import { State } from '../reducers/index'
import { increment, decrement, counterActions } from '../actions/counter';
import Counter from '../components/counter';

const mapStateToProps = (state: State) => ({
  number: state.number,
});  

const mapDispatchToProps = (dispatch: Dispatch) : typeof counterActions => ({
  increment: number => dispatch(increment(number)),
  decrement: number => dispatch(decrement(number)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

