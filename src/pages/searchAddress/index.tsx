import React, { useState } from 'react';
import styled from 'styled-components';
import { CommonWrapper, Header } from '@components/common';
import CommonBtn from '@components/common/CommonBtn';
import { useRouter } from 'next/router';
import { Postcode } from '@components/pages/searchAddress/PostCode';
import { TextInput } from '@components/Input';
import searchIcon from '@assets/icons/search.svg';
import Image from 'next/image';

// ### **회원가입시 지역 인증 기능**
// - 가입할 때 특정 지역(개발자님의 거주지역)에서 6km 이내에 위치하고 있는지 확인하고 맞으면 회원가입을 할 수 있고, 아니면 회원가입을 못하게 하는거예요!

// ### 3) 회원가입정보 입력

// 만약 중도에 뒤로가기 버튼을 누르거나 이탈하려고 할 경우 ‘회원가입을 종료하시겠습니까?’라는 문구가 뜹니다. ‘예’를 누르면 메인페이지로 돌아갑니다.
// 정상적으로 입력해 회원가입이 완료되면 로그인 페이지로 이동하여 ‘회원가입이 완료되었습니다.’라는 문구가 뜹니다.

function SearchAddress() {
  const router = useRouter();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [address, setAddress] = useState('');

  const handleAddress = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const moveToSignup = () => {
    router.push('signup');
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
          <Image src={searchIcon} />
        </div>
        {isPopupOpen && (
          <div className="postCode">
            <Postcode address={address} setAddress={setAddress} setIsPopupOpen={setIsPopupOpen} />
          </div>
        )}

        <div className="buttonBox">
          <CommonBtn onClick={moveToSignup}>동네 인증하기</CommonBtn>
        </div>
      </LoginContainer>
    </Wrapper>
  );
}

export default SearchAddress;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
  height: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
  height: 100vh;

  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
  }

  .buttonBox {
    width: 100%;
    margin: 2rem 0;
  }

  .inputBox {
    margin: 1rem 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
  }
  Image {
    margin: 0 3px;
  }
`;

const SearchInput = styled(TextInput)`
  width: 90%;
  border-radius: 0px;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  padding: 6px 1px;
`;
