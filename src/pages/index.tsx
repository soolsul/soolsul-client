import Property from "@lib/utils/Properties";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <button
        onClick={async () => {
          console.log("클릭 ", await Property.userInfo.currentPosition());
        }}
      >
        위치정보 가져오기
      </button>
    </div>
  );
};

export default Home;
