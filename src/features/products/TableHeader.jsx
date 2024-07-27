import { HiOutlineDotsVertical } from "react-icons/hi";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;

  & svg {
    cursor: pointer;
  }
`;

function TableHeader({ title, variant }) {
  if (!variant) return <div>{title}</div>;

  return (
    <Box>
      {title}
      <HiOutlineDotsVertical />
    </Box>
  );
}

export default TableHeader;
