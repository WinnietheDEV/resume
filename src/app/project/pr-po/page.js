import Image from "next/image";
import styles from "./page.module.css";
import prPoWorkFlow from "../../../../public/project/pr-po/pr-po-workflow.png";
import { Grid2 } from "@mui/material";
import { prPoContributions } from "@/app/data/project/contribution";
import Contribution from "@/app/component/project/Contribution";

export default function PrPoProject() {
  return (
    <main className={styles.main}>
      <div className="content-container" style={{ overflowY: "scroll" }}>
        <h1 style={{ marginBottom: "2rem", fontWeight: 700 }}>
          Purchase Order Process
        </h1>
        <h2 style={{ marginBottom: "1rem", fontWeight: 700 }}>Overview</h2>
        <Grid2 container sx={{ marginBottom: "2rem" }}>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <p style={{ textIndent: 25 }}>
              This project focuses on digitizing the company’s purchase order
              workflow. It includes several modules: user management, supplier
              management, department management, purchase requests, and purchase
              orders, with purchase requests and purchase orders being the core
              features. In addition to these modules, the project also features
              data import from Excel files, PDF generation from HTML and CSS,
              user signature storage, and graphical data display.
            </p>
          </Grid2>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Image src={prPoWorkFlow} width={500} height={150} />
          </Grid2>
        </Grid2>
        <h2 style={{ marginBottom: "2rem", fontWeight: 700 }}>Contributions</h2>
        {prPoContributions.map((contribution) => (
          <Contribution
            name={contribution.name}
            detail={contribution.detail}
            exampleImages={contribution.exampleImages}
          />
        ))}
      </div>
    </main>
  );
}
