import { useState } from "react";

function ButtonLightComponent({ name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? "white" : "black",
        backgroundColor: isHovered ? "#191a23" : "transparent",
        textDecoration: "none",
        alignItems: "center",
        border: " 2px solid #000000",
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
export default ButtonLightComponent;
