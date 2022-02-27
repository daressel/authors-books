import { useQuery } from '@apollo/client';
import { memo } from 'react';
import { getMedia } from '../../queries/aniList';
import MediaLayout from './media.layout';

const Media = ({ id }) => {
  const { loading, data } = useQuery(getMedia, {
    variables: {
      id: id,
    },
  });

  const genres = data?.Media?.genres || [];

  return (
    <>
      <MediaLayout genres={genres} />
    </>
  );
};

export default memo(Media);
