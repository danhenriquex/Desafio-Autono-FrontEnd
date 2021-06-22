import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`;

export const Card = styled.div`
  position: relative;
  max-width: 300px;
  height: 450px;
  width: 420px;
  padding-top: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background: #fff;
  /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5); */
  border: 1px solid gray;
  transition: 0.3s ease-in-out;

  /* h2,
  p,
  FavoriteIcon {
    opacity: 0;
  } */
  /* &:hover {
    height: 440px;
    width: 420px;
    h2,
    p {
      visibility: visible;
      opacity: 1;
      transition-delay: 0.3s;
    }
  } */
`;

export const Img = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 260px;
  /* top: -60px; */
  left: 20px;
  /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2); */
  /* border: 1px solid gray; */

  img {
    max-width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.3s;
  }
`;

export const Information = styled.div`
  text-align: center;
`;
