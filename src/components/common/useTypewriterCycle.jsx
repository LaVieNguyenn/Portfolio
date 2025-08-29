import { useEffect, useState } from "react";

export default function useTypewriterCycle(messages, {
  typeMs = 60, eraseMs = 30, pauseMs = 1200
} = {}) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = messages[i];
    let t;

    if (!deleting && txt.length < full.length) {
      t = setTimeout(() => setTxt(full.slice(0, txt.length + 1)), typeMs);
    } else if (!deleting && txt.length === full.length) {
      t = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && txt.length > 0) {
      t = setTimeout(() => setTxt(full.slice(0, txt.length - 1)), eraseMs);
    } else {
      setDeleting(false);
      setI((i + 1) % messages.length);
    }
    return () => clearTimeout(t);
  }, [txt, deleting, i, messages, typeMs, eraseMs, pauseMs]);

  return txt;
}
