import { CategoryType } from "@lib/types";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import styled, { css } from "styled-components";
import useBottomMenu from "../../hooks/pages/map/useBottomMenu";
import Category from "../pages/map/Category";

function BottomMenu() {
  const menuRef = useRef(null);
  const { menuCoords, transition, handleStartTouch, isShowShadow } = useBottomMenu(menuRef.current);

  return (
    <>
      <Wrapper top={menuCoords.top} transition={transition} ref={menuRef}>
        <Handle onMouseDown={handleStartTouch} onTouchStart={handleStartTouch} />
        <CategoryWrapper>
          <Category value={CategoryType.CategoryEnum.MAP} />
          <Category value={CategoryType.CategoryEnum.CURATION} />
          <Category value={CategoryType.CategoryEnum.FEED} />
          <Category value={CategoryType.CategoryEnum.MY_PAGE} />
        </CategoryWrapper>
      </Wrapper>
      <Shadow isShow={isShowShadow} />
    </>
  );
}

export default dynamic(() => Promise.resolve(BottomMenu), { ssr: false });

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
  width: 100%;
  height: 70vh;
  border-radius: 6px 6px 0 0;
  background-color: #fff;
  z-index: 500;
  ${({ top, transition }) => {
    return css`
      top: 100%;
      left: 50%;
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
  background-color: #56565690;
  position: absolute;
  top: 0;
  z-index: 300;
  display: ${({ isShow }) => (isShow ? "" : "none")};
`;
