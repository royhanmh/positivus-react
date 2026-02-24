function ClientsComponent(prop) {
  return (
    <img
      src={prop.src}
      alt={prop.alt}
      style={{ filter: "grayscale(100%)", width: "126px", height: "48px" }}
    />
  );
}

export default ClientsComponent;
