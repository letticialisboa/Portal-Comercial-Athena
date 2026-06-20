"use client";

import { useEffect, useState } from "react";

export default function TypeEffect({
  text,
  speedMs = 45,
  startDelayMs = 0,
  className = "",
  onDone,
}: {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  className?: string;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          onDone?.();
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className={className}>
      {shown}
      <span className="typing-caret">|</span>
    </span>
  );
}
