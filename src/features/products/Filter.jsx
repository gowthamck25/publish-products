import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

const StyledFilter = styled.div`
  background-color: var(--color-grey-0);
  border: 2px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 5.5rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3px;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
  padding: 2px 10px;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
`;

const GreenSpan = styled(StyledSpan)`
  color: var(--color-green-800);
  background-color: var(--color-green-100);
`;

const BtnAddFilter = styled.button`
  background: none;
  border: 1px solid var(--color-grey-200);
  padding: 15px;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  font-size: 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

function Filter({ data }) {
  const { rowIndex } = data;

  if (rowIndex > 4)
    return (
      <StyledFilter>
        <Box>
          <BtnAddFilter>
            <FaPlus />
            Add Filters
          </BtnAddFilter>
        </Box>
      </StyledFilter>
    );

  if (rowIndex % 3 === 1)
    return (
      <StyledFilter>
        <Box>
          <StyledSpan>image_list.Product Image 2 </StyledSpan>
          <GreenSpan> is empty </GreenSpan>
          <StyledSpan> And Discount Percentage </StyledSpan>
          <GreenSpan> is </GreenSpan>
          <StyledSpan> 0</StyledSpan>
        </Box>
      </StyledFilter>
    );

  if (rowIndex % 3 === 2)
    return (
      <StyledFilter>
        <Box>
          <StyledSpan>tags</StyledSpan>
          <GreenSpan>contains</GreenSpan>
          <StyledSpan>onsale</StyledSpan>
        </Box>
      </StyledFilter>
    );

  if (rowIndex % 3 === 0)
    return (
      <StyledFilter>
        <Box>
          <StyledSpan>tags</StyledSpan>
          <GreenSpan>contains</GreenSpan>
          <StyledSpan>__label:Now</StyledSpan>
        </Box>
      </StyledFilter>
    );
}

export default Filter;
