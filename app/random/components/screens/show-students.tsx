'use client';

import type { Data, StateDescriptor, TransitionStateFunction } from '../../types';
import SessionAction from '../partials/session-action';
import StudentList from '../partials/student-list';
import Wrapper from '../partials/wrapper';

interface Props {
  data: Data;
  assignedStudents: number[];
  stateDescriptor: StateDescriptor;
  transitionToStateFn: TransitionStateFunction;
}

export default function ShowStudents({
  data,
  assignedStudents,
  stateDescriptor,
  transitionToStateFn
}: Props) {

  function actionHandler() {
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <Wrapper>
      <StudentList
        groups={data.groups}
        students={data.students}
        assignedStudents={assignedStudents}
      />
      <SessionAction
        handler={actionHandler}
        id={stateDescriptor.action.id}
        text={stateDescriptor.action.text}
        disabled={stateDescriptor.action.disabled}
        cycleBackground={stateDescriptor.cycleBackground}
      />
    </Wrapper>
  );
}
