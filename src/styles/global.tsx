import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
      }

      body {
        font-family: 'Graphik Medium', sans-serif;
      }
    `}
  />
);