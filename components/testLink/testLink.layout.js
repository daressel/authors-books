import { memo } from 'react';

const TestLinkLayout = ({ testId }) => {
  const handleChange = () => {
    console.log(1231231231);
  };

  return (
    <>
      <input value={testId} onChange={handleChange} />
    </>
  );
};

export default memo(TestLinkLayout);
