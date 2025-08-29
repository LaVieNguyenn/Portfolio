import React from 'react';
import { motion } from 'framer-motion';
export default function Reveal({ children, delay=0 }){
return (
<motion.div initial={{y:26, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{amount:.4, once:true}} transition={{duration:.6, ease:'easeOut', delay}}>
{children}
</motion.div>
);
}