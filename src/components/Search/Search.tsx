import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useCallback, useMemo, useState } from 'react';
import api from '../../services/book';
import BookReviewCard from '../Cards/Cards';
import Header from '../Header/Header';
import {
  Container,
  Fields,
  GridCards,
  InputSearch,
} from './styles/StyledSearch';
import Pagination from '../Pagination/Pagination';
import NewCards from '../NewCards/NewCards';
import { useDispatch, useSelector } from 'react-redux';
import { iStore } from '../../store';
import Filter from '../Filter/Filter';

// AIzaSyC4p4aXr10NrjqJrOYk354TKI3HGlvE-qA
// O8W-tBqHA5EC

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

export interface Book {
  book: BookApiInterface[];
  totalItems?: number;
}

const Search: React.FC = () => {
  const [data, setData] = useState<Book>();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(0);

  const fetchBooks = async (pag: number) => {
    // * Requisição para pesquisar os livros
    // if (query === '') {
    //   return;
    // }

    setLoading(prevState => !prevState);
    const response = await api.get(`${query}&startIndex=${pag}&maxResults=20`);

    setData({
      book: response?.data?.items,
      totalItems: response.data?.totalItems,
    });

    setLoading(prevState => !prevState);

    console.log('###resposta: ', response.data);
    console.log('##loading: ', loading);
  };

  // * Paginação

  const PaginationCrement = () => {
    if (pagination + 40 > data?.totalItems!) {
      return;
    }
    setPagination(prevState => prevState + 40);
    fetchBooks(pagination + 40);
  };

  const PaginationDecrement = () => {
    console.log('###valor do pagination: ', pagination);
    if (pagination === 0) {
      return;
    }

    setPagination(prevState => prevState - 40);
    fetchBooks(pagination - 40);
  };

  return (
    <Container>
      <Header />
      <Fields>
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
        <Filter />
        {loading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              onClick={() => fetchBooks(pagination)}
              style={{ height: '50px', width: '250px' }}
            >
              Pesquisar
            </Button>
            {data?.book.length! > 0 && (
              <div style={{ width: '100px' }}>
                <Pagination
                  crement={PaginationCrement}
                  decrement={PaginationDecrement}
                />
              </div>
            )}
          </>
        )}
      </Fields>
      <GridCards>
        {data?.book &&
          data?.book.map(item => (
            <div key={item.id}>
              <NewCards Books={item} />
            </div>
          ))}
      </GridCards>
    </Container>
  );
};

export default Search;
