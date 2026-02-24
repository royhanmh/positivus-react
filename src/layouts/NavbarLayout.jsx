import ButtonLightComponent from "../components/ButtonLightComponent";
import NavItemComponent from "../components/NavItemComponent";

function navbarLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: " row",
        justifyContent: "space-around",
        marginTop: "60px",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src="./images/nav-logo.png"
          alt="Positivus"
          style={{ width: " 250px", height: "40px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <NavItemComponent name="About Us" href="#about" />
        <NavItemComponent name="Services" href="#services" />
        <NavItemComponent name="Use Cases" href="#use-cases" />
        <NavItemComponent name="Pricing" href="#pricing" />
        <NavItemComponent name="Blog" href="#blog" />
        <ButtonLightComponent name="Request a quote" />
      </div>
    </div>
  );
}

export default navbarLayout;
