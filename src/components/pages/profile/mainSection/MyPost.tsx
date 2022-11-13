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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Wrapper>
  );
}

export default MyPost;

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0;
  gap: 3px;
  margin-top: 3px;
  bottom: 15px;
  max-height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Post = styled.li`
  aspect-ratio: 1/1;
  background: #d9d9d9;
  border-radius: 6px;
  border: none;
`;
