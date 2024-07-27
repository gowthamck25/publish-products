import styled from "styled-components";

import ProductHeader from "./ProductHeader";
import ProductTable from "./ProductTable";

const StyledProductDisplay = styled.div`
  padding-top: 4.5rem;
  background-color: var(--color-grey-0);
  overflow-y: scroll;
  position: relative;
`;

const Box = styled.div`
  margin: 4rem 3rem;
  margin-bottom: 0;
`;

function ProductDisplay() {
  return (
    <StyledProductDisplay>
      <ProductHeader />

      <Box>
        <ProductTable />
      </Box>
    </StyledProductDisplay>
  );
}

export default ProductDisplay;
