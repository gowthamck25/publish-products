import styled from "styled-components";
import Design from "./Design";
import Input from "./Input";
import { useState } from "react";

const StyledDesign = styled.div`
  max-width: 120rem;
  max-height: 60rem;
  padding: 3rem;
  overflow-y: scroll;
`;
const Box = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-family: Bitter, serif;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`;

function ShowDesigns() {
  // stores path to images
  const designs = [
    { path: "/sip2.jpg", name: "Single Image Product" },
    { path: "/mip1.jpg", name: "Multi Image Product" },
    { path: "/sip4.jpg", name: "Single Image Product" },
    { path: "/mip3.jpg", name: "Multi Image Product" },
    { path: "/mip3.jpg", name: "Multi Image Product" },
    { path: "/mip1.jpg", name: "Multi Image Product" },
    { path: "/sip1.jpg", name: "Single Image Product" },
    { path: "/sip3.jpg", name: "Single Image Product" },
    { path: "/mip4.jpg", name: "Multi Image Product" },
    { path: "/sip1.jpg", name: "Single Image Product" },
    { path: "/sip4.jpg", name: "Single Image Product" },
    { path: "/mip2.jpg", name: "Multi Image Product" },
    { path: "/mip4.jpg", name: "Multi Image Product" },
    { path: "/mip2.jpg", name: "Multi Image Product" },
    { path: "/sip3.jpg", name: "Single Image Product" },
    { path: "/sip2.jpg", name: "Single Image Product" },
  ];

  const [search, setSearch] = useState("");
  function handleChange(e) {
    setSearch(e.target.value);
  }
  let filteredDesigns = designs.filter((design) => {
    const name = design.name.toLowerCase();
    return name.startsWith(search.toLowerCase());
  });

  return (
    <StyledDesign>
      <Box>
        <Title>Select your designs</Title>
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </Box>
      <GridBox>
        {filteredDesigns.map((design, i) => (
          <Design design={design} key={i} />
        ))}
      </GridBox>
    </StyledDesign>
  );
}

export default ShowDesigns;
