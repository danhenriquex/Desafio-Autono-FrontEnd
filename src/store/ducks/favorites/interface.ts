import { Action } from 'redux';
import { FavoriteTypes } from './types';
import { BookApiInterface } from '../../../models/interface';

export interface FavoriteState {
  favorites: BookApiInterface[];
}

export interface iActionAddFavorite extends Action {
  type: FavoriteTypes.ADD_FAVORITE;
  payload: BookApiInterface;
}

export interface iActionRemoveFavorite extends Action {
  type: FavoriteTypes.REMOVE_FAVORITE;
  payload: string;
}
