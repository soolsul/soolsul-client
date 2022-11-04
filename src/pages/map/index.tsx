import Property from "@lib/utils/Properties";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { AddFeedButton, BottomMenu, Error, SearchBar } from "./components";

function MapPage() {
  try {
    const location: GeolocationPosition = useMemo(() => Property.userInfo.location, []);
    return (
      <Wrapper>
        <StyledMap
          center={{
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          }}
        >
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
  } catch (error) {
    return <Error error={error} />;
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
