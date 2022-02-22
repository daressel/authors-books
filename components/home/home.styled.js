import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 60%;
  min-height: 100vh;
  min-width: 180px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const AuthorWrapper = styled.div`
  width: 20%;
  min-width: 150px;
  height: 300px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  border: 1px solid #606060;
  cursor: pointer;
  background-image: url('/images/authors_background.jpg');
  background-position: center;
  background-size: 1150px;
  border-radius: 10px;
  transition: all 0.2s;
  flex-grow: 1;
  color: white;
  :hover {
    box-shadow: 0 0 5px rgb(46, 46, 46);
    flex-grow: 2;
    box-shadow: inset 0 0 0 1000px rgb(0 0 0 / 50%);
  }
`;

export const AuthorName = styled.span`
  margin: 10px;
  font-size: 24px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const AuthorBooksCount = styled.span`
  margin: 10px;
  font-size: 20px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
