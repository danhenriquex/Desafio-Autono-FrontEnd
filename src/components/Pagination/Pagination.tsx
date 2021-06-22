import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Crement, Decrement, Container } from './styles/StyledPagination';

interface ownProps {
  crement: () => any;
  decrement: () => any;
  className?: string;
}

const Pagination: React.FC<ownProps> = ({ crement, decrement, className }) => {
  return (
    <Container className={className}>
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
