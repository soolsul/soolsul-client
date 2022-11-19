import React, { useState } from 'react';
import styled from 'styled-components';
import { CommonButton, CommonWrapper, Header } from '@components/common';
import { LoginInput } from '@components/pages/login';
import { useRouter } from 'next/router';
import { signup } from '@apis/users';

function Signup() {
  const router = useRouter();

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    name: '',
    nickname: '',
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputID = e.target.id;

    setData({
      ...data,
      [inputID]: inputValue,
    });
  };

  const submitSignup = async () => {
    if (data.password !== data.confirmPassword) {
      alert('패스워드가 일치하지 않습니다.');
    } else if (data.email && data.password && data.confirmPassword && data.phoneNumber && data.name && data.nickname) {
      await signup(data)
        .then((res) => {
          console.log(res);
          router.push('map');
        })
        .catch((err) => console.log('회원가입 에러 : ', err.message));
    } else {
      alert('가입 정보를 다  채워주세요');
    }
  };

  return (
    <Wrapper>
      <Header title={'회원가입'} />
      <LoginContainer>
        <LoginInput
          id="email"
          title={'이메일'}
          placeHolderText={'예) numble@gmail.com'}
          onChange={handleInputValue}
          value={data.email}
        />
        <LoginInput
          id="password"
          title={'비밀번호'}
          placeHolderText={'영문, 숫자 조합 8~20 자리'}
          onChange={handleInputValue}
          value={data.password}
        />
        <LoginInput
          id="confirmPassword"
          title={'비밀번호 확인'}
          placeHolderText={'비밀번호 재입력'}
          onChange={handleInputValue}
          value={data.confirmPassword}
        />
        <LoginInput
          id="phoneNumber"
          title={'전화번호'}
          placeHolderText={'010-0000-0000'}
          onChange={handleInputValue}
          value={data.phoneNumber}
        />
        <LoginInput id="name" title={'이름'} placeHolderText={'김넘블'} onChange={handleInputValue} value={data.name} />

        <LoginInput
          id="nickname"
          title={'닉네임'}
          placeHolderText={'김넘블 챌린지'}
          onChange={handleInputValue}
          value={data.nickname}
        />
        <CommonBtn onClick={submitSignup}>로그인</CommonBtn>
      </LoginContainer>
    </Wrapper>
  );
}

export default Signup;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 20px 16px;
  // justify-content: start;
  // align-items: center;
`;

const CommonBtn = styled(CommonButton)`
  position: absolute;
  bottom: 2rem;
  margin: 1rem auto;
  width: 90%;
`;
