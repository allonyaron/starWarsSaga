import { connect } from 'react-redux';
import App from '../components/App';
import { fetchStarWarsRequest } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    filmsData: state.starWarsReducer.filmsData,
    errorMsg: state.error.errorMsg
  };
}

const bindActionsToDispatch = dispatch => (
  { 
    fetchStarWarsRequest: (url) => dispatch(fetchStarWarsRequest(url))
  }
)

const AppContainer = connect(mapStateToProps, bindActionsToDispatch)(App)

export default AppContainer;


// export default connect()(App);