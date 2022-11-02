import Property from "@lib/utils/Properties";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapPage() {
  try {
    const location: GeolocationPosition = Property.userInfo.location;
    return (
      <Map
        center={{
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }}
        style={{ width: "100%", height: "100vh" }}
      >
        <MapMarker
          position={{
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          }}
        >
          <div style={{ color: "#000" }}>현위치</div>
        </MapMarker>
      </Map>
    );
  } catch (err) {
    const router = useRouter();
    useEffect(() => {
      window.navigator.geolocation.getCurrentPosition((position) => {
        Property.setUserLocation(position);
        router.reload();
      });
    }, []);
    return <div>위치정보 가져오는중...</div>;
  }
}

export default dynamic(() => Promise.resolve(MapPage), { ssr: false });
