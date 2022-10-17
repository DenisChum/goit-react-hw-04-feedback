import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  width: 400px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0;
`;

export const Item = styled.li`
  button {
    background-color: white;
    border: 2px solid orange;
    border-radius: 6px;
    width: 120px;
    height: 40px;
    cursor: pointer;
    &:hover {
      background-color: rgb(255,165,0);
    }
  }
`;