import { useQuery } from '@apollo/client';
import { memo } from 'react';
import { getMedia } from '../../queries/aniList';
import AnimeLayout from './anime.layout';

const Anime = ({ animeId }) => {
  const { loading, data } = useQuery(getMedia, {
    variables: {
      id: animeId,
    },
  });

  return <>{!loading && <AnimeLayout animeData={data.Media} />}</>;
};

export default memo(Anime);
