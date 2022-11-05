import styled from "styled-components";

interface ICategoryProps {
  value: string;
}
function Category({ value }: ICategoryProps) {
  return (
    <Wrapper>
      <Icon />
      <p>{value}</p>
    </Wrapper>
  );
}

export default Category;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px 10px;
  cursor: pointer;
  p {
    margin: 0;
    color: #000;
    font-size: 12px;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ffdada;
`;
