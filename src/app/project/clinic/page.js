import {
  clinicContribution,
  labContribution,
} from "@/app/data/project/contribution";
import styles from "./page.module.css";
import Contribution from "@/app/component/project/Contribution";
import { Grid2 } from "@mui/material";

export default function LabProject() {
  return (
    <main className={styles.main}>
      <div className="content-container">
        <div className="content-container" style={{ overflowY: "scroll" }}>
          <h1 style={{ marginBottom: "2rem", fontWeight: 700 }}>
            Dental Clinic Management
          </h1>
          <h2 style={{ marginBottom: "1rem", fontWeight: 700 }}>Overview</h2>
          <Grid2 container sx={{ marginBottom: "2rem" }}>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <p style={{ textIndent: 25 }}>
                This dental clinic management project encompasses several key
                modules, including staff management, patient records, stock
                control, payment processing, and treatment tracking. The system
                is designed to streamline clinic operations, enhance efficiency,
                and improve overall patient care. As this is a handover project,
                my responsibilities include fixing bugs, improving existing
                code, and developing new features to enhance the system's
                functionality and performance.
              </p>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              {/* <Image src={prPoWorkFlow} width={500} height={150} /> */}
            </Grid2>
          </Grid2>
          <h2 style={{ marginBottom: "2rem", fontWeight: 700 }}>
            Contributions
          </h2>
          {clinicContribution.map((contribution) => (
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
