import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles/StyledExample';

// AIzaSyC4p4aXr10NrjqJrOYk354TKI3HGlvE-qA

const Example: React.FC = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const example = 'Exemplo de componente para o teste da AutonoDev';
  const apiKey = 'AIzaSyC4p4aXr10NrjqJrOYk354TKI3HGlvE-qA';
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=${apiKey}`,
      );
      setLoading(false);
      setData(response.data);
      console.log('###resposta da requisição:', response.data);
    };
    fetchBooks();
  }, []);
  return (
    <Container>
      <h1>funcionou</h1>
    </Container>
  );
};

export default Example;
