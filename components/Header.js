import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Nextjs Tutorial</Typography>
      </Toolbar>
    </AppBar>
    {/* <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/tv-shows">
      <a style={linkStyle}>TV Shows</a>
    </Link>
    <Link href="/everyday-quotes">
      <a style={linkStyle}>Everyday Quotes</a>
    </Link> */}
  </div>
);

export default Header;
