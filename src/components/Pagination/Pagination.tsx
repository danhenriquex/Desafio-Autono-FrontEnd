import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Crement, Decrement, Container } from './styles/StyledPagination';

interface ownProps {
  crement: () => any;
  decrement: () => any;
}

const Pagination: React.FC<ownProps> = ({ crement, decrement }) => {
  return (
    <Container>
      <Decrement onClick={decrement}>
        <ArrowBackIosIcon />
      </Decrement>
      <Crement onClick={crement}>
        <ArrowForwardIosIcon />
      </Crement>
    </Container>
  );
};

export default Pagination;