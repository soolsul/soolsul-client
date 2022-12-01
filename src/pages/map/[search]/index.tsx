import dynamic from 'next/dynamic';
import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { BottomMenu, Shadow } from '@components/common';
import { CommonWrapper } from '@components/common/commonStyle';
import { Marker, CurrentLocationButton, Header, FilterMenu, FeedMenu } from '@components/pages/map';
import { useMap } from '@hooks/pages/map';
import { useRecoilValue } from 'recoil';
import { filterAtom } from '@recoil/map';
import { useEffect, useState } from 'react';
import apis from '@apis/index';
import { PostType } from '@lib/types';

function MapPage() {
  const filterState = useRecoilValue(filterAtom);
  const [posts, setPosts] = useState<PostType.PostType[]>([]);
  const { barList, mapInfo, myLocation, handleBoundsChanged, handleClickCurrentLocation } = useMap();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await apis.posts.getFeeds({ latitude: 37.565314, longitude: 126.992646, pages: 0 });
      setPosts(result!.data.postList);
      setIsLoading(false);
    })();
  }, []);

  return (
    <CommonWrapper>
      <StyledMap center={{ ...mapInfo }} onBoundsChanged={handleBoundsChanged} isPanto={true} tileAnimation={true}>
        <Header />
        {barList?.map((bar) => {
          return <Marker {...bar} name={bar.barName} />;
        })}
        <Marker latitude={myLocation!.coords.latitude} longitude={myLocation!.coords.longitude} name="현위치" />
        <CurrentLocationButton onClick={handleClickCurrentLocation} />
        <BottomMenu />
        <FilterMenu />
        {!isLoading && <FeedMenu posts={posts} />}
      </StyledMap>
      {filterState.isOpen && <Shadow />}
      {(!mapInfo || !myLocation || isLoading) && <Shadow isLoading={true} />}
    </CommonWrapper>
  );
}

export default dynamic(() => Promise.resolve(MapPage), { ssr: false });

const StyledMap = styled(Map)`
  height: 100%;
  width: 100%;
  transition: 0.5s;
`;
