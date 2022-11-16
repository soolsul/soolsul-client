import { Box, CommonWrapper } from "@components/common";
import styled from "styled-components";

function FeedPage() {
  return (
    <Wrapper>
      <Header>
        <Box />
        <p>을지로</p>
      </Header>
      <FeedWrapper>
        <Feed>
          <Image />
        </Feed>
        <Feed>
          <Image />
        </Feed>
        <Feed>
          <Image />
        </Feed>
        <Feed>
          <Image />
        </Feed>
        <Feed>
          <Image />
        </Feed>
        <Feed>
          <Image />
        </Feed>
      </FeedWrapper>
    </Wrapper>
  );
}

export default FeedPage;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid #d9d9d9;
  color: #000;
  p {
    margin: 0;
    margin-left: 8px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const FeedWrapper = styled.ul`
  display: grid;
  width: 100%;
  gap: 8px;
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;
  max-height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Feed = styled.li`
  width: 100%;
  height: 700px;
  background-color: #fff;
  padding: 16px 18px 16px 24px;
  img {
    width: 100%;
  }
`;

const Image = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-image: url("http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 12px;
`;
