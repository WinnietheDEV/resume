import styles from "./page.module.css";
import { Grid2 } from "@mui/material";
import { projectList } from "../data/project/projectList";
import ProjectList from "../component/project/ProjectList";

export default function Project() {
  return (
    <main className={styles.main}>
      <div className="content-container" style={{ minHeight: "100%" }}>
        <Grid2 container minHeight={"100%"} spacing={2}>
          {projectList.map((project) => (
            <ProjectList
              name={project.name}
              image={project.image}
              path={project.path}
            />
          ))}
        </Grid2>
      </div>
    </main>
  );
}
