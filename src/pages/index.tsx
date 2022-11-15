import { CommonWrapper } from '@components/common'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.removeItem('GeoLocation')
  }, [])
  return (
    <Wrapper>
      <HomeContainer>
        <div className='logo'>LOGO</div>
        <button
          style={{ display: 'block' }}
          onClick={() => {
            router.push('map')
          }}
        >
          게스트로 들어가기
        </button>
        <button
          style={{ display: 'block' }}
          onClick={() => {
            router.push('login')
          }}
        >
          로그인
        </button>
      </HomeContainer>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin: 3rem;
    min-width: 13rem;
    min-height: 13rem;
    background: #e6e6e6;
    text-align: center;
  }

  button {
    width: 75%;
    padding: 15px 25px;
    margin: 10px;
    border-radius: 25px;
    border: none;
    background: #5f3dc4;
    color: #fff;
    font-weight: 700;
  }
`
