import { Grid2 } from "@mui/material";
import Image from "next/image";

export default function Contribution({ name, detail, exampleImages }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h4 style={{ marginBottom: "1rem", fontWeight: 700 }}>{name}</h4>
      <p style={{ textIndent: 25, marginBottom: "1rem" }}>{detail}</p>
      {exampleImages && (
        <Grid2 container>
          {exampleImages.map((image) => ExampleImage({ src: image }))}
        </Grid2>
      )}
    </div>
  );
}

function ExampleImage({ src }) {
  return (
    <Grid2
      size={{ md: 6, xs: 12, lg: 6 }}
      display={"flex"}
      justifyContent={"center"}
    >
      <Image src={src} width={400} height={250} />
    </Grid2>
  );
}
