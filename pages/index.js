import Layout from "../components/MyLayout";
import Link from "next/link";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#edf7d0",
      main: "#b2c971",
      dark: "#6b8423"
    },
    secondary: {
      light: "#f7d0d6",
      main: "#c8717e",
      dark: "#832332"
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

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy app with Zeit" }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <h1>My Blog</h1>
        <ul>
          {getPosts().map(post => (
            <PostLink key={post.id} post={post} />
          ))}
        </ul>
        <style jsx>{`
          h1,
          a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }
        `}</style>
      </Layout>
    </ThemeProvider>
  );
}
