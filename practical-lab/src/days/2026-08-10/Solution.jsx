function PriorityBadge({ level }) {
  const colors = {
    low: "#9e9e9e",
    medium: "#f57c00",
    high: "#d32f2f",
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: 999,
        color: "white",
        background: colors[level],
        fontSize: 14,
      }}
    >
      {level}
    </span>
  );
}

export default function Solution() {
  return (
    <div>
      <PriorityBadge level="low" />{" "}
      <PriorityBadge level="medium" />{" "}
      <PriorityBadge level="high" />
    </div>
  );
}
