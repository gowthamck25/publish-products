import styled from "styled-components";

import Widgets from "./Widgets";
import ProductDisplay from "../features/products/ProductDisplay";

const StyledAppLayout = styled.div`
  background-color: var(--color-black-900);
  height: 100vh;
  display: grid;
  grid-template-columns: 10rem 1fr;
  padding: 7rem 0;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Widgets />
      <ProductDisplay />
    </StyledAppLayout>
  );
}

export default AppLayout;
