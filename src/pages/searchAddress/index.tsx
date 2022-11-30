import React, { useState } from 'react';
import styled from 'styled-components';
import { CommonWrapper, Header } from '@components/common';
import CommonBtn from '@components/common/CommonBtn';
import { useRouter } from 'next/router';
import { Postcode } from '@components/pages/searchAddress/PostCode';
import { TextInput } from '@components/Input';
import searchIcon from '@assets/icons/search.svg';
import checkIcon from '@assets/icons/check.svg';
import Image from 'next/image';
// import useGetLocation from '@hooks/pages/signup/useGetLocation';

function SearchAddress() {
  const router = useRouter();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');

  const handleAddress = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const moveToSignup = async () => {
    if (!address) alert('동네를 인증해주세요');
    else router.push('signup');
  };

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
          <CommonBtn active={address ? true : false} onClick={moveToSignup}>
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
