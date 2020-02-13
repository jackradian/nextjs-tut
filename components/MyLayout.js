import Header from "./Header";
import Container from "@material-ui/core/Container";

const Layout = props => (
  <Container maxWidth="md" disableGutters={true}>
    <Header />
    <Container maxWidth="md">{props.children}</Container>
  </Container>
);

export default Layout;
