import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookApiInterface } from '../../models/interface';
import api from '../../services/book';
import { iStore } from '../../store';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import NewCards from '../NewCards/NewCards';
import Pagination from '../Pagination/Pagination';
import {
  Container,
  Fields,
  Footer,
  GridCards,
  InputSearch,
  Loading,
} from './styles/StyledSearch';
export interface Book {
  book: BookApiInterface[];
  totalItems?: number;
}

const Search: React.FC = () => {
  const [data, setData] = useState<Book>();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(0);

  const arrayBooks = useSelector((store: iStore) => store.favorites);

  // * Requisição para pesquisar os livros
  const fetchBooks = useCallback(async () => {
    setLoading(prevState => !prevState);
    const response = await api.get(
      `${query}&startIndex=${pagination}&maxResults=20`,
    );

    setData({
      book: response?.data?.items,
      totalItems: response.data?.totalItems,
    });

    setLoading(prevState => !prevState);

    console.log('###resposta: ', response.data);
  }, [query, pagination]);

  // * Paginação

  useEffect(() => {
    fetchBooks();
  }, [pagination]);

  const PaginationCrement = () => {
    if (pagination + 20 > data?.totalItems!) {
      return;
    }

    setPagination(prevState => prevState + 20);
  };

  const PaginationDecrement = () => {
    if (pagination - 20 < 0) {
      return;
    }

    setPagination(prevState => prevState - 20);
  };

  return (
    <Container>
      <Header />
      <Fields>
        <InputSearch
          placeholder="Pesquise seu livro"
          onChange={e => setQuery(e.target.value)}
          autoFocus
        />
        {loading ? (
          <Loading>
            <CircularProgress />
          </Loading>
        ) : (
          <>
            <Button
              variant="contained"
              type="submit"
              onClick={() => fetchBooks()}
              style={{
                height: '50px',
                width: '250px',
                background: '#EE8C6A ',
                borderRadius: '6px',
              }}
            >
              Pesquisar
            </Button>
            {data?.book.length! > 0 && <div style={{ width: '100px' }}></div>}
          </>
        )}
      </Fields>
      <Footer>
        {!loading && (
          <Pagination
            className="pagination"
            crement={PaginationCrement}
            decrement={PaginationDecrement}
          />
        )}
        <GridCards>
          {data?.book &&
            data?.book.map(item => (
              <div key={item.id}>
                <NewCards
                  Books={item}
                  isFavorite={
                    arrayBooks.favorites.filter(book => book.id === item.id)
                      .length === 0
                  }
                />
              </div>
            ))}
        </GridCards>
      </Footer>
    </Container>
  );
};

export default Search;
