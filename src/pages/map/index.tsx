import Property from "@lib/utils/Properties";
import dynamic from "next/dynamic";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { Error, SearchBar } from "./components";

function MapPage() {
  try {
    const location: GeolocationPosition = Property.userInfo.location;
    return (
      <StyledMap
        center={{
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }}
      >
        <SearchBar placeholder="장소를 검색해 보세요" value="" />
        <MapMarker
          position={{
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          }}
        >
          <div style={{ color: "#000" }}>현위치</div>
        </MapMarker>
      </StyledMap>
    );
  } catch (error) {
    return <Error error={error} />;
  }
}

export default dynamic(() => Promise.resolve(MapPage), { ssr: false });

const StyledMap = styled(Map)`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;
