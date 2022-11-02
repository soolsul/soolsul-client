import Property from "@lib/utils/Properties";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <button
        style={{ display: "block" }}
        onClick={() => {
          if (typeof window !== "undefined") {
            if (Property.userInfo.location) {
              router.push("map");
            } else {
              window.navigator.geolocation.getCurrentPosition((position) => {
                Property.setUserLocation(position);
                router.push("map");
              });
            }
          }
        }}
      >
        위치정보 저장하기(currentPosition)
      </button>

      <button
        style={{ display: "block" }}
        onClick={() => {
          if (typeof window !== "undefined") {
            if (Property.userInfo.location) {
              router.push("map");
            } else {
              window.navigator.geolocation.getCurrentPosition((position) => {
                Property.setUserLocation(position);
                router.push("map");
              });
            }
          }
        }}
      >
        위치정보 저장하기 (watchPosition)
      </button>
    </div>
  );
};

export default Home;
