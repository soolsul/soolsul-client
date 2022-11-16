import React from 'react'
import styled from 'styled-components'
import { CommonButton, CommonWrapper } from '@components/common'
import { LoginInput } from '@components/pages/login'

function Login() {
  // const { loginInfo, handleChangeLoginInfo, handleLoginSubmit } = useLogin()
  // const { id, password } = loginInfo

  return (
    <Wrapper>
      <LoginContainer>
        <div className='logoBox'>로고 마크</div>
        <LoginInput
          id='email'
          title={'이메일'}
          placeHolderText={'예) numble@gmail.com'}
        />
        <LoginInput
          id='password'
          title={'비밀번호'}
          placeHolderText={'영문, 숫자 조합 8~20 자리'}
        />
        <CommonBtn>로그인</CommonBtn>
      </LoginContainer>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .logoBox {
    width: 75%;
    height: 5rem;
    background: #cec1f4;
    text-align: center;
    margin: 2rem;
  }
`

const CommonBtn = styled(CommonButton)`
  margin: 3rem 0;
`
