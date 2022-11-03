import React from "react";
import styled, { css } from "styled-components";
import useBottomMenu from "../hooks/useBottomMenu";

function BottomMenu() {
  const { menuCoords, transition, handleStartTouch } = useBottomMenu();

  return (
    <Wrapper top={menuCoords.top} transition={transition}>
      <Handle onMouseDown={handleStartTouch} onTouchStart={handleStartTouch} />
    </Wrapper>
  );
}

export default BottomMenu;

const Handle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 20px;
  background-color: #000;
  top: -10px;
  border-radius: 6px;
  cursor: pointer;
`;

const Wrapper = styled.div<{ top: number; transition: number }>`
  position: absolute;
  left: 50%;
  width: 100%;
  border-radius: 6px 6px 0 0;
  height: 50vh;
  background-color: #fff;
  z-index: 2;
  ${({ top, transition }) => {
    return css`
      top: 100%;
      transform: translate(-50%, ${top}px);
      transition: ${transition}ms;
    `;
  }}
`;
