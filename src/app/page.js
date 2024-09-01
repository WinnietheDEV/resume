"use client";

import Image from "next/image";
import styles from "./page.module.css";
import profile from "../../public/profile.jpg";

import jsLogo from "../../public/skill/programming-language/js-logo.png";
import pythonLogo from "../../public/skill/programming-language/python-logo.png";
import phpLogo from "../../public/skill/programming-language/php-logo.png";
import javaLogo from "../../public/skill/programming-language/java-logo.png";

import htmlLogo from "../../public/skill/front-end/html-logo.jpg";
import cssLogo from "../../public/skill/front-end/css-logo.png";
import reactLogo from "../../public/skill/front-end/react-logo.png";
import nextLogo from "../../public/skill/front-end/next-logo.webp";

import nestLogo from "../../public/skill/back-end/nest-logo.svg";
import expressLogo from "../../public/skill/back-end/express-logo.jpg";
import nodeLogo from "../../public/skill/back-end/nodejs-logo.png";

import postgressLogo from "../../public/skill/database/postgress-logo.png";
import mongodbLogo from "../../public/skill/database/mongodb-logo.jpg";

import awsLogo from "../../public/skill/devops-tool/aws-logo.png";
import azureLogo from "../../public/skill/devops-tool/azure-logo.jpg";
import dockerLogo from "../../public/skill/devops-tool/docker-logo.png";
import { useState } from "react";
import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(undefined);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className={styles.main}>
      <div className="content-container">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={modalStyle}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
        <div
          className="grid-container background-grey"
          style={{
            gridTemplateColumns: "25% 75%",
            gap: "1rem",
            marginBottom: "2rem",
            height: "450px",
            overflow: "hidden",
          }}
        >
          <div
            className="flex-container-column "
            style={{
              height: "100%",
              justifyContent: "center",
            }}
          >
            <button
              className="first-color"
              style={{
                textAlign: "center",
                borderRight: `${tab === 0 ? "0.5rem solid green" : ""}`,
              }}
              onClick={() => setTab(0)}
            >
              <h2>Personal Information</h2>
            </button>
            <button
              className="second-color"
              style={{
                textAlign: "center",
                borderRight: `${tab === 1 ? "0.5rem solid orange" : ""}`,
              }}
              onClick={() => setTab(1)}
            >
              <h2>About me</h2>
            </button>
            <button
              className="third-color"
              style={{
                textAlign: "center",
                borderRight: `${tab === 2 ? "0.5rem solid blue" : ""}`,
              }}
              onClick={() => setTab(2)}
            >
              <h2>Experience</h2>
            </button>
          </div>
          <div style={{ padding: "4rem 1rem", height: "450px" }}>
            {tab === 0 && (
              <div
                className="grid-container"
                style={{ gridTemplateColumns: "30% 70%", height: "100%" }}
              >
                <div style={{ marginBottom: "2rem" }}>
                  <Image src={profile} width={300} height={225} />
                  <div style={{ alignSelf: "start", marginBottom: "1rem" }}>
                    <h2>Nawin Sundaraketu</h2>
                    <h2>Full stack developer</h2>
                  </div>
                  <div
                    className="grid-container"
                    style={{ gridTemplateColumns: "50% 50%" }}
                  >
                    <div>
                      <h3>Bangkok, Thailand</h3>
                    </div>
                    <div>
                      <h3>
                        Available to work across all time zones, ensuring
                        flexibility and adaptability to meet project needs
                        globally
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="flex-container-column"
                  style={{ height: "100%", justifyContent: "flex-start" }}
                >
                  <div>
                    <h2 style={{ marginBottom: "1rem" }}>Summary</h2>
                    <h3 style={{ marginBottom: "1rem" }}>
                      Passionate full-stack developer with a strong interest in
                      AWS Solution Architecture and system design. Currently
                      pursuing AWS Certified Solutions Architect certification
                      to deepen my expertise in cloud architecture.
                    </h3>
                  </div>
                  <div>
                    <h2 style={{ marginBottom: "1rem" }}>
                      Bachelor of Science in Sports Science
                    </h2>
                    <h3 style={{ marginBottom: "1rem" }}>
                      [University Name] – [Year of Graduation]
                    </h3>
                  </div>
                  <div>
                    <h2 style={{ marginBottom: "1rem" }}>Languages</h2>
                    <h3 style={{ marginBottom: "1rem" }}>
                      Thai - native speaker
                    </h3>
                    <h3 style={{ marginBottom: "1rem" }}>
                      English - intermediate to advanced TOELF ITP: 555/570
                    </h3>
                  </div>
                  <div>
                    <h2 style={{ marginBottom: "1rem" }}>
                      Certifications & Professional Development
                    </h2>
                    <h3 style={{ marginBottom: "1rem" }}>
                      Currently Learning: AWS Certified Solutions Architect (In
                      Progress)
                    </h3>
                  </div>
                </div>
              </div>
            )}
            {tab === 1 && (
              <div
                style={{
                  marginBottom: "2rem",
                  paddingRight: "10rem",
                  paddingLeft: "2rem",
                  lineHeight: 1.5,
                  letterSpacing: 1.25,
                }}
              >
                <p
                  className={"paragraph"}
                  style={{ textIndent: 25, paddingBottom: "2rem" }}
                >
                  As a developer, my job is to understand and fulfill client and
                  organization requirements. With the endless possibilities of
                  products, I continuously strive to improve my skills to solve
                  complex problems, tackle new challenges, and adapt to evolving
                  technologies.
                </p>
                <p
                  className={"paragraph"}
                  style={{ textIndent: 25, paddingBottom: "2rem" }}
                >
                  In a company setting, I do my best to collaborate effectively
                  with colleagues and teams. For instance, when working with the
                  technical team, I ensure my code is clean, efficient, and
                  well-documented as necessary. When collaborating with the
                  business team, I attend client meetings to align with all
                  stakeholders, and afterward, I discuss with the team the best
                  approach to meet client needs. With the QA team, I provide
                  detailed information on code changes and new features,
                  proactively highlighting any potential issues.
                </p>
                <p className={"paragraph"} style={{ textIndent: 25 }}>
                  My ultimate goal is to create a product that serves customers
                  worldwide.
                </p>
              </div>
            )}
            {tab === 2 && (
              <div
                style={{
                  marginBottom: "2rem",
                  paddingRight: "2rem",
                  paddingLeft: "2rem",
                  lineHeight: 1.5,
                  letterSpacing: 1.25,
                }}
              >
                <h2 style={{ marginBottom: "1rem" }}>JUNE 2023 - PRESENT</h2>
                <h2 style={{ marginBottom: "1rem" }}>Notus IT Solutions</h2>
                <h3 style={{ marginBottom: "1rem" }}>Full Stack Developer</h3>
                <div
                  className="grid-container"
                  style={{ gridTemplateColumns: "50% 50%", gap: "1.5rem" }}
                >
                  <div>
                    <h2>role</h2>
                    <ul>
                      <li>Digital transformation: translate com</li>
                      <li>
                        Developed full-stack web applications which processed,
                        analyzed, and rendered data visually.
                      </li>
                      <li>
                        Liaised with back end developers, front end developers,
                        quality assurance testers, and CTO as needed.
                      </li>
                      <li>
                        Managed time-sensitive updates, including content
                        changes and database upgrades.
                      </li>
                      <li>
                        Planned, wrote, and debugged web applications and
                        software with complete accuracy.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <h2>achieve</h2>
                      <li>Digital transformation: translate com</li>
                      <li>
                        Developed full-stack web applications which processed,
                        analyzed, and rendered data visually.
                      </li>
                      <li>
                        Liaised with back end developers, front end developers,
                        quality assurance testers, and CTO as needed.
                      </li>
                      <li>
                        Managed time-sensitive updates, including content
                        changes and database upgrades.
                      </li>
                      <li>
                        Planned, wrote, and debugged web applications and
                        software with complete accuracy.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className="flex-container-row"
            style={{ justifyContent: "space-between" }}
          >
            <div
              className={`width-one-fifth skill-container ${
                flipped === 4 ? "back-flip" : ""
              } ${flipped === -4 ? "front-flip" : ""}`}
              onClick={() => {
                if (flipped === 4) {
                  setFlipped(-4);
                } else {
                  setFlipped(4);
                }
              }}
            >
              <div
                style={{ textAlign: "center" }}
                className={`${
                  flipped === undefined ? "" : flipped !== 4 ? "show" : "hide"
                }`}
              >
                <h2 style={{ textAlign: "center" }}>Programming Languages</h2>

                <h3>click to see more</h3>
              </div>
              <div
                className={`grid-container justify-items-center ${
                  flipped === 4 ? "show" : "hide"
                }`}
                style={{
                  gridTemplateColumns: "50% 50%",
                  display: `${flipped === undefined ? "none" : "initial"}`,
                }}
              >
                <Image
                  src={jsLogo}
                  width={75}
                  height={75}
                  alt="javascript logo"
                />
                <Image
                  src={pythonLogo}
                  width={75}
                  height={75}
                  alt="python logo"
                />
                <Image src={phpLogo} width={75} height={75} alt="php logo" />
                <Image src={javaLogo} width={75} height={75} alt="java logo" />
              </div>
            </div>
            <div
              className={`width-one-fifth skill-container ${
                flipped === 4 ? "back-flip" : ""
              } ${flipped === -4 ? "front-flip" : ""}`}
              onClick={() => {
                if (flipped === 4) {
                  setFlipped(-4);
                } else {
                  setFlipped(4);
                }
              }}
            >
              <div
                style={{ textAlign: "center" }}
                className={`${
                  flipped === undefined ? "" : flipped !== 4 ? "show" : "hide"
                }`}
              >
                <h2 style={{ textAlign: "center" }}>Front end</h2>

                <h3>click to see more</h3>
              </div>

              <div
                className={`grid-container justify-items-center ${
                  flipped === 4 ? "show" : "hide"
                }`}
                style={{
                  gridTemplateColumns: "50% 50%",
                  display: `${flipped === undefined ? "none" : "initial"}`,
                }}
              >
                <Image src={htmlLogo} width={75} height={75} alt="html logo" />
                <Image src={cssLogo} width={75} height={75} alt="css logo" />
                <Image
                  src={reactLogo}
                  width={75}
                  height={75}
                  alt="react logo"
                />
                <Image src={nextLogo} width={75} height={75} alt="next logo" />
              </div>
            </div>
            <div
              className={`width-one-fifth skill-container ${
                flipped === 4 ? "back-flip" : ""
              } ${flipped === -4 ? "front-flip" : ""}`}
              onClick={() => {
                if (flipped === 4) {
                  setFlipped(-4);
                } else {
                  setFlipped(4);
                }
              }}
            >
              <div
                style={{ textAlign: "center" }}
                className={`${
                  flipped === undefined ? "" : flipped !== 4 ? "show" : "hide"
                }`}
              >
                <h2 style={{ textAlign: "center" }}>Backend end</h2>

                <h3>click to see more</h3>
              </div>
              <div
                className={`grid-container justify-items-center ${
                  flipped === 4 ? "show" : "hide"
                }`}
                style={{
                  gridTemplateColumns: "50% 50%",
                  display: `${flipped === undefined ? "none" : "initial"}`,
                }}
              >
                <Image
                  src={expressLogo}
                  width={75}
                  height={75}
                  alt="express logo"
                />
                <Image src={nestLogo} width={75} height={75} alt="nest logo" />
                <Image src={nodeLogo} width={75} height={75} alt="node logo" />
                <Image src={nextLogo} width={75} height={75} alt="next logo" />
              </div>
            </div>
            <div
              className={`width-one-fifth skill-container ${
                flipped === 4 ? "back-flip" : ""
              } ${flipped === -4 ? "front-flip" : ""}`}
              onClick={() => {
                if (flipped === 4) {
                  setFlipped(-4);
                } else {
                  setFlipped(4);
                }
              }}
            >
              <div
                style={{ textAlign: "center" }}
                className={`${
                  flipped === undefined ? "" : flipped !== 4 ? "show" : "hide"
                }`}
              >
                <h2 style={{ textAlign: "center" }}>Database</h2>
                <h3>click to see more</h3>
              </div>
              <div
                className={`grid-container justify-items-center ${
                  flipped === 4 ? "show" : "hide"
                }`}
                style={{
                  gridTemplateColumns: "50% 50%",
                  display: `${flipped === undefined ? "none" : "initial"}`,
                }}
              >
                <Image
                  src={postgressLogo}
                  width={75}
                  height={75}
                  alt="postgress logo"
                />
                <Image
                  src={mongodbLogo}
                  width={75}
                  height={75}
                  alt="mongodDB logo"
                />
              </div>
            </div>
            <div
              className={`width-one-fifth skill-container ${
                flipped === 4 ? "back-flip" : ""
              } ${flipped === -4 ? "front-flip" : ""}`}
              onClick={() => {
                if (flipped === 4) {
                  setFlipped(-4);
                } else {
                  setFlipped(4);
                }
              }}
            >
              <div
                style={{ textAlign: "center" }}
                className={`${
                  flipped === undefined ? "" : flipped !== 4 ? "show" : "hide"
                }`}
              >
                <h2>Cloud & DevOps</h2>
                <h3>click to see more</h3>
              </div>
              <div
                className={`grid-container justify-items-center ${
                  flipped === 4 ? "show" : "hide"
                }`}
                style={{
                  gridTemplateColumns: "50% 50%",
                  display: `${flipped === undefined ? "none" : "initial"}`,
                }}
                onClick={(e) => e.stopPropagation()} // Add this line
              >
                <Button onClick={handleOpen}>
                  <Image
                    className={"rotate"}
                    src={awsLogo}
                    width={75}
                    height={75}
                    alt="aws logo"
                    style={{ transform: "rotateY(-180deg)" }}
                  />
                </Button>
                <Button onClick={handleOpen} disableRipple>
                  <Image
                    className={"rotate"}
                    src={azureLogo}
                    width={75}
                    height={75}
                    alt="azure logo"
                    style={{ transform: "rotateY(-180deg)" }}
                  />
                </Button>

                <Image
                  className={"rotate"}
                  src={dockerLogo}
                  width={75}
                  height={75}
                  alt="docker logo"
                  style={{ transform: "rotateY(-180deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
