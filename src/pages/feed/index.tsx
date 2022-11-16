import { Box, CommonWrapper } from "@components/common";
import styled from "styled-components";

function Feed() {
  return (
    <Wrapper>
      <Header>
        <Box />
        <p>을지로</p>
      </Header>
    </Wrapper>
  );
}

export default Feed;

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
