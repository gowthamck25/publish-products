import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  & {
  /* Black */
  --color-black-900: #000000;

  /* Green */
  --color-green-0: #ebfbee;
  --color-green-100: #d3f9d8;
  --color-green-200: #b2f2bb;
  --color-green-300: #8ce99a;
  --color-green-500: #51cf66;
  --color-green-600: #40c057;
  --color-green-700: #37b24d;
  --color-green-800: #2f9e44;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

  --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-black-800);
  overflow-x: hidden;

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}


// AG Grid Styles
.ag-theme-quartz {
  --ag-borders: none;
  --ag-row-border-style: none;

  --ag-background-color: #f9fafb;
  --ag-header-background-color: none;
  --ag-row-hover-color: none;

  --ag-header-height: 10rem;
  /* --ag-cell-horizontal-padding: 3rem; */
  --ag-grid-size: auto;
  /* --ag-row-height: 10rem; */

  --ag-font-size: 2rem;
  --ag-header-foreground-color:  #374151;
  --ag-data-color: #374151;
}

.ag-header-cell-comp-wrapper {
  justify-content: center;
}

.ag-theme-quartz .ag-icon-grip {
    display: block;
    opacity: 0;
}

.header-class {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: green; */
}


.normal-cell-class {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
}

.variant-cell {
  margin: 1.2rem;
  padding: 1.2rem;
  max-width: 20rem;
}

.add-cols {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyles;
