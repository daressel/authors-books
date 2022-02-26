import { useRouter } from 'next/router';
import TestLink from '../../components/testLink/testLink';

export default () => {
  const router = useRouter();
  const { id } = router.query;
  return <>{id && <TestLink id={id} />}</>;
};
