import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coinsReducer from '../reducers/coins';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      coinsData: coinsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
