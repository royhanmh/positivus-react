import { useState } from "react";

function ButtonDarkComponent({ name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "transparent" : "#191A23",
        color: isHovered ? "#191A23" : "white",
        textDecoration: "none",
        alignItems: "center",
        border: " 2px solid #191A23",
        borderRadius: " 14px",
        padding: "20px 35px",
        fontSize: "20px",
        transition: "all 0.25s ease",
      }}
    >
      {name}
    </a>
  );
}
export default ButtonDarkComponent;
