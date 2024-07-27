import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";

const StyledProductHeader = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & svg {
    font-weight: 500;
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const Heading = styled.h1`
  position: relative;
  font-family: "Bitter", serif;
  font-weight: 500;

  &:after {
    position: absolute;
    content: "";
    left: -8px;
    bottom: 0;
    width: 300px;
    border-bottom: 1.5px solid var(--color-grey-400);
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 14px 16px;
  background-color: var(--color-green-700);
  color: var(--color-green-0);
  border-radius: var(--border-radius-sm);

  font-size: 1.8rem;
`;

function ProductHeader() {
  return (
    <StyledProductHeader>
      <TitleBox>
        <FiArrowLeft />
        <Heading>Rules creation</Heading>
      </TitleBox>

      <Button>Publish Feed</Button>
    </StyledProductHeader>
  );
}

export default ProductHeader;
