import { Spinner } from '@components/Loader';
import styled from 'styled-components';

function Shadow({ isLoading = false }: { isLoading?: boolean }) {
  return <Wrapper>{isLoading && <Spinner />}</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 400;
  background-color: #272727a1;
`;

export default Shadow;
