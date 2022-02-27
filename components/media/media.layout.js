import { memo } from 'react';
import { MediaWrapper, GenreWrapper } from './media.styled';

const MediaLayout = ({ genres }) => {
  return (
    <>
      <MediaWrapper>
        {genres?.map((genre, index) => (
          <GenreWrapper key={index}>{genre}</GenreWrapper>
        ))}
      </MediaWrapper>
    </>
  );
};

export default memo(MediaLayout);
