import SectionTitleComponent from "../components/SectionTitleComponent";
import WhiteCardComponent from "../components/WhiteCardComponent";
import GreenCardComponent from "../components/GreenCardComponent";
import BlackCardComponent from "../components/BlackCardComponent";

function ServicesLayout() {
  const services = [
    {
      title: "Search engine",
      secondTitle: "optimization",
      imageSrc: "./images/service-card-1.png",
    },
    {
      title: "Pay-per-click",
      secondTitle: "advertising",
      imageSrc: "./images/service-card-2.png",
    },
    {
      title: "Social Media",
      secondTitle: "Marketing",
      imageSrc: "./images/service-card-3.png",
    },
    {
      title: "Email",
      secondTitle: "Marketing",
      imageSrc: "./images/service-card-4.png",
    },
    {
      title: "Content",
      secondTitle: "Marketing",
      imageSrc: "./images/service-card-5.png",
    },
    {
      title: "Analytics and",
      secondTitle: "Tracking",
      imageSrc: "./images/service-card-6.png",
    },
  ];
  return (
    <>
      <SectionTitleComponent
        title="Services"
        desc="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        id="services"
      />

      <div
        style={{
          margin: "70px 85px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {services.map((service, index) =>
          index % 3 === 0 ? (
            <WhiteCardComponent
              key={index}
              title={service.title}
              secondTitle={service.secondTitle}
              imageSrc={service.imageSrc}
            />
          ) : index % 3 === 1 ? (
            <GreenCardComponent
              key={index}
              title={service.title}
              secondTitle={service.secondTitle}
              imageSrc={service.imageSrc}
            />
          ) : (
            <BlackCardComponent
              key={index}
              title={service.title}
              secondTitle={service.secondTitle}
              imageSrc={service.imageSrc}
            />
          ),
        )}
      </div>

      <div
        style={{
          margin: "70px 85px",
          display: "flex",
          flexDirection: "row",
          marginTop: "70px",
          borderRadius: "45px",
          padding: "60px",
          height: "auto",
          backgroundColor: "#f3f3f3",
        }}
      >
        <div>
          <h3 style={{ fontSize: "24px" }}>Let's make things happen</h3>
          <p style={{ fontSize: "20px", marginBottom: "40px", width: "500px" }}>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <div>
            <a
              href="#"
              style={{
                border: "2px solid #191a23",
                borderRadius: "14px",
                padding: "20px 35px",
                textDecoration: "none",
                backgroundColor: "#191a23",
                color: "white",
              }}
            >
              Get your free proposal
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "100px",
          }}
        >
          <img
            src="./images/proposal-image.png"
            alt="Proposal Image"
            style={{
              marginLeft: "100px",
              width: "400px",
              position: "absolute",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ServicesLayout;
