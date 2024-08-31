import Image from "next/image";
import styles from "./page.module.css";
import { Box, Card, Grid2, Stack } from "@mui/material";
import prPoIcon from "../../../public/project/pr-po/pr-po-icon.png";
import labIcon from "../../../public/project/lab/lab-icon.webp";
import clinicIcon from "../../../public/project/clinic/dental-icon.png";
import trackingIcon from "../../../public/project/tracking/tracking-icon.webp";
import Link from "next/link";

export default function Project() {
  return (
    <main className={styles.main}>
      <div className="content-container" style={{ minHeight: "100%" }}>
        <Grid2 container minHeight={"80vh"} spacing={2}>
          <Grid2
            size={{ xs: 6, md: 6 }}
            maxHeight={"50%"}
            className={"card-container"}
          >
            <Link href={"/project/pr-po"}>
              <Card className="card">
                <Stack
                  style={{ height: "70%" }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image src={prPoIcon} width={200} height={150} />
                </Stack>
                <div>
                  <h2 style={{ textAlign: "center" }}>
                    Purchase Order Process
                  </h2>
                </div>
              </Card>
            </Link>
          </Grid2>
          <Grid2
            size={{ xs: 6, md: 6 }}
            maxHeight={"50%"}
            className={"card-container"}
          >
            <Link href={"/project/lab"}>
              <Card className="card">
                <Stack
                  style={{ height: "70%" }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image src={labIcon} width={200} height={150} />
                </Stack>
                <div>
                  <Image />
                  <h2 style={{ textAlign: "center" }}>
                    Medical Laboratory Workflow
                  </h2>
                </div>
              </Card>
            </Link>
          </Grid2>
          <Grid2
            size={{ xs: 6, md: 6 }}
            maxHeight={"50%"}
            className={"card-container"}
          >
            <Link href={"/project/clinic"}>
              <Card className="card">
                <Stack
                  style={{ height: "70%" }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image src={clinicIcon} width={200} height={150} />
                </Stack>
                <div>
                  <h2 style={{ textAlign: "center" }}>
                    Dental Clinic Management
                  </h2>
                </div>
              </Card>
            </Link>
          </Grid2>
          <Grid2
            size={{ xs: 6, md: 6 }}
            maxHeight={"50%"}
            className={"card-container"}
          >
            <Link href={"/project/tracking"}>
              <Card className="card">
                <Stack
                  style={{ height: "70%" }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image src={trackingIcon} width={200} height={150} />
                </Stack>
                <div>
                  <h2 style={{ textAlign: "center" }}>
                    Manufacturing Real Time Data Tracking
                  </h2>
                </div>
              </Card>
            </Link>
          </Grid2>
        </Grid2>
      </div>
    </main>
  );
}
