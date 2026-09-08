"use client";
import { useEffect } from "react";

// Sign up at behold.so, connect @culekart, then replace this with your Feed ID
const BEHOLD_FEED_ID = "YOUR_BEHOLD_FEED_ID";

export default function InstagramFeed() {
  useEffect(() => {
    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    document.head.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<behold-widget feed-id="${BEHOLD_FEED_ID}"></behold-widget>`,
      }}
    />
  );
}
