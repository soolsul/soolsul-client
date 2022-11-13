import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import MyPost from "./MyPost";

type CategoryType = "post" | "reply" | "favorite";

function MainSection() {
  const [activeButton, setActiveButton] = useState<CategoryType>("post");

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setActiveButton(target.value as CategoryType);
  };

  return (
    <Main>
      <Header handleClickButton={handleClickButton} activeButton={activeButton} />
      {activeButton === "post" && <MyPost />}
    </Main>
  );
}

export default MainSection;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(85% - 140px);
`;
