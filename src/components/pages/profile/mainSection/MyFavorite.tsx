import styled from "styled-components";

function MyFavorite() {
  return (
    <Wrapper>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
      <Post>
        <Image />
        <Description>
          <FavoriteMenu />
          <p>동네 위치</p>
        </Description>
      </Post>
    </Wrapper>
  );
}

export default MyFavorite;

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
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Image = styled.div`
  aspect-ratio: 1/1;
  background: #d9d9d9;
  border-radius: 6px;
  border: none;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  color: #000;
  p {
    font-size: 16px;
    margin: 0;
    margin-left: 8px;
  }
`;

const FavoriteMenu = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ffdada;
  border: none;
`;
