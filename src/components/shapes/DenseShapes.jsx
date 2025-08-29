import React, { useMemo } from 'react';

/** Gaussian helper (Box–Muller) */
const gaussian = (mean = 0.5, sd = 0.15) => {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return Math.min(1, Math.max(0, mean + sd * z));
};

export default function DenseShapes({
  count = 120,
  seed = 1,
  // bias='none' | 'left' | 'right' | 'center'
  bias = 'none', // <— NEW
  className = '',
}) {
  // simple seeded RNG
  const rand = (() => {
    let s = seed || 1;
    return () => (s = (s * 9301 + 49297) % 233280) / 233280;
  })();

  const biasCfg = {
    none:  { mx: 0.5, sx: 0.3, my: 0.5, sy: 0.28 },
    left:  { mx: 0.22, sx: 0.15, my: 0.5, sy: 0.25 }, // ~giữa-trái
    right: { mx: 0.78, sx: 0.15, my: 0.5, sy: 0.25 },
    center:{ mx: 0.5,  sx: 0.18, my: 0.5, sy: 0.18 },
  }[bias] || { mx: 0.5, sx: 0.3, my: 0.5, sy: 0.28 };

  const items = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // vị trí ngẫu nhiên có bias
      const x = gaussian(biasCfg.mx, biasCfg.sx);
      const y = gaussian(biasCfg.my, biasCfg.sy);
      const size = 16 + Math.floor(rand() * 56);
      const rotate = Math.floor(rand() * 360);
      const speed = 14 + Math.floor(rand() * 12); // chậm liên tục
      const shape = ['circle','square','hex','cross'][Math.floor(rand()*4)];
      const color = ['#5b9bd5','#50c878','#f6ad55','#ed64a6','#a78bfa','#f87171'][Math.floor(rand()*6)];
      return { id: i, x, y, size, rotate, speed, shape, color };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, seed, bias]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map(it => (
        <div
          key={it.id}
          className="absolute will-change-transform"
          style={{
            left: `calc(${Math.round(it.x*100)}% - ${it.size/2}px)`,
            top:  `calc(${Math.round(it.y*100)}% - ${it.size/2}px)`,
            width: it.size, height: it.size,
            transform: `rotate(${it.rotate}deg)`,
            animation: `shapeFloat ${it.speed}s ease-in-out infinite alternate`,
          }}
        >
          {it.shape === 'circle' && (
            <div style={{border:`3px solid ${it.color}`, borderRadius:'9999px', width:'100%', height:'100%'}} />
          )}
          {it.shape === 'square' && (
            <div style={{border:`3px solid ${it.color}`, borderRadius:'8px', width:'100%', height:'100%'}} />
          )}
          {it.shape === 'hex' && (
            <div style={{
              border:`3px solid ${it.color}`,
              width:'100%', height:'100%', clipPath:'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)'
            }} />
          )}
          {it.shape === 'cross' && (
            <div style={{position:'relative', width:'100%', height:'100%'}}>
              <div style={{position:'absolute', inset:'calc(50% - 1.5px) 0 auto 0', height:'3px', background:it.color}} />
              <div style={{position:'absolute', inset:'0 calc(50% - 1.5px) 0 auto', width:'3px', background:it.color}} />
            </div>
          )}
        </div>
      ))}
      {/* keyframes (in globals.css đã có, để dự phòng inline luôn) */}
      <style>{`
        @keyframes shapeFloat {
          from { transform: translateY(-8px) rotate(0deg); opacity:.9; }
          to   { transform: translateY(8px)  rotate(5deg); opacity:.9; }
        }
      `}</style>
    </div>
  );
}
