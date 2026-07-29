// Day 2 (Beginner) — same task as 2026/07/30/practice.html, but here you
// write real import-capable code in a real Node.js project.

function SkillBadge(props) {
  // TODO 1: destructure "label" from props and render it
  // inside a <span> (feel free to add inline style)
  return null;
}

function SkillList({ skills }) {
  return (
    <div>
      {/* TODO 2: map "skills" to one <SkillBadge> per item */}
    </div>
  );
}

export default function Practice() {
  const skills = ["JSX", "Components", "Props"];

  return (
    <div>
      <h2>My Skills</h2>
      <SkillList skills={skills} />
    </div>
  );
}
