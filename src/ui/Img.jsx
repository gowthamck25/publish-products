import { useEffect, useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5px;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-lg);
  width: auto;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Box = styled.div`
  border-radius: 11px;
  background-image: url(${(props) => props.imgpath});
  /* background-image: url("/sip1.jpg"); */
  height: 80%;
  width: 80%;
`;

const BtnEdit = styled.button`
  background: none;
  padding: 4px 8px;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  border: none;
  position: absolute;
  bottom: 50px;

  & svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const BtnAddDesign = styled.button`
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

const Name = styled.p`
  font-size: 1.6rem;
  margin-top: 0.4rem;
`;

function Img(props) {
  // unpacking reuqired details from props
  const {
    data: { rowIndex },
    column: { colId } = 0,
    isFooter,
    variantNumber,
  } = props;

  if (variantNumber >= 3 || rowIndex > 4)
    return (
      <Wrapper>
        <BtnAddDesign>
          <FaPlus />
          Add Desing
        </BtnAddDesign>
      </Wrapper>
    );

  let imgpath =
    colId === "pvariant" ? `/mip${rowIndex}.jpg` : `/sip${rowIndex}.jpg`;

  return (
    <Wrapper>
      <Box imgpath={imgpath} />
      {!isFooter && (
        <BtnEdit>
          <FaEdit />
        </BtnEdit>
      )}
      {rowIndex <= 4 && (
        <Name>
          {imgpath.startsWith("/mip")
            ? "Multi Image Product"
            : "Single Image Product"}
        </Name>
      )}
    </Wrapper>
  );
}

export default Img;
