import React from 'react';
import styled from 'styled-components';

// import { BottomMenu } from '@components/common';
import { BottomMenu, CommonWrapper } from '@components/common';
import { CurationItem } from '@components/pages/curation';
import { useRouter } from 'next/router';

function Curation() {
  const router = useRouter();

  // const handleClick =()=> {
  //   router.push('/curation/detail')
  // }

  return (
    <Wrapper>
      <div className="contentsContainer">
        <ul>
          <h1>큐레이션 페이지</h1>
          <CurationItem />
          <CurationItem />
        </ul>
      </div>
      <BottomMenu />
    </Wrapper>
  );
}

export default Curation;

const Wrapper = styled(CommonWrapper)`
  padding: 20px;

  h1 {
    margin: 30px 0;
  }

  .contentsContainer {
    padding: 15px;
    height: 100%;
    overflow: auto;
  }
`;
