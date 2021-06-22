import styled from 'styled-components';
import image from '../../../assets/libraryImage.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${image});

  background-size: 100% 100%;
`;

export const Options = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1198px) {
    width: 100px;
  }
`;

export const Search = styled.button`
  width: 250px;
  height: 50px;
  margin: 10px 10px;
  border-radius: 13px;
  border: 1px solid #d6670a;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #893e00;
    color: white;
  }
`;

export const Favorite = styled.button`
  width: 250px;
  height: 50px;
  margin: 10px 10px;
  border-radius: 13px;
  border: 1px solid #d6670a;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #893e00;
    color: white;
  }
`;
