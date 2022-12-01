import React from 'react';
import styled, { css } from 'styled-components';

interface IButtonProps {
  radius?: number;
  width?: number | string;
  active?: boolean;
  size?: number;
  attrs?: React.HTMLAttributes<HTMLButtonElement>;
}

const CommonBtn = styled.button<IButtonProps>`
  margin: 10px 0;
  padding: 15px 25px;
  font-weight: 600;
  ${({ width, radius, size }) => {
    const btnWidth = width ? `${width}px` : '100%';
    return css`
      width: ${btnWidth};
      border-radius: ${radius || 25}px;
      font-size: ${size || 14}px;
    `;
  }}

  ${({ active }) => {
    if (active === false) {
      return css`
        border: 2px solid #715ae4;
        background: #fff;
        color: #715ae4;
      `;
    } else {
      return css`
        border: none;
        background: #715ae4;
        color: #fff;
      `;
    }
  }}
`;

export default CommonBtn;
