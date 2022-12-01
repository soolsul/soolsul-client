import axios from 'axios';

export default function useGetLocation(address: string) {
  // 주소 검색시에 경도, 위도 변환하는 코드 (naver_geocode_api 사용)
  console.log(address);
  const header = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

  address &&
    axios
      .get(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
        headers: { header },
      })
      .then((res) => {
        const location = res.data.documents[0];
        console.log(location);
      });

  return { location };
}
