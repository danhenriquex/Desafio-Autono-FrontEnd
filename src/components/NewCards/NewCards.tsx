import { Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BookApiInterface } from '../../models/interface';
import { FavoriteTypes } from '../../store/ducks/favorites/types';
import ModalDetails from '../Modal/Modal';
import { Card, Container, Img, Information } from './styles/StyledNewCards';

export interface ownProps {
  Books: BookApiInterface;
  favoriteState?: boolean;
  isFavorite?: boolean;
}

const NewCards: React.FC<ownProps> = React.memo(
  ({ Books, favoriteState, isFavorite }): JSX.Element => {
    const [favorite, setFavorite] = useState(isFavorite);
    const [state, setState] = useState(false);
    const dispatch = useDispatch();

    function handleFavorite(Livros: BookApiInterface, id: string) {
      if (favorite === false) {
        dispatch({ type: FavoriteTypes.REMOVE_FAVORITE, payload: id });
        setFavorite(true);
      } else {
        dispatch({ type: FavoriteTypes.ADD_FAVORITE, payload: Livros });
        setFavorite(false);
      }
    }

    function removeFavorite(id: string) {
      dispatch({
        type: FavoriteTypes.REMOVE_FAVORITE,
        payload: id,
      });
      setFavorite(true);
    }

    function handleClose() {
      setState(false);
    }

    function handleOpen() {
      setState(true);
    }

    return (
      <Container>
        <Card>
          <Img>
            <img
              src={
                Books.volumeInfo?.imageLinks?.thumbnail ||
                'http://centrodametropole.fflch.usp.br/sites/centrodametropole.fflch.usp.br/files/user_files/livros/imagem/capa-no-book-cover.png'
              }
              alt="books"
            />
          </Img>
          <Information>
            <p>{Books.volumeInfo?.title}</p>
            <p>{Books.volumeInfo?.authors}</p>
            <p>{Books.volumeInfo?.publishedDate}</p>
            <p>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {favoriteState ? (
                  <ClearIcon onClick={() => removeFavorite(Books.id!)} />
                ) : (
                  <FavoriteIcon
                    onClick={() => handleFavorite(Books, Books.id!)}
                    color={favorite ? 'inherit' : 'secondary'}
                  />
                )}

                <Button variant="outlined" onClick={handleOpen}>
                  Detalhes +
                </Button>
                {state && (
                  <ModalDetails
                    show={state}
                    handleClose={handleClose}
                    item={Books}
                  />
                )}
              </div>
            </p>
          </Information>
        </Card>
      </Container>
    );
  },
);
export default NewCards;
