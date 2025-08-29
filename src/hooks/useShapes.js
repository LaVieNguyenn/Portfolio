import { useMemo } from 'react';
const COLORS = ['#ff914d','#ff5a5f','#4ea0ff','#28d17c','#7c5cff','#ffd84d','#9aa3b2','#ffffff'];
const TYPES = ['square','ring','hex','x'];
const pick = (arr, rnd) => arr[Math.floor(rnd() * arr.length)];
function mulberry32(seed){ let t=seed+0x6D2B79F5; return function(){ t=Math.imul(t^(t>>>15),t|1); t^=t+Math.imul(t^(t>>>7),t|61); return ((t^(t>>>14))>>>0)/4294967296; }; }


export default function useShapes({ seed=1, count=90, sizeMin=16, sizeMax=84, opacityMin=.35, opacityMax=.9 }){
return useMemo(()=>{
const rnd = mulberry32(seed);
return Array.from({length:count}).map((_,i)=>{
const type = pick(TYPES, rnd);
const size = Math.floor(sizeMin + rnd()*(sizeMax-sizeMin));
const left = Math.floor(rnd()*100);
const top = Math.floor(rnd()*100);
const color = pick(COLORS, rnd);
const strokeWidth = Math.max(2, Math.round(size/14));
const ampX = 6 + Math.floor(rnd()*16);
const ampY = 6 + Math.floor(rnd()*18);
const rot = Math.floor(rnd()*18)-9;
const delay = +(rnd()*2.2).toFixed(2);
const duration = 16 + Math.floor(rnd()*14);
const opacity = +(opacityMin + rnd()*(opacityMax-opacityMin)).toFixed(2);
return { id:i, type, size, left, top, color, strokeWidth, ampX, ampY, rot, delay, duration, opacity };
});
},[seed,count,sizeMin,sizeMax,opacityMin,opacityMax]);
}