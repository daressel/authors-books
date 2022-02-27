import { useQuery } from '@apollo/client';
import React, { memo, useState } from 'react';
import { getPage } from '../../queries/aniList';
import HomeLayout from './home.layout';

const Home = () => {
  const { loading, data: pageData } = useQuery(getPage);
  return <>{!loading && <HomeLayout medias={pageData?.Page.media || []} />}</>;
};

export default memo(Home);
