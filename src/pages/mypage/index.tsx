import { BottomMenu, CommonWrapper } from "@components/pages/common";
import styled from "styled-components";

function MyPage() {
  return (
    <Wrapper>
      <Header>
        <h1>프로필</h1>
        <button />
      </Header>
      <Profile>
        <ImageWrapper />
        <UserInfo>
          <div className="nickname">
            <p>닉네임</p>
          </div>
          <div className="following">
            <p>팔로워 n명</p>
            <p>팔로잉 n명</p>
          </div>
          <button>프로필 편집</button>
        </UserInfo>
      </Profile>

      <BottomMenu />
    </Wrapper>
  );
}

export default MyPage;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  h1 {
    font-size: 20px;
    font-weight: 500;
    color: #000;
  }
  button {
    width: 24px;
    height: 24px;
    background-color: #ffdada;
    border: none;
  }
`;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;

const Profile = styled.div`
  display: flex;
  margin: 16px 16px 40px 16px;
`;

const ImageWrapper = styled.div`
  width: 25%;
  max-width: 150px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-right: 32px;
`;

const UserInfo = styled.section`
  width: 50%;
  p {
    margin: 0;
  }
  .nickname {
    color: #000;
    margin: 4px 0;
  }
  .following {
    display: flex;
    color: #595959;
    p + p {
      margin-left: 16px;
    }
    margin-bottom: 16px;
  }
  button {
    width: 100%;
    padding: 7px 0;
  }
`;
