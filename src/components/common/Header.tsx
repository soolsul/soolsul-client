import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import backIcon from '@assets/icons/left.svg';

type headerType = {
  title: string;
};

function Header({ title }: headerType) {
  const router = useRouter();

  const handleClick = () => {
    // 이전 페이지로 이동
    router.back();
  };

  return (
    <Wrapper>
      <button className="backButtonIcon" onClick={handleClick}>
        <Image src={backIcon} />
      </button>
      <p>{title}</p>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
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
    background-color: #fff;
    border: none;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
`;
