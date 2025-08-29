import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export default function TypewriterCycle({ phrases=["Developer", ".NET Engineer"], speed=80, hold=1100, fade=600, className='' }){
const [idx,setIdx]=useState(0); const [typed,setTyped]=useState(0); const [fading,setFading]=useState(false);
useEffect(()=>{ if(fading) return; const cur=phrases[idx]; if(typed<cur.length){ const t=setTimeout(()=>setTyped(n=>n+1),speed); return ()=>clearTimeout(t);} const h=setTimeout(()=>setFading(true),hold); return ()=>clearTimeout(h); },[typed,fading,idx,phrases,speed,hold]);
useEffect(()=>{ if(!fading) return; const sw=setTimeout(()=>{ setIdx(i=>(i+1)%phrases.length); setTyped(0); setFading(false); }, fade); return ()=>clearTimeout(sw); },[fading, fade, phrases.length]);
return (
<div className={`inline-flex items-baseline ${className}`}>
<motion.span key={idx} animate={{opacity:fading?0:1}} transition={{duration:fade/1000}} className="whitespace-pre">{phrases[idx].slice(0, typed)}</motion.span>
<span className="ml-1 opacity-70 animate-pulse">|</span>
</div>
);
}