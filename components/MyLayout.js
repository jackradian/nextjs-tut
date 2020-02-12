import Header from "./Header";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#edf7d0",
      main: "#b2c971",
      dark: "#6b8423",
      contrastText: "#fff"
    },
    secondary: {
      light: "#f7d0d6",
      main: "#c8717e",
      dark: "#832332",
      contrastText: "#fff"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

const Layout = props => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="md" disableGutters>
      <Header />
      {props.children}
    </Container>
  </ThemeProvider>
);

export default Layout;
