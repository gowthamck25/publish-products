import { PiDotsNineBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";

const Box = styled.div`
  & svg {
    margin-left: 2.5rem;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const SerialBox = styled.div`
  font-family: Bitter, serif;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 600;

  & svg {
    margin-left: 0;
    height: 4.5rem;
    width: 4.5rem;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
`;

function SNo(props) {
  // getting data from SNo cellRenderer
  const serialNumber = props.data.rowIndex;
  const handleDeleteRow = props.context.handleDeleteRow;
  // console.log(serialNumber);

  return (
    <Box>
      <Button onClick={() => handleDeleteRow(serialNumber)}>
        <RiDeleteBinLine />
      </Button>

      <SerialBox>
        {serialNumber}
        <PiDotsNineBold />
      </SerialBox>
    </Box>
  );
}

export default SNo;
