import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { FaPlus } from "react-icons/fa";
import { useMemo, useRef, useState } from "react";

import TableHeader from "./TableHeader";
import SNo from "./SNo";
import Filter from "./Filter";
import styled from "styled-components";
import Img from "../../ui/Img";
import PlusButton from "../../ui/PlusButton";

const Wrapper = styled.div`
  padding: 1.6rem 2.4rem;
  padding-bottom: 0;
`;

const Container = styled.div`
  /* position: relative; */
`;

const BtnAddRow = styled.button`
  border: none;
  background-color: var(--color-grey-50);
  display: flex;
  padding-left: 8rem;
  width: 100%;
  & svg {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

function ProductTable() {
  // Set rows
  const [rows, setRows] = useState(4);
  const productsArray = [];
  for (let i = 1; i <= rows; i++) {
    const newObj = {
      rowIndex: i,
    };
    productsArray.push(newObj);
  }
  const [rowData, setRowData] = useState(productsArray);

  // Adds new Column
  function handleAddColumn() {
    const variantNumber = colDefs.length - 3 + 1;
    const plusCol = colDefs.at(-1);

    const newCol = {
      field: `variant${variantNumber}`,
      headerComponent: TableHeader,
      headerComponentParams: {
        title: `Variant ${variantNumber}`,
        variant: true,
      },
      cellRenderer: Img,
      cellRendererParams: {
        variantNumber,
      },
      headerClass: "header-class",
      cellClass: "variant-cell",
    };

    setColDefs([...colDefs.slice(0, colDefs.length - 1), newCol, plusCol]);
  }

  // Adds new Row
  const handleAddRow = () => {
    const newRow = { rowIndex: rowData.length + 1 };
    const updatedRowData = [...rowData, newRow];
    setRowData(updatedRowData);
    setRows(updatedRowData.length);
  };

  // deletes a row based on id
  function handleDeleteRow(e, id) {
    const updatedRowData = rowData.filter((row) => row.rowIndex !== id);
    setRowData(updatedRowData);
    setRows(updatedRowData.length);
  }

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: "sno",
      headerName: "",
      headerClass: "header-class",
      cellRenderer: SNo,
      cellClass: "normal-cell-class",
      autoHeight: true,
      pinned: "left",
    },
    {
      field: "filter",
      width: 550,
      headerComponent: TableHeader,
      headerComponentParams: {
        title: "Product Filter",
        variant: false,
      },
      cellRenderer: Filter,
      headerClass: "header-class",
      cellClass: "normal-cell-class",
      pinned: true,
    },
    {
      field: "pvariant",
      width: 300,
      headerComponent: TableHeader,
      headerComponentParams: {
        title: "Primary Variant",
        variant: true,
      },
      cellRenderer: Img,
      headerClass: "header-class",
      cellClass: "variant-cell",
    },
    {
      field: "variant2",
      headerComponent: TableHeader,
      headerComponentParams: {
        title: "Variant 2",
        variant: true,
      },
      cellRenderer: Img,
      headerClass: "header-class",
      cellClass: "variant-cell",
    },
    {
      field: "addCols",
      headerName: "",
      cellRenderer: PlusButton,
      cellClass: "add-cols",
    },
  ]);

  const defaultColDev = useMemo(
    () => ({
      lockPinned: true,
    }),
    []
  );

  const gridRef = useRef();

  const rowDragText = (params) => {
    const row = params.rowNode.data.rowIndex;

    return "row " + row + " is" + " being dragged...";
  };

  return (
    <Wrapper>
      <Container
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: "100vh" }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          ref={gridRef}
          defaultColDef={defaultColDev}
          rowHeight={250}
          columnDefs={colDefs}
          rowData={rowData}
          frameworkComponents={{
            addColumnRenderer: PlusButton,
            deleteButtonRenderer: SNo,
          }}
          context={{ handleAddColumn, handleDeleteRow }}
          // For Row Dragging
          rowDragText={rowDragText}
          rowDragEntireRow={true}
          rowDragManaged={true}
          rowDragMultiRow={true}
          rowSelection={"multiple"}
        />
        <BtnAddRow onClick={handleAddRow}>
          <FaPlus />
        </BtnAddRow>
      </Container>
    </Wrapper>
  );
}

export default ProductTable;
