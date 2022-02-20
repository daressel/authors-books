import React, { memo } from 'react';
import {
  HomeWrapper,
  AuthorWrapper,
  AuthorName,
  AuthorBooksCount,
} from './home.styled';

const HomeLayout = ({ authors }) => {
  console.log(authors);
  return (
    <HomeWrapper>
      {authors &&
        authors.map((author, index) => (
          <AuthorWrapper key={index}>
            <AuthorName>{author.name}</AuthorName>
            <AuthorBooksCount>{author.books}</AuthorBooksCount>
          </AuthorWrapper>
        ))}
    </HomeWrapper>
  );
};

export default memo(HomeLayout);
