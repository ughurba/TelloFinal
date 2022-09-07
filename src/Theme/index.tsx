import { createGlobalStyle } from "styled-components";
//import font from "../../Assets/css/fonts.css";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { FC, ReactNode } from "react";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0 ;
  padding: 0;
 
}
`;

const theme = {
  colors: {
    cerise: "#db2c66",
    gray: "#333333",
    black: "#000000",
    gray31: "#4f4f4f",
    white: "#ffffff",
    blue: "#3366ff",
    gray4: "#BDBDBD",
    green: "#2DD06E",
    titleBlack: "#1D2123",
    oldSilver: "#828282",
    inputSearch: {
      gray95: "#f2f2f2",
    },
  },
  space: [
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "4.7rem",
    "6rem",
    "8rem",
    "12rem",
    "16rem",
    "24rem",
  ],
  fontStyle: {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
    size: {
      small: "12px",
      xSmall: "14px",
      medium: "16px",
      large: "24px",
      xxLarge: "48px",
    },
  },
};
export type Theme = typeof theme;

interface Props {
  children: ReactNode;
}

const Theme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Theme;
