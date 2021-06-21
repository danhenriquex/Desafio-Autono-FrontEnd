import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favorites from './favorites/reducer';

export const rootReducer = combineReducers({
  favorites,
});

const persistConfig = {
  key: 'Books',
  storage,
  blacklist: [],
  transforms: [],
};

export default persistReducer(persistConfig, rootReducer);
