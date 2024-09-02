import { Button } from "@mui/material";
import Image from "next/image";

export default function SkillGroup({
  group,
  flipped,
  skills,
  setFlipped,
  name,
  handleCloseSkillDetail,
  handleOpenSkillDetail,
  setSkillDetail,
}) {
  return (
    <div
      className={`width-one-fifth skill-container ${
        flipped && flipped.includes(group) ? "back-flip" : ""
      } ${flipped && flipped.includes(group * -1) ? "front-flip" : ""}`}
      onClick={() => {
        if (flipped && flipped.includes(group)) {
          const filteredOut = flipped.filter((value) => value !== group);
          setFlipped([...filteredOut, group * -1]);
        } else if (flipped && flipped.includes(group * -1)) {
          const filteredOut = flipped.filter((value) => value !== group * -1);
          setFlipped([...filteredOut, group]);
        } else if (
          flipped &&
          !flipped.includes(group) &&
          !flipped.includes(group * -1)
        ) {
          setFlipped([...flipped, group]);
        } else if (!flipped) {
          setFlipped([group]);
        }
      }}
    >
      <div
        className={`${
          flipped === undefined
            ? ""
            : flipped &&
              !flipped.includes(group) &&
              flipped.includes(group * -1)
            ? "show"
            : flipped && flipped.includes(group)
            ? "hide"
            : ""
        }`}
        style={{
          textAlign: "center",
          minHeight: "100%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          // display: `${
          //   flipped === undefined || !flipped.includes(group)
          //     ? "initial"
          //     : "none"
          // }`,
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: 700 }}>{name}</h2>
        <h4 style={{ color: "#555" }}>click to see more</h4>
      </div>
      <div
        className={`grid-container justify-items-center ${
          flipped && flipped.includes(group) ? "show" : "hide"
        }`}
        style={{
          gridTemplateColumns: "50% 50%",
          display: `${
            flipped === undefined || !flipped.includes(group)
              ? "none"
              : "initial"
          }`,
        }}
      >
        {skills.map((skill) =>
          Skill({
            src: skill.src,
            alt: skill.alt,
            detail: skill.detail,
            handleOpenSkillDetail,
            setSkillDetail,
          })
        )}
      </div>
    </div>
  );
}

function Skill({ src, alt, handleOpenSkillDetail, setSkillDetail, detail }) {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        handleOpenSkillDetail();
        setSkillDetail(detail);
      }}
      disableRipple
    >
      <Image
        src={src}
        width={50}
        height={50}
        alt={alt}
        style={{ transform: "rotateY(-180deg)" }}
      />
    </Button>
  );
}
