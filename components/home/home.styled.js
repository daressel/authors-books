import styled from 'styled-components';
import authorsBackground from '../../public/images/authors_background.jpg';

export const HomeWrapper = styled.div`
  width: 60%;
  min-height: 100vh;
  min-width: 180px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-image: url(${authorsBackground});
`;

export const AuthorWrapper = styled.div`
  width: 20%;
  min-width: 150px;
  height: 300px;
  background-color: white;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s;
  flex-grow: 1;
  background-color: #b5b5b5;
  opacity: 1;
  color: white;

  & > span {
    display: none;
  }
  :hover {
    box-shadow: 0 0 5px rgb(46, 46, 46);
    flex-grow: 2;
    box-shadow: inset 0 0 0 1000px rgb(0 0 0 / 20%);

    & > span {
      display: unset;
    }
  }
`;

export const AuthorName = styled.span`
  opacity: 1;
`;

export const AuthorBooksCount = styled.span``;
