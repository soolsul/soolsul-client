import React from "react";
import styled, { css } from "styled-components";
import useBottomMenu from "../hooks/useBottomMenu";
import Category from "./Category";

function BottomMenu() {
  const { menuCoords, transition, handleStartTouch, isShowShadow } = useBottomMenu();

  return (
    <>
      <Wrapper top={menuCoords.top} transition={transition}>
        <Handle onMouseDown={handleStartTouch} onTouchStart={handleStartTouch} />
        <CategoryWrapper>
          <Category value="sample1" />
          <Category value="sample2" />
          <Category value="sample3" />
          <Category value="sample4" />
        </CategoryWrapper>
      </Wrapper>
      <Shadow isShow={isShowShadow} />
    </>
  );
}

export default BottomMenu;

const Handle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 20px;
  background-color: #ffdada;
  top: -10px;
  border-radius: 6px;
  cursor: pointer;
`;

const Wrapper = styled.div<{ top: number; transition: number }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  width: 100%;
  border-radius: 6px 6px 0 0;
  height: 70vh;
  background-color: #fff;
  z-index: 500;
  ${({ top, transition }) => {
    return css`
      top: 100%;
      transform: translate(-50%, ${top}px);
      transition: ${transition}ms;
    `;
  }}
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 1px 4px 10px 1px #c4c4c4af;
`;

const Shadow = styled.div<{ isShow: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: #8080804e;
  position: absolute;
  top: 0;
  z-index: 300;
  display: ${({ isShow }) => (isShow ? "" : "none")};
`;
