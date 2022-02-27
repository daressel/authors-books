import React, { memo, useState } from 'react';
import HomeLayout from './home.layout';

const Home = () => {
  const mediasInit = Array(10).fill();

  const [medias, setMedias] = useState(mediasInit);

  return <HomeLayout medias={medias} />;
};

export default memo(Home);
