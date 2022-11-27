import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { BottomMenu } from '@components/common';
import { CommonWrapper } from '@components/common/commonStyle';
import { CurrentLocationButton, Error, Header } from '@components/pages/map';
import apis from '@apis/index';
import Property from '@lib/utils/Properties';

function MapPage() {
  const [barList, setBarList] = useState<any[] | null>(null);
  const [mapInfo, setMapInfo] = useState<{ lat: number; lng: number }>({ lat: 37.565314, lng: 126.992646 });
  const [myLocation, setMyLocation] = useState<GeolocationPosition | null>(Property.userInfo.location);

  useEffect(() => {
    window.navigator.geolocation.watchPosition((position) => {
      setMyLocation(position);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const result = await apis.bar.getBarList({ latitude: 37.565314, longitude: 126.992646 });
      setBarList(result.data.barList);
    })();
  }, []);

  if (!mapInfo || !myLocation) {
    return <Error />;
  } else {
    return (
      <CommonWrapper>
        <StyledMap
          center={{ ...mapInfo }}
          onBoundsChanged={(map: any) => {
            const center = map.getCenter();
            const [lat, lng] = [center.getLat(), center.getLng()];
            setMapInfo({ ...mapInfo, lat, lng });
          }}
        >
          <Header />
          {barList?.map((bar) => {
            return (
              <>
                <MapMarker position={{ lat: bar.latitude as number, lng: bar.longitude as number }} />
                <CustomOverlayMap position={{ lat: bar.latitude as number, lng: bar.longitude as number }}>
                  <BarName>{bar.barName}</BarName>
                </CustomOverlayMap>
              </>
            );
          })}
          <MapMarker
            position={{
              lat: myLocation.coords.latitude,
              lng: myLocation.coords.longitude,
            }}
          />
          <CustomOverlayMap
            position={{
              lat: myLocation.coords.latitude,
              lng: myLocation.coords.longitude,
            }}
          >
            <BarName>현위치</BarName>
          </CustomOverlayMap>
          <CurrentLocationButton
            onClick={() => {
              window.navigator.geolocation.getCurrentPosition((position) => {
                Property.setUserLocation(position);
                setMyLocation(position);
                setMapInfo({ ...mapInfo, lat: position.coords.latitude, lng: position.coords.longitude });
              });
            }}
          />
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

const BarName = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  padding: 3px 16px;
  color: #000;
  border: 1px solid #6c50cf;
  border-radius: 16px;
  background-color: #fff;
`;
