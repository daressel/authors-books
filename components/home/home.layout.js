import React, { memo } from 'react';
import {
  HomeWrapper,
  AuthorWrapper,
  AuthorName,
  AuthorBooksCount,
  AuthorInfo,
} from './home.styled';

const HomeLayout = ({ authors }) => {
  console.log(authors);
  return (
    <HomeWrapper>
      {authors &&
        authors.map((author, index) => (
          <AuthorWrapper key={index}>
            <AuthorInfo>
              <AuthorName>{author.name}</AuthorName>
              <AuthorBooksCount>{author.books}</AuthorBooksCount>
            </AuthorInfo>
          </AuthorWrapper>
        ))}
    </HomeWrapper>
  );
};

export default memo(HomeLayout);
