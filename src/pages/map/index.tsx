import { AddFeedButton, BottomMenu, Error, SearchBar } from "@components/pages/map";
import Property from "@lib/utils/Properties";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

function MapPage() {
  const [location, setLocation] = useState<GeolocationPosition | null>(Property.userInfo.location);

  useEffect(() => {
    window.navigator.geolocation.watchPosition((position) => {
      setLocation(position);
    });
  }, []);

  if (!location) {
    return <Error />;
  } else {
    return (
      <Wrapper>
        <StyledMap
          center={{
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          }}
        >
          <span style={{ position: "fixed", top: "0", zIndex: "999", color: "#000" }}>
            {location.coords.latitude} {location.coords.longitude}
          </span>
          <SearchBar />
          <MapMarker
            position={{
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            }}
          >
            <div style={{ color: "#000" }}>현위치</div>
          </MapMarker>
          <AddFeedButton />
          <BottomMenu />
        </StyledMap>
      </Wrapper>
    );
  }
}

export default dynamic(() => Promise.resolve(MapPage), { ssr: false });

const Wrapper = styled.div`
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

const StyledMap = styled(Map)`
  height: 100%;
  width: 100%;
`;
