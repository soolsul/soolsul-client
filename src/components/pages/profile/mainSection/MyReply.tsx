import styled from "styled-components";

function MyReply() {
  return (
    <Wrapper>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
      <Reply>
        <Title>친하게 지내요!!! :)</Title>
        <Time>방금 전 작성</Time>
        <ReplyMenu />
      </Reply>
    </Wrapper>
  );
}

export default MyReply;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 8px;
  margin-top: 3px;
  bottom: 15px;
  max-height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Reply = styled.li`
  position: relative;
  background-color: #fff;
  padding: 16px;
  box-shadow: 1px 4px 10px 1px #c4c4c4af;
  p {
    color: #000;
  }
`;

const Title = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 16px;
`;

const Time = styled.p`
  margin: 0;
  font-size: 12px;
`;

const ReplyMenu = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  background-color: #ffdada;
  border: none;
`;
