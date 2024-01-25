'use client';

import styles from '../../page.module.css';
import { type Concept, type Group, type Student } from '../../types';
import ConceptSentence from './concept-sentence';

interface Props {
  groups: Group[];
  students: Student[];
  assignedStudents: number[];
  currentTeamMembers?: number[];
  currentConcept?: Concept;
}

export default function StudentList({
  groups,
  students,
  currentTeamMembers = [],
  assignedStudents,
  currentConcept,
}: Props) {
  const currentTeamSelected = currentTeamMembers.length > 0;
  return (
    <>
      <div className={styles.studentGrid}>
        {groups.map((group) => {
          return (
            <div key={group.id}>
              <h1 className={styles.groupName}>{group.name}</h1>
              <div>
                {students.filter((student) => student.group.id === group.id).map((student) => {
                  const studentInCurrentTeam = currentTeamMembers.includes(student.id);
                  const studentHide = currentTeamSelected && !studentInCurrentTeam;
                  const studentHasBeenAssigned = assignedStudents.includes(student.id);
                  let className = `${styles.student}`;
                  if (studentHide) className = `${className} ${styles.hide}`;
                  if (studentInCurrentTeam) className = `${className} ${styles.currentTeamMember}`;
                  if (studentHasBeenAssigned) className = `${className} ${styles.assignedStudent}`;
                  return (
                    <div key={student.id} className={className}>
                      <div>{student.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {currentConcept ? <ConceptSentence concept={currentConcept} /> : null}
      </div>
    </>
  );
}