import React from 'react';
import styled from 'styled-components';

import { BottomMenu, CommonWrapper } from '@components/common';
import { CurationItem } from '@components/pages/curation';
import { useRouter } from 'next/router';
import { useCuration } from '@hooks/pages/curation';
import Carousel from '@components/common/Carousel/Carousel';

function Curation() {
  const router = useRouter();
  const { curationData } = useCuration();
  console.log(curationData);

  const handleClick = () => {
    router.push('/curation/detail/info');
  };

  return (
    <Wrapper>
      <div className="contentsContainer">
        <h1>Soolsul 의 추천 맛집</h1>
        <Carousel children={<CurationItem onClick={handleClick} />} width={'425px'} />
      </div>
      <BottomMenu />
    </Wrapper>
  );
}

export default Curation;

const Wrapper = styled(CommonWrapper)`
  padding: 20px;
  background-color: #fff;

  h1 {
    margin: 30px 0;
  }

  .contentsContainer {
    padding: 10px;
    height: 100%;
    overflow: auto;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .contentsContainer::-webkit-scrollbar {
    display: none;
  }
`;
