'use client';

import styles from '../../page.module.css';
import { type AssignedTeam, type Group, type Student } from '../../types';

interface Props {
  teams: AssignedTeam[],
  students: Student[],
  groups: Group[]
}

export default function TeamList({ teams, students, groups }: Props) {
  return (
    <div className={styles.teamGrid}>
      {teams.map((team, idx) => {
        return (
          <div key={idx} className={styles.team}>
            <div>
              <p>
              {students
                .filter((s) => team.students.includes(s.id))
                .map((student) => student.name)
                .join(", ")}
              </p>
              <p>
                <span>כמו</span> {team.concept.name} <span>אבל עבור</span>{" "}
                {team.concept.idea}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}