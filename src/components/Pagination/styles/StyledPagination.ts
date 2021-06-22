import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Crement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 100%;
  cursor: pointer;
  background-color: #ddd;
  border-radius: 10px;
  &:hover {
    background-color: #893e00;
  }
`;

export const Decrement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 100%;
  cursor: pointer;
  background-color: #ddd;
  border-radius: 10px;
  &:hover {
    background-color: #893e00;
  }
`;
