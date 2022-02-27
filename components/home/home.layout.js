import React, { memo } from 'react';
import Media from '../media/media';
import { HomeWrapper } from './home.styled';

const HomeLayout = ({ medias }) => {
  return (
    <HomeWrapper>
      {medias &&
        medias.map((media, index) => {
          return <Media key={index} id={index} />;
        })}
    </HomeWrapper>
  );
};

export default memo(HomeLayout);
