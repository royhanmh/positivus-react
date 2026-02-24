function TeamCardComponent({ props }) {
  return (
    <>
      <div
        style={{
          border: "1px solid #000000",
          borderBottom: "6px solid #000",
          borderRadius: "45px",
          padding: "40px 35px",
          width: "350px",
          height: "auto",
          backgroundColor: "#f3f3f3",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px solid #000",
            paddingBottom: "28px",
          }}
        >
          <img
            style={{
              width: "102px",
              height: "102px",
              paddingRight: "5px",
            }}
            src={props.image}
            alt="Profile Picture"
          />
          <div
            style={{
              marginTop: "60px",
              minWidth: 0,
            }}
          >
            <p
              style={{
                margin: "0",
                whiteSpace: "nowrap",

                textOverflow: "ellipsis",
              }}
            >
              <b>{props.name}</b>
            </p>
            <p
              style={{
                margin: "0",
                whiteSpace: "nowrap",

                textOverflow: "ellipsis",
              }}
            >
              {props.position}
            </p>
          </div>
          <a href="#">
            <img
              style={{ width: "34px" }}
              src="./images/linkedin.png"
              alt="Linkedin "
            />
          </a>
        </div>
        <div>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default TeamCardComponent;
