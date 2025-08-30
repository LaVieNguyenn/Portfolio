import React from "react";
import ShapeSVG from "./ShapeSVG.jsx";
export default React.memo(function FloatingShape({ spec }) {
  return (
    <div
      className="absolute shape-float"
      style={{
        left: `${spec.left}%`,
        top: `${spec.top}%`,
        "--dx": `${spec.ampX}px`,
        "--dy": `${spec.ampY}px`,
        "--rot": `${spec.rot}deg`,
        "--dur": `${spec.duration}s`,
        animationDelay: `${spec.delay}s`,
      }}
    >
      <ShapeSVG
        type={spec.type}
        size={spec.size}
        stroke={spec.color}
        strokeWidth={spec.strokeWidth}
        opacity={spec.opacity}
      />
    </div>
  );
});
