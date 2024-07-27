import { AiOutlinePicture } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaFan, FaShopify } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import styled from "styled-components";

const StyledWidgets = styled.div`
  padding: 4.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  & svg {
    cursor: pointer;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    color: var(--color-grey-0);
  }

  & svg:first-child {
    color: var(--color-green-500);
  }

  & svg:last-child {
    margin-top: auto;
  }
`;

function Widgets() {
  return (
    <StyledWidgets>
      <FaFan />
      <AiOutlinePicture />
      <FaMeta />
      <FaShopify />
      <CiSettings />
    </StyledWidgets>
  );
}

export default Widgets;
