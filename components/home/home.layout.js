import React, { memo } from 'react';
import Media from '../media/media';
import { HomeWrapper, MainWrapper } from './home.styled';

const HomeLayout = ({ medias }) => {
  return (
    <MainWrapper>
      <HomeWrapper>
        {medias.map((media, index) => {
          return <Media key={index} media={media} />;
        })}
      </HomeWrapper>
    </MainWrapper>
  );
};

export default memo(HomeLayout);
