import SectionTitleComponent from "../components/SectionTitleComponent";

function CaseStudiesLayout() {
  const caseStudies = [
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];
  return (
    <>
      <SectionTitleComponent
        title="Case Studies"
        desc="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        id="use-cases"
      />

      <div
        style={{
          margin: "70px 85px",
          borderRadius: "45px",
          padding: "60px",
          height: "auto",
          backgroundColor: "#191a23",
        }}
      >
        <ul
          style={{
            color: "#fff",
            display: "flex",
            listStyleType: "none",
            padding: "0",
            margin: "0",
            justifyContent: "space-between",
          }}
        >
          {caseStudies.map((caseStudy, index) => (
            <li
              key={caseStudy.text}
              style={{
                paddingRight: index === caseStudies.length - 1 ? "0" : "64px",
                paddingLeft: index === 0 ? "0" : "64px",
                borderRight:
                  index === caseStudies.length - 1 ? "0" : "2px solid #fff",
              }}
            >
              {caseStudy.text}
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    alignItems: "center",
                    color: "#b9ff66",
                  }}
                >
                  Learn More
                </span>
                <img
                  src="./images/link-icon-1.png"
                  alt="Learn More"
                  style={{
                    width: "41px",
                    height: "41px",
                    alignItems: "center",
                    marginLeft: "12px",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default CaseStudiesLayout;
