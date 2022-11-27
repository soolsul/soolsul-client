import styled from 'styled-components';
import { ProfileImage } from '@components/common';

function Review() {
  return (
    <Wrapper>
      <WriterInfo>
        <StyledProfileImage />
        <WriterDescription>
          <p id="name">이름</p>
        </WriterDescription>
      </WriterInfo>
    </Wrapper>
  );
}

export default Review;

const Wrapper = styled.ul`
  padding: 10px 5px;
  li {
    display: flex;
    align-items: center;
    padding: 10px 16px;
  }
  p {
    padding: 0 10px;
    font-size: 16px;
  }
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const WriterDescription = styled.div`
  p {
    margin: 0;
  }
  #name {
    color: #000;
  }
  #location {
    color: #595959;
    font-size: 12px;
    line-height: 16px;
  }
`;

const StyledProfileImage = styled(ProfileImage)`
  max-width: 36px;
  max-height: 36px;
  margin-right: 10px;
`;
