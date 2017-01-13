import { connect } from 'react-redux';
import App from '../components/App';
import { handleInputChange } from '../actions';

const mapStateToProps = state => ({
  compiledMarkDown: state.compiledMarkDown,
});

const mapDispatchToProps = dispatch => ({
  handleInputChange: input => dispatch(handleInputChange(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
