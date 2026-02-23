"use client";

import styles from "./Marquee.module.css";

export default function Marquee() {
  const text =
    "This site is still evolving. If something feels odd, it probably is. Expect rough edges, as some pixels are still thinking.";

  return (
    <div className="relative w-full">
      <div className={styles.mask}>
        <div className={styles.track}>
          <span className={`${styles.text}  text-lg sm:text-2xl font-medium text-neutral-400`}>
            {text}
          </span>
          <span className={`${styles.text} text-lg sm:text-2xl font-medium text-neutral-400`}>
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}