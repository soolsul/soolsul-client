import { filterAtom } from '@recoil/map';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

function FilterMenu() {
  const [filterState, setFilterState] = useRecoilState(filterAtom);
  const filterRef = useRef<HTMLDivElement>(null);

  const closeFilter = (e: MouseEvent) => {
    if (!filterRef.current) return;
    if (filterState.isOpen && !filterRef.current.contains(e.target as HTMLElement)) {
      setFilterState({ ...filterState, isOpen: false });
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeFilter);
    return () => document.removeEventListener('click', closeFilter);
  }, [filterState.isOpen]);
  return <Wrapper {...filterState} ref={filterRef}></Wrapper>;
}

export default FilterMenu;

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80vh;
  background-color: #fff;
  z-index: 500;
  transition: 0.5s;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px 16px 0px 0px;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        bottom: 0;
      `;
    } else {
      return css`
        bottom: -100%;
      `;
    }
  }}
`;
