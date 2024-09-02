import { labContribution } from "@/app/data/project/contribution";
import styles from "./page.module.css";
import Contribution from "@/app/component/project/Contribution";
import { Grid2 } from "@mui/material";

export default function LabProject() {
  return (
    <main className={styles.main}>
      <div className="content-container">
        <div className="content-container" style={{ overflowY: "scroll" }}>
          <h1 style={{ marginBottom: "2rem", fontWeight: 700 }}>
            Medical Laboratory Workflow
          </h1>
          <h2 style={{ marginBottom: "1rem", fontWeight: 700 }}>Overview</h2>
          <Grid2 container sx={{ marginBottom: "2rem" }}>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <p style={{ textIndent: 25 }}>
                This hospital management project is built on a microservice
                architecture and covers everything from patient registration and
                appointment scheduling to stock management, workflow tracking
                (such as obtaining lab results from blood tests or radiology),
                and payment processing. My responsibilities include developing
                the item master and lab management modules, integrating a
                barcode reader device into the project, and generating seed data
                from Excel files.
              </p>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              {/* <Image src={prPoWorkFlow} width={500} height={150} /> */}
            </Grid2>
          </Grid2>
          <h2 style={{ marginBottom: "2rem", fontWeight: 700 }}>
            Contributions
          </h2>
          {labContribution.map((contribution) => (
            <Contribution
              name={contribution.name}
              detail={contribution.detail}
              exampleImages={contribution.exampleImages}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
