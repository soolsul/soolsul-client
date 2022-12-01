import styled from 'styled-components';

const TagItem = () => {
  return (
    <Tag>
      <p>tag</p>
    </Tag>
  );
};

export default TagItem;

const Tag = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: #d9d9d9;
  font-size: 12px;
  padding: 8px 16px;
  margin-right: 7px;

  p {
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
  }
`;
