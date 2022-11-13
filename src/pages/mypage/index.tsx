import { BottomMenu, CommonWrapper } from "@components/common";
import { ProfileHeader, ProflieUserInfo } from "@components/pages/profile";
import { ProfileMain } from "@components/pages/profile/mainSection";
import styled from "styled-components";

function MyPage() {
  return (
    <Wrapper>
      <ProfileHeader />
      <ProflieUserInfo />
      <ProfileMain />
      <BottomMenu />
    </Wrapper>
  );
}

export default MyPage;

const Wrapper = styled(CommonWrapper)`
  background-color: #fff;
`;
