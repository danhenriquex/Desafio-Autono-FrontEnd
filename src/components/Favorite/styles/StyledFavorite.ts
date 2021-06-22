import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GridCards = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  width: 100%;
  flex-direction: column;

  @media only screen and (max-width: 1198px) {
    display: block;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const InputSearch = styled.input`
  display: flex;
  width: 361px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  text-align: center;
`;
