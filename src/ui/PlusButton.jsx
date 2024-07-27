import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: 2px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 1.6rem 1.2rem;
`;

function PlusButton(props) {
  const { handleAddColumn } = props.context;

  return (
    <StyledButton onClick={handleAddColumn}>
      <FaPlus />
    </StyledButton>
  );
}

export default PlusButton;
