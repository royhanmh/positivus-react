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
        backgroundColor: " #f3f3f3",
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
              backgroundColor: "#b9ff66",
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
              backgroundColor: "#b9ff66",
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
            src="./images/link-icon-1.png"
            alt="Learn More"
          />
          <span>Learn More</span>
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
