import ButtonDarkComponent from "../components/ButtonDarkComponent";
import ClientsComponent from "../components/ClientsComponent";
function HeroLayout() {
  const sites = [
    { name: "Amazon", image: "./images/amazon.png" },
    { name: "Dribble", image: "./images/dribble.png" },
    { name: "Hubspot", image: "./images/hubspot.png" },
    { name: "Notion", image: "./images/notion.png" },
    { name: "Netflix", image: "./images/netflix.png" },
    { name: "Zoom", image: "./images/zoom.png" },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        id="about"
      >
        <div style={{ padding: "90px" }}>
          <h1 style={{ fontSize: "60px" }}>
            Navigating the digital landscape for success
          </h1>
          <p
            style={{
              fontSize: "20px",
              marginTop: "35px",
              marginBottom: "35px",
            }}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <ButtonDarkComponent name="Book a consulation" />
        </div>
        <div style={{ padding: "80px" }}>
          <img
            src="./images/hero-image.png"
            alt="Hero"
            style={{ width: " 500px", height: "415px" }}
          />
        </div>
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          justifyContent: "center",
          marginTop: "70px",
        }}
      >
        {sites.map((site, index) => (
          <li key={index} style={{ marginRight: "65px" }}>
            <ClientsComponent src={site.image} alt={site.name} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default HeroLayout;
