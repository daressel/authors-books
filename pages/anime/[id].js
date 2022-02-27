import { useRouter } from 'next/router';
import Anime from '../../components/amine/anime';

export default () => {
  const router = useRouter();
  const { id } = router.query;
  return <>{id && <Anime animeId={id} />}</>;
};
