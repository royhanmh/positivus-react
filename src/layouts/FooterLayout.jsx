function FooterLayout() {
  return (
    <div
      style={{
        margin: "70px 85px",
        borderRadius: "45px 45px 0 0",
        padding: "40px 30px",
        backgroundColor: "#191a23",
        color: "#fff",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="./images/footer-logo.png"
            alt="Footer Logo"
            style={{
              width: "120px",
              height: "auto",
            }}
          />
        </div>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "20px",
            listStyle: "none",
          }}
        >
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#use-cases">Use Cases</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
          }}
        >
          <li>
            <a href="#">
              <img
                style={{
                  width: "30px",
                  height: "30px",
                }}
                src="./images/linkedin-2.png"
                alt="Linkedin-2"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                style={{
                  width: "30px",
                  height: "30px",
                }}
                src="./images/facebook.png"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                style={{
                  width: "30px",
                  height: "30px",
                }}
                src="./images/twitter.png"
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "35px",
          borderBottom: "1px solid white",
        }}
      >
        <div>
          <h4
            style={{
              display: "inline",
              fontSize: "16px",
              borderRadius: "45px",
              padding: "7px",
              backgroundColor: "#b9ff66",
              color: "#000",
            }}
          >
            Contact us
          </h4>
          <p style={{ marginTop: "24px" }}>Email: info@positivus.com</p>
          <p style={{ marginTop: "24px" }}>Phone: 555-567-8901</p>
          <p style={{ marginTop: "24px" }}>
            Address: 1234 Main St Moonstone City, Stardust State 12345
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#292a32",
            padding: "40px 30px",
            borderRadius: "14px",
          }}
        >
          <form action="post">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              style={{
                width: "256px",
                background: "none",
                border: "1px solid #fff",
                borderRadius: "14px",
                padding: "22px 35px",
              }}
            />
            <button
              type="submit"
              style={{
                marginLeft: "20px",
                color: "#191a23",
                padding: "22px 35px",
                borderRadius: "14px",
                backgroundColor: "#b9ff66",
                border: "none",
                fontSize: "16px",
              }}
            >
              Subscribe to news
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          marginTop: "35px",
        }}
      >
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a
          href="#"
          style={{
            paddingLeft: "40px",
            color: "#fff",
          }}
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
export default FooterLayout;
