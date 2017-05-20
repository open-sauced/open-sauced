import {ThemeProvider} from "styled-components";

const HeaderLinks = ({children}) => {
  console.log(children);
  return (
    <ThemeProvider theme={{
      color: "white",
      display: "inline-block",
      fontSize: "24px",
      padding: "16px",
      textDecoration: "none",
      transition: "color 0.2s ease, background-color 0.2s ease",
      verticalAlign: "bottom"
    }}
    >
      {children}
    </ThemeProvider>
  );
};

export default HeaderLinks;
