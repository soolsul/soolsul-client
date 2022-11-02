import Spinner from "@components/Loader/Spinner";
import Property from "@lib/utils/Properties";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { SearchBar } from "./components";

function MapPage() {
  try {
    const location: GeolocationPosition = Property.userInfo.location;
    return (
      <Wrapper>
        <Map
          center={{
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          }}
          style={{
            width: "100%",
            height: "100vh",
            maxWidth: "480px",
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
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
        </Map>
      </Wrapper>
    );
  } catch (err) {
    const router = useRouter();
    useEffect(() => {
      window.navigator.geolocation.getCurrentPosition((position) => {
        Property.setUserLocation(position);
        router.reload();
      });
    }, []);
    return (
      <Wrapper>
        <Spinner />
        <p>위치정보 가져오는 중...</p>
      </Wrapper>
    );
  }
}

export default dynamic(() => Promise.resolve(MapPage), { ssr: false });

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 480px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;
