import React from "react";
export default React.memo(function ShapeSVG({
  type,
  size = 48,
  stroke = "#fff",
  strokeWidth = 4,
  opacity = 1,
}) {
  const s = size;
  switch (type) {
    case "square":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" style={{ opacity }}>
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "ring":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" style={{ opacity }}>
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "hex":
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" style={{ opacity }}>
          <polygon
            points="50,5 93,28 93,72 50,95 7,72 7,28"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </svg>
      );
    case "x":
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" style={{ opacity }}>
          <line
            x1="20"
            y1="20"
            x2="80"
            y2="80"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <line
            x1="80"
            y1="20"
            x2="20"
            y2="80"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </svg>
      );
  }
});
