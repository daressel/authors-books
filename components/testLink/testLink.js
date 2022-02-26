import { memo } from 'react';
import TestLinkLayout from './testLink.layout';

const TestLink = ({ id }) => {
  return (
    <>
      <TestLinkLayout testId={id} />
    </>
  );
};

export default memo(TestLink);
