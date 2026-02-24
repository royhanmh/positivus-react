function WhiteCardComponent({ title, secondTitle, imageSrc }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #000000",
        borderBottom: "6px solid #000",
        borderRadius: "45px",
        padding: "25px 35px",
        width: "450px",
        height: "auto",
        backgroundColor: " #191A23",
      }}
    >
      <div style={{}}>
        <h3
          style={{
            marginBottom: "93px",
            fontSize: "24px",
            fontWeight: "normal",
          }}
        >
          <span
            style={{
              backgroundColor: "#F3f3f3",
              fontWeight: "bold",
              padding: "5px 15px",
              marginRight: "5px",
              display: "block",
              borderRadius: "5px",
            }}
          >
            {title}
          </span>
          <span
            style={{
              backgroundColor: "#f3f3f3",
              fontWeight: "bold",
              padding: "5px 15px",
              marginRight: "5px",
              display: "inline-block",
              borderRadius: "5px",
            }}
          >
            {secondTitle}
          </span>
        </h3>

        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            style={{
              width: "41px",
              height: "41px",
              alignItems: "center",
              marginRight: "16px",
            }}
            src="./images/link-icon-2.png"
            alt="Learn More"
          />
          <span style={{ color: "#f3f3f3" }}>Learn More</span>
        </a>
      </div>
      <div>
        <img
          src={imageSrc}
          alt={title}
          style={{ marginTop: "45px", width: "160px" }}
        />
      </div>
    </div>
  );
}

export default WhiteCardComponent;
