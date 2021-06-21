import { createStore, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { FavoriteState } from './ducks/favorites/interface';

import rootReducer from './ducks/rootReducer';

export interface iStore {
  favorites: FavoriteState;
}
let middleware: any = [];

if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunk, logger];
} else {
  middleware = [...middleware, thunk];
}

const store: Store<iStore> = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

export default store;
