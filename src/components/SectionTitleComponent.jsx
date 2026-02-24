function SectionTitleComponent({ title, desc, id }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "70px 85px",
      }}
      id={id}
    >
      <h1
        style={{
          border: "solid #b9ff66",
          borderRadius: "5px",
          padding: "2px 2px 2px 2px",
          backgroundColor: "#b9ff66",
          color: "#000000",
          fontSize: "30px",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          marginLeft: "40px",
          maxWidth: "600px",
          fontSize: "20px",
          alignItems: "center",
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default SectionTitleComponent;
