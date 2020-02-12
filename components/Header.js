import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
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
    </Link>
  </div>
);

export default Header;
