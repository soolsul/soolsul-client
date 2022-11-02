import Property from "@lib/utils/Properties";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <button
        style={{ display: "block" }}
        onClick={() => {
          window.navigator.geolocation.getCurrentPosition((position) => {
            Property.setUserLocation(position);
          });
        }}
      >
        위치정보 저장하기(currentPosition)
      </button>

      <button
        style={{ display: "block" }}
        onClick={() => {
          window.navigator.geolocation.watchPosition((position) => {
            Property.setUserLocation(position);
          });
        }}
      >
        위치정보 저장하기 (watchPosition)
      </button>

      <button
        style={{ display: "block" }}
        onClick={() => {
          if (typeof window !== "undefined") {
            console.log("window.property ", window.property.userInfo.location);
            console.log("Property", Property.userInfo.location);
          }
        }}
      >
        위치정보 가져오기
      </button>
    </div>
  );
};

export default Home;
