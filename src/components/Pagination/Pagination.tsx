import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Increment, Decrement, Container } from './styles/StyledPagination';

interface ownProps {
  increment: () => any;
  decrement: () => any;
  className?: string;
}

const Pagination: React.FC<ownProps> = ({
  increment,
  decrement,
  className,
}) => {
  return (
    <Container className={className}>
      <Decrement onClick={decrement}>
        <ArrowBackIosIcon />
      </Decrement>
      <Increment onClick={increment}>
        <ArrowForwardIosIcon />
      </Increment>
    </Container>
  );
};

export default Pagination;
