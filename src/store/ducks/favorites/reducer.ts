import { Reducer } from 'redux';
import { FavoriteTypes } from './types';
import { FavoriteState } from './interface';
import { FavoritesActions } from './actions';

const INITIAL_STATE: FavoriteState = {
  favorites: [],
};

const ReducerFavorite = (state = INITIAL_STATE, action: FavoritesActions) => {
  switch (action.type) {
    case FavoriteTypes.ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case FavoriteTypes.REMOVE_FAVORITE:
      return {
        favorites: state.favorites.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default ReducerFavorite;
