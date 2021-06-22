import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1198px) {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    justify-content: center;
  }
`;

export const GridCards = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  width: 100%;
  flex-direction: column;

  @media only screen and (max-width: 1430px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

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

export const Fields = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Footer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  .pagination {
    width: 100px;
    @media only screen and (max-width: 1198px) {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 105px;
`;
