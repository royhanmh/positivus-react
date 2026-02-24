function TestimonialCardComponent({ props, isActive }) {
  return (
    <div
      style={{
        width: "560px",
        flex: "0 0 560px",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#191a23",
          border: "1px solid #b9ff66",
          borderRadius: "45px",
          width: "100%",
          minHeight: "220px",
          padding: "38px 40px",
          boxSizing: "border-box",
          opacity: isActive ? 1 : 0.88,
        }}
      >
        <p
          style={{
            margin: "0",
            lineHeight: "1.55",
            fontSize: "18px",
          }}
        >
          {props.text}
        </p>
        <div
          style={{
            position: "absolute",
            left: "58px",
            bottom: "-9px",
            width: "18px",
            height: "18px",
            borderLeft: "1px solid #b9ff66",
            borderBottom: "1px solid #b9ff66",
            backgroundColor: "#191a23",
            transform: "rotate(-45deg)",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "28px",
          paddingLeft: "60px",
        }}
      >
        <h4
          style={{
            margin: "0",
            color: "#b9ff66",
            fontSize: "20px",
          }}
        >
          {props.name}
        </h4>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: "18px",
          }}
        >
          {props.position}
        </p>
      </div>
    </div>
  );
}
export default TestimonialCardComponent;
