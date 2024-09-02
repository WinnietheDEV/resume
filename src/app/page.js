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
import SkillGroup from "./component/skill/SkillGroup";
import { skillGroups } from "./data/home/skillGroup";
import Link from "next/link";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "2rem",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(undefined);
  const handleOpenSkillDetail = () => setOpen(true);
  const handleCloseSkillDetail = () => setOpen(false);
  const [skillDetail, setSkillDetail] = useState(<></>);

  return (
    <main className={styles.main}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseSkillDetail}
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {skillDetail}
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <div className="content-container">
        <div
          className="grid-container background-grey"
          style={{
            gridTemplateColumns: "25% 75%",
            gap: "1rem",
            marginBottom: "2rem",
            maxHeight: "65%",
            height: "65%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              minHeight: "100%",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              style={{
                textAlign: "center",
                borderRight: `${tab === 0 ? "0.5rem solid #555" : ""}`,
              }}
              onClick={() => setTab(0)}
            >
              <h2 style={{ fontWeight: 700 }}>Personal Information</h2>
            </button>
            <button
              style={{
                textAlign: "center",
                borderRight: `${tab === 1 ? "0.5rem solid #555" : ""}`,
              }}
              onClick={() => setTab(1)}
            >
              <h2 style={{ fontWeight: 700 }}>About Me</h2>
            </button>
            <button
              style={{
                textAlign: "center",
                borderRight: `${tab === 2 ? "0.5rem solid #555" : ""}`,
              }}
              onClick={() => setTab(2)}
            >
              <h2 style={{ fontWeight: 700 }}>Experience</h2>
            </button>
          </div>
          <div style={{ padding: "1rem 1rem", minHeight: "100%" }}>
            {tab === 0 && (
              <div
                className="grid-container"
                style={{
                  gridTemplateColumns: "30% 70%",
                  height: "100%",
                  columnGap: 2,
                  // letterSpacing: 1.25,
                }}
              >
                <div style={{ marginBottom: "2rem" }}>
                  <Image
                    src={profile}
                    width={200}
                    height={150}
                    style={{
                      borderRadius: "2rem",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  />
                  <div style={{ alignSelf: "start", marginBottom: "0.5rem" }}>
                    <h2 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>
                      Nawin Sundaraketu
                    </h2>
                    <h3 style={{ fontWeight: 700 }}>Full stack developer</h3>
                  </div>
                  <ul style={{ marginLeft: "2rem" }}>
                    <li>Bangkok, Thailand</li>
                    <li>Available to work across all time zones</li>
                  </ul>
                </div>
                <div
                  className="flex-container-column"
                  style={{
                    height: "100%",
                    justifyContent: "flex-start",
                    padding: "2rem",
                  }}
                >
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>
                      Summary
                    </h3>
                    <p style={{ marginBottom: "1rem", textIndent: 25 }}>
                      Passionate full-stack developer with a strong interest in
                      AWS Solution Architecture and system design. Currently
                      pursuing AWS Certified Solutions Architect certification
                      to deepen my expertise in cloud architecture.
                    </p>
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>
                      Education
                    </h3>
                    <p style={{ textIndent: 25 }}>
                      Bachelor of Science in Sports Science
                    </p>
                    <ul style={{ marginLeft: "4rem", marginBottom: "1rem" }}>
                      <li> Chulalongkorn Universitoy – 2021</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>
                      Languages
                    </h3>
                    <ul style={{ marginLeft: "2rem" }}>
                      <li>Thai: Native speaker</li>
                      <li>
                        English: Intermediate to Advanced (TOEFL ITP: 555/570)
                      </li>
                    </ul>
                    <p style={{ marginBottom: "1rem" }}></p>
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>
                      Certifications & Professional Development
                    </h3>
                    <ul style={{ marginLeft: "2rem" }}>
                      <li>
                        Currently Learning: AWS Certified Solutions Architect
                        (In Progress)
                      </li>
                    </ul>
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
                  // letterSpacing: 1.25,
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
                  // letterSpacing: 1.25,
                }}
              >
                <div
                  className="grid-container"
                  style={{
                    gridTemplateColumns: "50% 50%",
                    marginTop: "2rem",
                  }}
                >
                  <h3 style={{ fontWeight: 700 }}>Notus IT Solutions</h3>
                  <h4 style={{ fontWeight: 700 }}>JUNE 2023 - PRESENT</h4>
                  <h4 style={{ fontWeight: 700 }}>Full Stack Developer</h4>
                </div>
                <div
                  className="grid-container"
                  style={{
                    gridTemplateColumns: "50% 50%",
                    gap: "1.5rem",
                    marginTop: "2rem",
                  }}
                >
                  <div>
                    <h4 style={{ fontWeight: 700 }}>Contributions</h4>
                    <ul>
                      <li>
                        Developed and maintained functional code on both front
                        and back ends.
                      </li>
                      <li>
                        Tested and resolved bugs to ensure high-quality code.
                      </li>
                      <li>
                        Integrated third-party APIs and external libraries
                        seamlessly.
                      </li>
                      <li>
                        Worked with SQL and NoSQL databases, writing efficient
                        SQL queries and utilizing pipelines for data processing
                        in NoSQL environments.
                      </li>
                      <li>
                        Extracted and processed data from Excel files to
                        streamline workflows.
                      </li>
                      <li>
                        Generated PDF files using HTML and CSS for document
                        automation.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <h4 style={{ fontWeight: 700 }}>Contributions</h4>
                      <li>
                        Utilized cloud services such as Digital Ocean, DynamoDB,
                        AWS Amplify, and Azure Document Intelligence.
                      </li>
                      <li>
                        Authored technical documentation to support team
                        understanding and project continuity.
                      </li>
                      <li>Deployed code on servers.</li>
                      <li style={{ marginBottom: "1rem" }}>
                        Created basic workflows using Microsoft Power Automate.
                      </li>
                      <h4 style={{ fontWeight: 700 }}>Achievement</h4>
                      <li>
                        Managed the entire coding process of{" "}
                        <Link href={"/project/pr-po"}>
                          <span style={{ textDecoration: "underline" }}>
                            Purchase Order
                          </span>
                        </Link>{" "}
                        project, from initial development through to production
                        delivery.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ width: "100%", height: "35%", maxHeight: "35%" }}>
          <div
            className="flex-container-row"
            style={{
              justifyContent: "space-between",
              minHeight: "100%",
              maxHeight: "100%",
            }}
          >
            {skillGroups.map((skillGroup) => (
              <SkillGroup
                group={skillGroup.group}
                name={skillGroup.name}
                skills={skillGroup.skills}
                flipped={flipped}
                setFlipped={setFlipped}
                handleOpenSkillDetail={handleOpenSkillDetail}
                handleCloseSkillDetail={handleCloseSkillDetail}
                setSkillDetail={setSkillDetail}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
