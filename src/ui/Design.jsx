import styled from "styled-components";

const Container = styled.div`
  position: relative;

  & :hover {
    cursor: pointer;
    display: block;
  }
`;

const Box = styled.div`
  display: flex;
  background-image: url(${(props) => props.path});
  height: 15rem;
  width: 15rem;
`;

const Name = styled.p`
  font-size: 1.6rem;
  margin-top: 0.4rem;
`;

// const Button = styled.button`
//   display: none;
//   position: absolute;
//   border: none;
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-grey-50);
//   padding: 4px;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

function Design({ design }) {
  return (
    <Container>
      <Box path={design.path}></Box>
      <Name>
        {design.path.startsWith("/mip")
          ? "Multi Image Product"
          : "Single Image Product"}
      </Name>
      {/* <Button>Insert</Button> */}
    </Container>
  );
}

export default Design;
