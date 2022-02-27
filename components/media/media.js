import { memo } from 'react';
import MediaLayout from './media.layout';

const Media = ({ media }) => {
  const handleClickMedia = () => {
    console.log(12312312);
  };

  return (
    <>
      <MediaLayout media={media} handleClickMedia={handleClickMedia} />
    </>
  );
};

export default memo(Media);
