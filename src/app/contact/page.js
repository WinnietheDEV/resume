import Image from "next/image";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className="content-container">
        <h1 style={{ marginBottom: "10rem" }}>Contact</h1>
        <div
          className="grid-container"
          style={{
            gridTemplateColumns: "50% 50%",
            minHeight: "600px",
            width: "100%",
          }}
        >
          <div className="flex-container-column" style={{ gap: "8rem" }}>
            <div>
              <i class="fa-solid fa-phone icon-big">
                <div className="icon-big-background"></div>
              </i>
              {/* 66+ 903208762 */}
            </div>
            <div>
              <i class="fa-brands fa-facebook-f icon-big">
                {" "}
                <div className="icon-big-background"></div>
              </i>
              {/* Na Win */}
            </div>
            <div>
              <i class="fa-brands fa-instagram icon-big">
                {" "}
                <div className="icon-big-background"></div>
              </i>
              {/* iwinluvu */}
            </div>
            <div>
              <i class="fa-brands fa-linkedin-in icon-big">
                {" "}
                <div className="icon-big-background"></div>
              </i>
              {/* Nawin Sundaraketu */}
            </div>
          </div>
          <div>
            <form action="https://getform.io/f/apjmvmza" method="POST">
              <label id="name">Name</label>
              <input type="text" name="name" />
              <label id="email">Email</label>
              <input type="email" name="email" />
              <label id="email">Message</label>
              <textarea type="text" name="message" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
