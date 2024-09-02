import {
  clinicContribution,
  labContribution,
  trackingContribution,
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
            Manufacturing Real Time Data Tracking
          </h1>
          <h2 style={{ marginBottom: "1rem", fontWeight: 700 }}>Overview</h2>
          <Grid2 container sx={{ marginBottom: "2rem" }}>
            <Grid2 size={{ md: 6, xs: 12 }}>
              <p style={{ textIndent: 25 }}>
                This manufacturing real-time data tracking system collects data
                from machines and updates it in Amazon DynamoDB. The application
                uses WebSockets to provide real-time updates. Additionally, the
                application features a dashboard that allows users to drag and
                arrange information according to their preferences, presenting
                data in various graph formats for enhanced visualization and
                analysis.
              </p>
            </Grid2>
            <Grid2 size={{ md: 6, xs: 12 }}>
              {/* <Image src={prPoWorkFlow} width={500} height={150} /> */}
            </Grid2>
          </Grid2>
          <h2 style={{ marginBottom: "2rem", fontWeight: 700 }}>
            Contributions
          </h2>
          {trackingContribution.map((contribution) => (
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
