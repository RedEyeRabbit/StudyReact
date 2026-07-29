function SkillBadge({ label }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: "#eef",
        borderRadius: 999,
        padding: "4px 12px",
        margin: "4px",
        fontSize: 14,
      }}
    >
      {label}
    </span>
  );
}

function SkillList({ skills }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <SkillBadge key={`skill-${index}`} label={skill} />
      ))}
    </div>
  );
}

export default function Solution() {
  const skills = ["JSX", "Components", "Props"];

  return (
    <div>
      <h2>My Skills</h2>
      <SkillList skills={skills} />
    </div>
  );
}
