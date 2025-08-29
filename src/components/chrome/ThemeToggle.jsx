import React from 'react';
export default function ThemeToggle({ theme, setTheme }){
return (
<div className="fixed top-3 right-3 z-50">
<button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="px-3 py-1.5 rounded-md text-sm font-medium bg-white/20 dark:bg-white/10 backdrop-blur hover:bg-white/30 dark:hover:bg-white/20 text-slate-900 dark:text-white border border-white/30" aria-label="Toggle color mode">{theme==='dark'?'Light':'Dark'}</button>
</div>
);
}