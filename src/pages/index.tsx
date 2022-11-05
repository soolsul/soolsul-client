import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <button
        style={{ display: "block" }}
        onClick={() => {
          router.push("map");
        }}
      >
        입장하기
      </button>
    </div>
  );
};

export default Home;
