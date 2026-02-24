import { useState } from "react";
import SectionTitleComponent from "../components/SectionTitleComponent";

function ProcessLayout() {
  const [openIndex, setOpenIndex] = useState(0);

  const steps = [
    {
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Research and Strategy Development",
      description:
        "Based on  the information gathered during the consultation, we will develop a customized digital marketing strategy that outlines the tactics and channels we will use to achieve your goals. This may include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content creation, and more.",
    },
    {
      title: "Implementation",
      description:
        "Once the strategy is developed, we will begin implementing the various tactics and channels outlined in the plan. This may involve creating and optimizing your website, setting up and managing PPC campaigns, creating and scheduling social media content, and more.",
    },
    {
      title: "Monitoring and Optimization",
      description:
        "We will continuously monitor the performance of your digital marketing campaigns and make adjustments as needed to ensure that we are achieving the best possible results. This may involve analyzing data, testing different tactics, and making changes to the strategy as necessary.",
    },
    {
      title: "Reporting and Communication",
      description:
        "We will provide regular reports on the performance of your digital marketing campaigns, including key metrics such as website traffic, conversions, and ROI. We will also maintain open communication with you to ensure that you are informed about the progress of your campaigns and any changes that may be made to the strategy.",
    },
    {
      title: "Continual Improvement",
      description:
        "Digital marketing is an ever-evolving field, and we will continuously strive to improve our services and stay up-to-date with the latest trends and best practices. We will work closely with you to ensure that your digital marketing efforts are always aligned with your business goals and objectives.",
    },
  ];

  const toggleStep = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <>
      <SectionTitleComponent
        title="Our Working Process"
        desc="At our digital marketing agency, we follow a comprehensive process to ensure that we deliver the best possible results for our clients. Our process includes the following steps:"
        id="process"
      />

      <div style={{ margin: "70px 85px" }}>
        {steps.map((step, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={step.title}
              style={{
                margin: "30px 0",
                fontWeight: "bold",
                marginTop: "30px",
                borderRadius: "45px",
                padding: "8px 30px",
                backgroundColor: isOpen ? "#B9FF66" : "#f3f3f3",
                borderBottom: "6px solid #000",
                transition: "all 0.3s ease",
              }}
            >
              <button
                type="button"
                onClick={() => toggleStep(index)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                  font: "inherit",
                }}
              >
                <h1
                  style={{
                    fontSize: "50px",
                    marginLeft: "30px",
                    marginRight: "15px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </h1>
                <h2 style={{ flex: 1, fontSize: "28px" }}>{step.title}</h2>
                <img
                  src={isOpen ? "./images/minus.png" : "./images/plus.png"}
                  alt={isOpen ? "Collapse" : "Expand"}
                  style={{ marginRight: "30px", width: "58px", height: "auto" }}
                />
              </button>

              {isOpen && (
                <div
                  style={{
                    margin: "0 30px 20px",
                    borderTop: "1px solid #000",
                    paddingTop: "20px",
                  }}
                >
                  <p style={{ fontSize: "18px", fontWeight: 400, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProcessLayout;
