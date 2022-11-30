import { PostType } from '@lib/types';
import { uuid } from '@lib/utils';
import { filterAtom } from '@recoil/map';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import PostItem from './PostItem';

function FeedMenu({ posts }: { posts: PostType.PostType[] }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const foodList = ['전체', '한식', '중식', '양식', '일식', '기타'];
  const [filterState, setFilterState] = useRecoilState(filterAtom);
  const feedRef = useRef<HTMLDivElement>(null);

  const closeClickOutSide = (e: MouseEvent) => {
    if (!feedRef.current) return;
    if (isOpen && !feedRef.current.contains(e.target as HTMLElement)) {
      closeFilter();
    }
  };

  const closeFilter = () => {
    setFilterState({ drinkTag: '', moodTag: '', isOpen: false });
    setIsOpen(false);
    router.push('/map');
  };

  useEffect(() => {
    document.addEventListener('click', closeClickOutSide);
    return () => document.removeEventListener('click', closeClickOutSide);
  }, [filterState.isOpen]);

  return (
    <Wrapper isOpen={isOpen} ref={feedRef}>
      <Title>
        <FoodListWrapper>
          {foodList.map((food) => {
            return (
              <li key={uuid()}>
                <FoodButton value={food}>{food}</FoodButton>
              </li>
            );
          })}
        </FoodListWrapper>
      </Title>
      <PostList>
        {posts.map((post: PostType.PostType) => {
          return <PostItem post={post} />;
        })}
      </PostList>
    </Wrapper>
  );
}

export default FeedMenu;

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
  height: 60px;
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

const FoodListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 7px;
`;

const FoodButton = styled.button`
  width: 100%;
  padding: 8px 12px;
  border-radius: 26px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  color: #000;
  &:hover {
    border: 1px solid #715ae4;
    color: #715ae4;
  }
  cursor: pointer;
`;

const PostList = styled.ul`
  max-height: calc(80vh - 60px);
  overflow: auto;
  padding: 16px;
  padding-top: 0;
`;
