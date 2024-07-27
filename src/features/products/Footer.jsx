import styled from "styled-components";
import Img from "../../ui/Img";
import { RxSwitch } from "react-icons/rx";

const StyledFooter = styled.div`
  margin: 5rem 0;
`;

const FooterHead = styled.h1`
  font-family: Bitter, serif;
  font-weight: 600;
  margin-bottom: 3rem;
  position: relative;

  display: flex;
  align-items: center;
  gap: 2rem;

  & svg {
    cursor: pointer;
    height: 4.5rem;
    width: 4.5rem;
    color: var(--color-green-600);
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 5rem;
  padding: 0 2rem;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 3px solid var(--color-grey-100);
`;

const EmptyBox = styled(FlexBox)`
  background-color: var(--color-grey-100);
  height: 25rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterHead>
        Use Different Design for SKU&apos;s <RxSwitch />
      </FooterHead>
      <Box>
        <EmptyBox>NA</EmptyBox>
        <FlexBox>
          <Img data={{ rowIndex: 1 }} isFooter={true} />
        </FlexBox>
        <FlexBox>
          <Img data={{ rowIndex: 2 }} isFooter={true} />
        </FlexBox>
      </Box>
    </StyledFooter>
  );
}

export default Footer;
