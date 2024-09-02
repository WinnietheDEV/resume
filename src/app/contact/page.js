import styles from "./page.module.css";
import { TextField } from "@mui/material";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className="content-container">
        <div
          className="grid-container"
          style={{
            gridTemplateColumns: "50% 50%",
            maxHeight: "100%",
            minHeight: "100%",
            width: "100%",
            background: "rgb(255, 255, 255, 0.45)",
          }}
        >
          <div
            className="flex-container-column"
            style={{
              gap: "8rem",
              minHeight: "100%",
              justifyContent: "center",
              padding: "5rem",
              paddingLeft: "25%",
            }}
          >
            <a href="https://linkedin.com/in/nawin-sundaraketu" target="blank">
              <div
                className="grid-container"
                style={{ gridTemplateColumns: "25% 75%" }}
              >
                <i class="fa-brands fa-linkedin-in icon-big"> </i>

                <h2 style={{ alignSelf: "center" }}>Nawin Sundaraketu</h2>
              </div>
            </a>
            <a href="tel:+66903208762" target="blank">
              <div
                className="grid-container"
                style={{ gridTemplateColumns: "25% 75%" }}
              >
                <i class="fa-solid fa-phone icon-big"></i>
                <h2 style={{ alignSelf: "center" }}>66+ 90 320 8762</h2>
              </div>
            </a>
            <a href="https://www.facebook.com/Nawin18778/" target="blank">
              <div
                className="grid-container"
                style={{ gridTemplateColumns: "25% 75%" }}
              >
                <i class="fa-brands fa-facebook-f icon-big"> </i>
                <h2 style={{ alignSelf: "center" }}>Na Win</h2>
              </div>
            </a>
            <a href="https://www.instagram.com/iwinluvu/" target="blank">
              <div
                className="grid-container"
                style={{ gridTemplateColumns: "25% 75%" }}
              >
                <i class="fa-brands fa-instagram icon-big"> </i>
                <h2 style={{ alignSelf: "center" }}>iwinluvu</h2>
              </div>
            </a>
          </div>
          <div
            style={{
              maxHeight: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginBottom: "1rem" }}>Send me a message!</h1>
            <h4 style={{ marginBottom: "3rem" }}>
              Your message will be sent to{" "}
              <span style={{ fontWeight: 700 }}>nawin.dev.th@gmail.com</span>
            </h4>
            <form
              action="https://getform.io/f/apjmvmza"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                width: "80%",
              }}
            >
              <div>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  name="name"
                  style={{ width: "100%" }}
                  color="black"
                />
              </div>
              <div>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  style={{ width: "100%" }}
                  color="black"
                />
              </div>
              <div>
                <TextField
                  id="message"
                  label="Message"
                  variant="outlined"
                  color="black"
                  name="message"
                  rows={4}
                  multiline
                  style={{ width: "100%" }}
                />
              </div>
              <button type="submit" style={{ borderRadius: "2rem" }}>
                <h3>Send</h3>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
