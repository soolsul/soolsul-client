import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
