function PriorityBadge({ level }) {
  // TODO: pick a background color based on "level"
  // ("low" -> gray, "medium" -> orange, "high" -> red)
  // and render "level" as text inside a styled <span>
  return null;
}

export default function Practice() {
  return (
    <div>
      <PriorityBadge level="low" />{" "}
      <PriorityBadge level="medium" />{" "}
      <PriorityBadge level="high" />
    </div>
  );
}
