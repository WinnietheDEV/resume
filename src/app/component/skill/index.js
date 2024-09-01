import Image from "next/image";

export default function SkillGroup({
  group,
  flipped,
  skills,
  setFlipped,
  name,
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
        } else if (!flipped) {
          setFlipped([group]);
        }
      }}
    >
      <div
        style={{ textAlign: "center" }}
        className={`${
          flipped === undefined
            ? ""
            : flipped && flipped.includes(group * -1)
            ? "show"
            : "hide"
        }`}
      >
        <h2 style={{ textAlign: "center" }}>{name}</h2>
        <h3>click to see more</h3>
      </div>
      <div
        className={`grid-container justify-items-center ${
          flipped && flipped.includes(group) ? "show" : "hide"
        }`}
        style={{
          gridTemplateColumns: "50% 50%",
          display: `${flipped === undefined ? "none" : "initial"}`,
        }}
      >
        {skills.map((skill) => Skill({ src: skill.src, alt: skill.alt }))}
        {/* <Image src={jsLogo} width={75} height={75} alt="javascript logo" />
        <Image src={pythonLogo} width={75} height={75} alt="python logo" />
        <Image src={phpLogo} width={75} height={75} alt="php logo" />
        <Image src={javaLogo} width={75} height={75} alt="java logo" /> */}
      </div>
    </div>
  );
}

function Skill({ src, alt }) {
  return <Image src={src} width={75} height={75} alt={alt} />;
}
