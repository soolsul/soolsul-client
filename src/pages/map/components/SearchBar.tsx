import { TextInput } from "@components/Input";
import styled, { css } from "styled-components";

interface ISearchBarProps {
  placeholder: string;
  value: string;
}
function SearchBar(props: ISearchBarProps) {
  return (
    <Wrapper>
      <LogoBox position="left" />
      <SearchInput id="search-place" {...props} />
      <LogoBox position="right" />
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.div`
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 80%;
  max-width: 360px;
`;

const SearchInput = styled(TextInput)`
  width: 100%;
`;

const LogoBox = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: #ffdada;
  margin: 0 8px;
  ${({ position }) => {
    switch (position) {
      case "left":
        return css`
          left: 8px;
        `;
      case "right":
        return css`
          right: 8px;
        `;
    }
  }}
`;
