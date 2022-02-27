import Image from 'next/image';
import { memo } from 'react';
import {
  AnimeTitle,
  AnimeWrapper,
  AnimeInfo,
  AnimeImageWrapper,
} from './anime.styled';

const AnimeLayout = ({ animeData }) => {
  return (
    <>
      <AnimeWrapper>
        <AnimeTitle>{animeData.title.userPreferred}</AnimeTitle>
        <AnimeInfo>
          <AnimeImageWrapper>
            {animeData.bannerImage && (
              <Image src={animeData.bannerImage} width={100} height={100} />
            )}
          </AnimeImageWrapper>
        </AnimeInfo>
      </AnimeWrapper>
    </>
  );
};

export default memo(AnimeLayout);
