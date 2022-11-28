import { filterAtom } from '@recoil/map';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import closeImg from '../../../assets/icons/close.svg';
import FilterSection from './FilterSection';

function FilterMenu() {
  const [filterState, setFilterState] = useRecoilState(filterAtom);
  const filterRef = useRef<HTMLDivElement>(null);

  const closeClickOutSide = (e: MouseEvent) => {
    if (!filterRef.current) return;
    if (filterState.isOpen && !filterRef.current.contains(e.target as HTMLElement)) {
      closeFilter();
    }
  };

  const closeFilter = () => {
    setFilterState({ ...filterState, isOpen: false });
  };

  useEffect(() => {
    document.addEventListener('click', closeClickOutSide);
    return () => document.removeEventListener('click', closeClickOutSide);
  }, [filterState.isOpen]);
  return (
    <Wrapper {...filterState} ref={filterRef}>
      <Title>
        <LogoBox onClick={closeFilter}>
          <Image src={closeImg} className="close-icon" />
        </LogoBox>
        <h1>필터</h1>
      </Title>
      <SectionWrapper>
        <FilterSection filterType="mood">
          <MoodFilter>시끌벅적한</MoodFilter>
          <MoodFilter>고급스러운</MoodFilter>
          <MoodFilter>격식있는</MoodFilter>
          <MoodFilter>이색적인</MoodFilter>
          <MoodFilter>깔끔한</MoodFilter>
          <MoodFilter>조용한</MoodFilter>
          <MoodFilter>뷰가 예쁜</MoodFilter>
        </FilterSection>
        <FilterSection filterType="drink">
          <DrinkFilter />
          <DrinkFilter />
          <DrinkFilter />
          <DrinkFilter />
          <DrinkFilter />
        </FilterSection>
      </SectionWrapper>
      <ButtonWrapper>
        <Button className="cancel" onClick={closeFilter}>
          취소
        </Button>
        <Button className="submit">적용</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default FilterMenu;

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fafafa;
  z-index: 500;
  transition: 0.5s;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px 16px 0px 0px;
  max-height: 80vh;
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

const Title = styled.header`
  position: relative;
  padding: 12px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  color: #000;
  text-align: center;
  background: #fff;
  border-radius: 16px 16px 0px 0px;
  h1 {
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }

  .close-icon {
    position: absolute;
    top: 50%;
    left: 16px;
    z-index: 400;
    width: 18px;
    height: 18px;
  }
`;

const LogoBox = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  left: 16px;
  border: 1px solid;
  cursor: pointer;
`;

const SectionWrapper = styled.div`
  padding: 16px;
`;

const DrinkFilter = styled.li`
  aspect-ratio: 1/1;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
`;

const MoodFilter = styled.li`
  padding: 8px 16px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  border-radius: 24px;
  color: #000;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px 0;
  border-radius: 26px;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  &.cancel {
    background: #f0f0f0;
    color: #000;
  }
  &.submit {
    background: #715ae4;
    color: #f0f0f0;
  }
`;
