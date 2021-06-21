import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  Img,
  Content,
  Information,
  // Div,
} from './styles/StyledNewCards';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { FavoriteTypes } from '../../store/ducks/favorites/types';
import ModalDetails from '../Modal/Modal';
import { Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

interface BookApiInterface {
  id?: string;
  selfLink: string;
  volumeInfo?: {
    title: string;
    subtitle: string;
    publishedDate: string;
    authors: [];
    imageLinks: { thumbnail: string; smallThumbnail: string };
    description: string;
    infoLink: string;
  };
}

export interface ownProps {
  Books: BookApiInterface;
  favoriteState?: boolean;
}

const NewCards: React.FC<ownProps> = React.memo(
  ({ Books, favoriteState }): JSX.Element => {
    const [favorite, setFavorite] = useState(true);
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
        payload: Books.id,
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
