import dynamic from 'next/dynamic';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { BottomMenu } from '@components/common';
import { CommonWrapper } from '@components/common/commonStyle';
import { Marker, CurrentLocationButton, Error, Header } from '@components/pages/map';
import { useMap } from '@hooks/pages/map';

function MapPage() {
  const { barList, mapInfo, myLocation, handleBoundsChanged, handleClickCurrentLocation } = useMap();

  if (!mapInfo || !myLocation) {
    return <Error />;
  } else {
    return (
      <CommonWrapper>
        <StyledMap center={{ ...mapInfo }} onBoundsChanged={handleBoundsChanged}>
          <Header />
          {barList?.map((bar) => {
            return <Marker {...bar} name={bar.barName} />;
          })}
          <Marker latitude={myLocation.coords.latitude} longitude={myLocation.coords.longitude} name="현위치" />
          <CurrentLocationButton onClick={handleClickCurrentLocation} />
          <BottomMenu />
        </StyledMap>
      </CommonWrapper>
    );
  }
}

export default dynamic(() => Promise.resolve(MapPage), { ssr: false });

const StyledMap = styled(Map)`
  height: 100%;
  width: 100%;
`;
