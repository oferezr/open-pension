'use client';

import { AssignedTeam, Data, SetAssignedStudents, SetTeams, StateDescriptor, TransitionStateFunction } from '../../types';
import SessionAction from '../partials/session-action';
import TeamList from '../partials/team-list';
import Wrapper from '../partials/wrapper';

interface Props {
  data: Data;
  teams: AssignedTeam[];
  stateDescriptor: StateDescriptor;
  setTeams: SetTeams;
  setAssignedStudents: SetAssignedStudents;
  transitionToStateFn: TransitionStateFunction;
}

export default function ShowTeams({
  data,
  teams,
  stateDescriptor,
  setTeams,
  setAssignedStudents,
  transitionToStateFn,
}: Props) {

  function actionHandler() {
    setAssignedStudents([]);
    setTeams([]);
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <Wrapper>
      <TeamList
        teams={teams}
        groups={data.groups}
        students={data.students}
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
