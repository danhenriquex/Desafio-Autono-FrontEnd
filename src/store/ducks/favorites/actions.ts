import { Action } from 'redux';
import { FavoriteTypes } from './types';
import {
  iActionAddFavorite,
  iActionRemoveFavorite,
  FavoriteState,
} from './interface';
import { BookApiInterface } from '../../../models/interface';

export const AddFavorite = (params: BookApiInterface): iActionAddFavorite => ({
  type: FavoriteTypes.ADD_FAVORITE,
  payload: params,
});

export const RemoveFavorite = (params: string): iActionRemoveFavorite => ({
  type: FavoriteTypes.REMOVE_FAVORITE,
  payload: params,
});

export type FavoritesActions = iActionAddFavorite | iActionRemoveFavorite;
