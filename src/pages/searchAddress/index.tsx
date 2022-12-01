import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonWrapper, Header } from '@components/common';
import CommonBtn from '@components/common/CommonBtn';
import { useRouter } from 'next/router';
import { Postcode } from '@components/pages/searchAddress/PostCode';
import { TextInput } from '@components/Input';
import searchIcon from '@assets/icons/search.svg';
import checkIcon from '@assets/icons/check.svg';
import Image from 'next/image';

function SearchAddress() {
  const router = useRouter();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');
  const [myLocation, setMyLocation] = useState({
    coords: {
      latitude: 37.565314,
      longitude: 126.992646,
    },
  });
  const [coords, setCoords] = useState({
    latitude: 37.565314,
    longitude: 126.992646,
  });

  console.log('내위치', myLocation);
  console.log('검색 위치', coords);

  const getCoords = () => {
    kakao.maps.load(() => {
      const services = kakao.maps.services;
      if (!services) {
        console.log('kakao.maps.services 를 찾을 수 없음 :', kakao.maps);
        return;
      } else {
        const geocoder = new services.Geocoder();
        console.log(geocoder);

        const callback = function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            console.log('좌표 결과 데이터', result[0].x, result[0].y);
            setCoords({ latitude: result[0].y, longitude: result[0].x });
          }
        };
        geocoder.addressSearch(address, callback);
      }
    });
  };

  const getMyLocation = () => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setMyLocation(position);
    });
  };

  function getPlaceLength() {
    return new Promise((resolve, reject) => {
      if (!address) alert('동네를 인증해주세요');
      try {
        kakao.maps.load(() => {
          const poly = new kakao.maps.Polyline({
            path: [
              new kakao.maps.LatLng(coords.latitude, coords.longitude),
              new kakao.maps.LatLng(myLocation.coords.latitude, myLocation.coords.longitude),
            ],
          });
          console.log(new kakao.maps.LatLng(coords.latitude, coords.longitude));
          console.log(new kakao.maps.LatLng(myLocation.coords.latitude, myLocation.coords.longitude));
          console.log('거리계산', poly.getLength());

          const polyLength = poly.getLength();
          console.log(polyLength < 6000);
          resolve(polyLength);
        });
      } catch (err) {
        console.log('거리를 받아오지 못했습니다.', err);
        reject();
      }
    });
  }

  const checkNeighborhood = async () => {
    const length = (await getPlaceLength()) as number;

    if (length > 6000) {
      alert('검색한 동네가 현재 사용자의 위치와 6km 이상 떨어져 있습니다. 더 가까운 동네를 검색해주세요');
    } else {
      alert('동네 인증이 완료되었습니다.');
      router.push('signup');
    }
  };

  const handleAddress = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    getMyLocation();
    if (!address) return;
    getCoords();
  }, [address]);

  return (
    <Wrapper>
      <Header title={'회원가입'} />
      <LoginContainer>
        <h2>
          내가 사는 곳의 <br /> 동네를 입력해주세요
        </h2>
        <div className="inputBox" onClick={handleAddress}>
          <SearchInput placeholder="내 동네를 검색해 보세요" />
          <div className="searchIcon">
            <Image src={searchIcon} />
          </div>
        </div>

        {address && (
          <div className="address">
            <div>
              <p>{jibunAddress}</p>
              <p className="roadAddress">( {address} )</p>
            </div>
            <div className="checkIcon">
              <Image src={checkIcon} />
            </div>
          </div>
        )}
        {isPopupOpen && (
          <div className="postCode">
            <Postcode
              address={address}
              setAddress={setAddress}
              setJibunAddress={setJibunAddress}
              setIsPopupOpen={setIsPopupOpen}
            />
          </div>
        )}
        <div className="buttonBox">
          <CommonBtn active={address ? true : false} onClick={checkNeighborhood}>
            동네 인증하기
          </CommonBtn>
        </div>
      </LoginContainer>
    </Wrapper>
  );
}

export default SearchAddress;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
  position: relative;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100vh;
  margin: 1rem 0;

  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
  }

  .inputBox {
    margin: 1rem auto;
    width: 94%;
    display: flex;
    justify-content: center;
  }

  .searchIcon {
    margin: 0;
    border-bottom: 1px solid #bfbfbf;
    padding: 7px 0;
  }

  .address {
    border-bottom: 1px solid #bfbfbf;
    margin: 1rem auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 7px 0;
  }

  .roadAddress {
    font-size: 13;
    color: #777;
  }
  .checkIcon {
    margin: 0;
    padding: 7px 0;
  }

  p {
    font-size: 16px;
    line-height: 28px;
  }

  .postCode {
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    height: 100vh;
    z-index: 10;
    top: 8px;
    left: -5px;
    width: 102%;
  }

  .buttonBox {
    width: 92%;
    position: absolute;
    bottom: 2rem;
  }
`;

const SearchInput = styled(TextInput)`
  width: 100%;
  border-radius: 0px;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  padding: 13px 1px;
`;
