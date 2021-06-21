import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store, { iStore } from '../../store';
import Header from '../Header/Header';
import NewCards from '../NewCards/NewCards';
import { Container, GridCards, InputSearch } from './styles/StyledFavorite';

const Favorite: React.FC = () => {
  const [query, setQuery] = useState('');
  const arrayBooks = useSelector((store: iStore) => store.favorites);

  return (
    <Container>
      <Header />
      <InputSearch>
        <TextField
          id="filled-basic"
          label="Pesquise seu livro"
          variant="filled"
          onChange={e => setQuery(e.target.value)}
          autoFocus
          style={{ width: '510px', borderRadius: '15px' }}
        />
      </InputSearch>
      <GridCards>
        {arrayBooks.favorites
          .filter(item =>
            item.volumeInfo?.title.toLowerCase().includes(query.toLowerCase()),
          )
          .map(item => (
            <NewCards Books={item} favoriteState={true} />
          ))}
      </GridCards>
    </Container>
  );
};

export default Favorite;
