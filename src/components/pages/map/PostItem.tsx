import { PostType } from '@lib/types';
import styled from 'styled-components';

function PostItem({ post }: { post: PostType.PostType }) {
  return (
    <Wrapper>
      <PostTitle>
        <h2>{post.store.storeName}</h2>
      </PostTitle>
      <PostBody>
        <p>{post.store.description}</p>
        <ImageWrapper>
          {post.imageUrls.length === 0 ? (
            <>
              <PostImage imageUrl="https://fastly.4sqi.net/img/general/600x600/8372463_U4wVZXx6tWL6imrW2sDwglyjgu7NQiWuvS04gWd13BE.jpg" />
              <PostImage imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhF8FQXUT7URFFwf3f-m5auiuo2aI2GYB1AA&usqp=CAU" />
              <PostImage imageUrl="https://mblogthumb-phinf.pstatic.net/MjAxOTA2MjVfMzMg/MDAxNTYxNDQ2Nzg4MTUw.J9RsOmXQonsT7eVuKSbCw8dbwJ_HVNTFK4qh88TroDwg.MH2mr0QmpEsozD4kkANhkULL_Oiu1I66mXClaqScXDgg.JPEG.cosney/SE-8384796e-a3e9-4105-a5d4-a4657264ef48.jpg?type=w800" />
              <PostImage imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxivypgzjIrY-8vIicYzFKosBFI-dw6_oyg&usqp=CAU" />
              <PostImage imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zPmrztxmOzc89kxElUqs21fIMG4Fnj1LLg&usqp=CAU" />
            </>
          ) : (
            post.imageUrls.map((imageUrl) => <PostImage imageUrl={imageUrl} />)
          )}
        </ImageWrapper>
      </PostBody>
    </Wrapper>
  );
}

export default PostItem;

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 0.25px solid #000000;
  margin-top: 28px;
`;

const PostTitle = styled.div`
  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000;
  }
`;

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  p {
    margin: 0;
    color: #000;
    font-weight: 200;
    font-size: 16px;
    line-height: 24px;
  }
`;

const ImageWrapper = styled.ul`
  display: flex;
  overflow: auto;
  gap: 11px;
`;

const PostImage = styled.li<{ imageUrl?: string }>`
  height: 30vw;
  max-height: calc(480px / 3);
  aspect-ratio: 1/1;
  background: #d9d9d9;
  border-radius: 6px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
