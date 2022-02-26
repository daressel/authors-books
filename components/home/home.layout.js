import Link from 'next/link';
import React, { memo } from 'react';
import {
  HomeWrapper,
  AuthorWrapper,
  AuthorName,
  AuthorBooksCount,
  AuthorInfo,
} from './home.styled';

const HomeLayout = ({ authors, handleClickAuthor }) => {
  console.log(authors);
  return (
    <HomeWrapper>
      {authors &&
        authors.map((author, index) => (
          <Link href="/test/123" key={index}>
            <AuthorWrapper
            // onClick={() => handleClickAuthor(author.name)}
            >
              <AuthorInfo>
                <AuthorName>{author.name}</AuthorName>
                <AuthorBooksCount>{author.books}</AuthorBooksCount>
              </AuthorInfo>
            </AuthorWrapper>
          </Link>
        ))}
    </HomeWrapper>
  );
};

export default memo(HomeLayout);
