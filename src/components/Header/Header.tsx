import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Options, Search, Favorite } from './styles/StyledHeader';

const Header: React.FC = () => {
  const history = useHistory();

  const SearchBooks = () => {
    history.push('/');
  };

  const SearchFavorites = () => {
    history.push('/favorites');
  };

  return (
    <Container>
      <Options>
        <Search onClick={SearchBooks}>Pesquisar</Search>
        <Favorite onClick={SearchFavorites}>Favoritos</Favorite>
      </Options>
    </Container>
  );
};

export default Header;
