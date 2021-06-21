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

  @media only screen and (max-width: 1198px) {
    display: block;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
