import Link from 'next/link';
import { memo } from 'react';
import { MediaWrapper, GenreWrapper, MediaTitle } from './media.styled';

const MediaLayout = ({ media, handleClickMedia }) => {
  return (
    <>
      <Link href={`/anime/${media.id}`}>
        <MediaWrapper onClick={handleClickMedia}>
          <MediaTitle>{media.title.userPreferred}</MediaTitle>
        </MediaWrapper>
      </Link>
    </>
  );
};

export default memo(MediaLayout);
