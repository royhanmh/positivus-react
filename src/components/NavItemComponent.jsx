function NavItemComponent({ name, href }) {
  return (
    <a
      style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
      href={href}
    >
      {name}
    </a>
  );
}

export default NavItemComponent;
