import { Grid2, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList({ path, image, name }) {
  return (
    <Grid2 size={{ xs: 6, md: 6 }} maxHeight={"50%"} sx={{ height: "100%" }}>
      <Link href={path}>
        <div className="card-container">
          <Stack
            style={{ height: "70%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image src={image} width={200} height={150} />
          </Stack>
          <div>
            <h2 style={{ textAlign: "center" }}>{name}</h2>
          </div>
        </div>
      </Link>
    </Grid2>
  );
}
