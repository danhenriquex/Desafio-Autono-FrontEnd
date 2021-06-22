import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { iStore } from '../../store';
import Header from '../Header/Header';
import NewCards from '../NewCards/NewCards';
import { Container, GridCards, InputSearch } from './styles/StyledFavorite';

const Favorite: React.FC = () => {
  const [query, setQuery] = useState('');
  const arrayBooks = useSelector((store: iStore) => store.favorites);

  return (
    <Container>
      <Header />
      <InputSearch
        placeholder="Pesquise seu livro"
        onChange={e => setQuery(e.target.value)}
        autoFocus
      />
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
