import Header from "./Header";
import Container from "@material-ui/core/Container";

const Layout = props => (
  <Container maxWidth="md" disableGutters>
    <Header />
    {props.children}
  </Container>
);

export default Layout;
