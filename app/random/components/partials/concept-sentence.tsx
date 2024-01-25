'use client';

import styles from '../../page.module.css';
import { type Concept } from "../../types";

interface Props {
  concept: Concept
}

export default function ConceptSentence({ concept }: Props) {
  return (

        <div className={styles.concept}>
          כמו <span>{concept.name}</span>
          <br />
          אבל עבור <span>{concept.idea}</span>
        </div>
  );
}