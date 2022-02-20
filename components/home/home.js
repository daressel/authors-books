import React, { memo } from 'react';
import HomeLayout from './home.layout';

const Home = () => {
  const authors = [
    { name: 'author1', books: 10 },
    { name: 'author2', books: 10 },
    { name: 'author3', books: 10 },
    { name: 'author4', books: 10 },
    { name: 'author5', books: 10 },
    { name: 'author6', books: 10 },
    { name: 'author7', books: 10 },
    { name: 'author8', books: 10 },
    { name: 'author9', books: 10 },
    { name: 'author10', books: 10 },
    { name: 'author11', books: 10 },
    { name: 'author12', books: 10 },
  ];

  return <HomeLayout authors={authors} />;
};

export default memo(Home);
