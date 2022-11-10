import styled from "styled-components";

function MyPost() {
  return (
    <Wrapper>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Wrapper>
  );
}

export default MyPost;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  margin-top: 3px;
  overflow: auto;
  bottom: 15px;
  height: calc(100vh - ${71 + 98 + 56 + +56 + 50 + 125}px);
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Post = styled.button`
  aspect-ratio: 1/1;
  background: #d9d9d9;
  border-radius: 6px;
  border: none;
`;
