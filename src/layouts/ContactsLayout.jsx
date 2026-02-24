import SectionTitleComponent from "../components/SectionTitleComponent";

function ContactsLayout() {
  return (
    <>
      <SectionTitleComponent
        title="Contact Us"
        desc="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        id="contact-us"
      />
      <div
        style={{
          margin: "70px 85px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "45px",
          padding: "40px 60px",
          backgroundColor: "#f3f3f3",
          boxSizing: "border-box",

          position: "relative",
          overflow: "hidden",
        }}
      >
        <form
          action="post"
          style={{
            width: "45%",
            zIndex: "2",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              width: "100%",
            }}
          >
            <input type="radio" id="sayhi" name="type" value="Sayhi" />
            <label style={{ marginRight: "30px" }} htmlFor="sayhi">
              Say Hi
            </label>
            <br />
            <input type="radio" id="quote" name="type" value="Quote" />
            <label htmlFor="quote">Get a Quote</label>
            <br />
          </div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <label htmlFor="message">Message*</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "15px 40px",
              backgroundColor: "#000",
              color: "white",
              border: "none",
              borderRadius: "14px",
              cursor: "pointer",
              marginTop: "20px",
              width: "110%",
            }}
          >
            Send Message
          </button>
        </form>
        <div
          style={{
            position: "absolute",
            right: "-240px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src="./images/contact.png"
            alt="Contact"
            style={{
              width: "500px",
              height: "auto",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ContactsLayout;
