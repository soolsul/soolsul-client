import { Box } from "@components/common";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <h1>프로필</h1>
      <Box />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 70px;
  h1 {
    font-size: 20px;
    font-weight: 500;
    color: #000;
  }
`;
