import React from 'react';
import styled from 'styled-components';
import { CommonWrapper } from '@components/common';
import { LoginInput } from '@components/pages/login';
import { useLogin } from '@hooks/pages/login';
import useValidation from '@hooks/common/useValidation';
import CommonBtn from '@components/common/CommonBtn';
import { useRouter } from 'next/router';
import wineImg from '@assets/images/wine_horizontal.png';
import Image from 'next/image';

function Login() {
  const router = useRouter();
  const { loginInfo, handleChangeLoginInfo, handleLoginSubmit } = useLogin();
  const { checkEmailValidation } = useValidation();
  const { email, password } = loginInfo;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (Object.values(loginInfo).includes('')) {
      alert('로그인에 필요한 모든 정보를 입력해주세요');
    } else if (checkEmailValidation(email) === false) {
      alert('이메일 형식이 잘못되었습니다');
    } else {
      handleLoginSubmit();
    }
  };

  const moveToSignup = () => {
    router.push('searchAddress');
  };

  return (
    <Wrapper>
      <LoginContainer onSubmit={handleSubmit}>
        <div className="logoBox">
          <Image src={wineImg} height={'100px'} width={'260px'} />
        </div>
        <LoginInput
          id="email"
          title={'이메일'}
          placeHolderText={'예) numble@gmail.com'}
          onChange={handleChangeLoginInfo}
          value={email}
          invalidText={''}
          errorPart={'email'}
        />
        <LoginInput
          id="password"
          title={'비밀번호'}
          placeHolderText={'영문, 숫자 조합 8~20 자리'}
          onChange={handleChangeLoginInfo}
          value={password}
          invalidText={''}
          errorPart={'password'}
        />
        <div className="buttonBox"></div>
        <CommonBtn type="submit" onSubmit={handleSubmit}>
          로그인
        </CommonBtn>
      </LoginContainer>
      <CommonBtn onClick={moveToSignup} active={false}>
        회원가입
      </CommonBtn>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const LoginContainer = styled.form`
  .logoBox {
    text-align: center;
    margin: 2.5rem auto;
    border-radius: 20px;
  }

  Image {
    border-radius: 20px;
  }

  .buttonBox {
    margin: 3rem auto;
    width: 100%;
  }
`;
