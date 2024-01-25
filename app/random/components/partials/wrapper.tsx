'use client';

import { type ReactNode } from "react";
import styles from '../../page.module.css';

export default function Wrapper({ children }: { children: ReactNode[]}) {
  const [ dataPane, ...actionsPanes ] = children;
  return (
    <>
      <div id={styles.data}>
        {dataPane}
      </div>
      <div id={styles.actions}>
        <div id={styles.actionElements}>
          {actionsPanes}
        </div>
      </div>
    </>
  );
}
