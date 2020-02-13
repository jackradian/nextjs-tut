import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navigation: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    },
    "& a": {
      textDecoration: "none",
      color: "#fff"
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Nextjs Tutorial
          </Typography>
          <Typography variant="h6" className={classes.navigation}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/tv-shows">
              <a>TV Shows</a>
            </Link>
            <Link href="/everyday-quotes">
              <a>Everyday Quotes</a>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
