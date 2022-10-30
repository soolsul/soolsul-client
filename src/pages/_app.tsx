import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import Property from "@lib/utils/Properties";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async () => {
      console.log(await Property.userInfo.currentPosition());
    })();
  }, [Property.userInfo.currentPosition()]);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
