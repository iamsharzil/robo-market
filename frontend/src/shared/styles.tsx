import { css, Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
      }

      body {
        color: #282c3f;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}
  />
);
