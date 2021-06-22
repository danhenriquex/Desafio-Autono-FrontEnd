import { BookApiInterface } from '../../../models/interface';
import {
  iActionAddFavorite,
  iActionRemoveFavorite
} from './interface';
import { FavoriteTypes } from './types';

export const AddFavorite = (params: BookApiInterface): iActionAddFavorite => ({
  type: FavoriteTypes.ADD_FAVORITE,
  payload: params,
});

export const RemoveFavorite = (params: string): iActionRemoveFavorite => ({
  type: FavoriteTypes.REMOVE_FAVORITE,
  payload: params,
});

export type FavoritesActions = iActionAddFavorite | iActionRemoveFavorite;
