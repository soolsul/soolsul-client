import { CommonWrapper } from '@components/common';
import CommonBtn from '@components/common/CommonBtn';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Splash from './splash';
import wineImg from '@assets/images/wine.png';

const Home: NextPage = () => {
  const router = useRouter();
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    // 앱 시작하자마자 sessionstorage 확인해서 isFirstTime 존재하는지 체크
    if (sessionStorage.getItem('isFirstTime') === null) {
      sessionStorage.setItem('isFirstTime', 'false');
      console.log('퍼스트 타임');
      setTimeout(() => {
        setIsFirstTime(false);
      }, 1500);
    } else {
      setIsFirstTime(false);
      console.log('퍼스트 타임 아님');
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem('GeoLocation');
  }, []);

  return (
    <Wrapper>
      {isFirstTime ? (
        <Splash />
      ) : (
        <>
          <HomeContainer>
            <div className="logo">
              <Image src={wineImg} width={'200px'} height={'200px'} />
            </div>
            <div className="buttonBox">
              <CommonBtn
                active={false}
                onClick={() => {
                  router.push('map');
                }}
              >
                게스트로 들어가기
              </CommonBtn>
              <CommonBtn
                onClick={() => {
                  router.push('login');
                }}
              >
                로그인
              </CommonBtn>
            </div>
          </HomeContainer>
        </>
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    margin: 3rem;
    width: 13rem;
    height: 13rem;
    // background: #e6e6e6;
    text-align: center;
  }

  .buttonBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    padding: 20px;
  }
`;
