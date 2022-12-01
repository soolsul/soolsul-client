import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonWrapper } from '@components/common';
import { LoginInput } from '@components/pages/login';
import useSignup from '@hooks/pages/signup/useSignup';
import CommonBtn from '@components/common/CommonBtn';
import { createBrowserHistory } from 'history';
import Modal from '@components/common/Modal';

function Signup() {
  const { data, hasChanged, invalidText, errorPart, handleSignSubmit, handleInputValue } = useSignup();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkAllDataFilled = () => {
    return Object.values(data).includes('');
  };

  const handleMoveBack = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const history = createBrowserHistory();

    const listenBackEvent = () => {
      setIsModalOpen(true);
    };

    const unlistenHistoryEvent = history.listen(({ action }) => {
      if (action === 'POP') {
        listenBackEvent();
      }
    });

    return unlistenHistoryEvent;
  }, [hasChanged]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <button className="backButtonIcon" onClick={handleMoveBack} />
        <p>회원가입</p>
      </HeaderWrapper>

      <LoginContainer onSubmit={handleSignSubmit}>
        <LoginInput
          id="email"
          title={'이메일'}
          placeHolderText={'예) numble@gmail.com'}
          onChange={handleInputValue}
          value={data.email}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <LoginInput
          id="password"
          title={'비밀번호'}
          placeHolderText={'영문, 숫자 조합 8~20 자리'}
          onChange={handleInputValue}
          value={data.password}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <LoginInput
          id="confirmPassword"
          title={'비밀번호 확인'}
          placeHolderText={'비밀번호 재입력'}
          onChange={handleInputValue}
          value={data.confirmPassword}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <LoginInput
          id="phone"
          title={'전화번호'}
          placeHolderText={'010-0000-0000'}
          onChange={handleInputValue}
          value={data.phone}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <LoginInput
          id="name"
          title={'이름'}
          placeHolderText={'김넘블'}
          onChange={handleInputValue}
          value={data.name}
          invalidText={invalidText}
          errorPart={errorPart}
        />

        <LoginInput
          id="nickname"
          title={'닉네임'}
          placeHolderText={'김넘블 챌린지'}
          onChange={handleInputValue}
          value={data.nickname}
          invalidText={invalidText}
          errorPart={errorPart}
        />
        <div className="buttonBox">
          <CommonBtn type="submit" active={checkAllDataFilled() ? false : true} onClick={handleSignSubmit}>
            회원가입
          </CommonBtn>
        </div>
      </LoginContainer>
      {isModalOpen ? (
        <Modal
          content={`페이지를 벗어나면 입력한 내용이 모두 사라집니다. 이동하시겠습니까?`}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </Wrapper>
  );
}

export default Signup;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  padding: 13px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    left: 10px;
    padding: 10px;
    background-color: pink;
    border: none;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
  height: 100vh;

  .buttonBox {
    width: 100%;
    margin: 2rem 0;
  }
`;
