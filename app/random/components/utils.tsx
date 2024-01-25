import { STATE_DESCRIPTORS } from '../constants';
import type { AssignedTeam, Data, SetAssignedStudents, SetCurrentTeamMembers, SetTeams, TransitionStateFunction } from '../types';
import Message from './partials/message';
import SelectConcept from './screens/select-concept';
import SelectStudents from './screens/select-students';
import ShowStudents from './screens/show-students';
import ShowTeams from './screens/show-teams';
import Start from './screens/start';

export function getCurrentComponent(
  currentStateId: number,
  data: Data,
  teams: AssignedTeam[],
  setTeams: SetTeams,
  assignedStudents: number[],
  setAssignedStudents: SetAssignedStudents,
  currentTeamMembers: number[],
  setCurrentTeamMembers: SetCurrentTeamMembers,
  transitionToStateFn: TransitionStateFunction,
) {

  const stateDescriptor = STATE_DESCRIPTORS[currentStateId];

  switch (currentStateId) {
    case 0: {
      return <Start
        stateDescriptor={stateDescriptor}
        transitionToStateFn={transitionToStateFn}
      />;
    }
    case 1: {
      return <ShowStudents
        data={data}
        assignedStudents={assignedStudents}
        stateDescriptor={stateDescriptor}
        transitionToStateFn={transitionToStateFn}
      />
    }
    case 2: {
      return <SelectStudents
        data={data}
        teams={teams}
        assignedStudents={assignedStudents}
        currentTeamMembers={currentTeamMembers}
        stateDescriptor={stateDescriptor}
        setCurrentTeamMembers={setCurrentTeamMembers}
        transitionToStateFn={transitionToStateFn}
      />
    }
    case 3: {
      return <SelectConcept
        data={data}
        teams={teams}
        assignedStudents={assignedStudents}
        currentTeamMembers={currentTeamMembers}
        stateDescriptor={stateDescriptor}
        setTeams={setTeams}
        setCurrentTeamMembers={setCurrentTeamMembers}
        setAssignedStudents={setAssignedStudents}
        transitionToStateFn={transitionToStateFn}
      />
    }
    case 4: {
      return <ShowTeams
        data={data}
        teams={teams}
        stateDescriptor={stateDescriptor}
        setTeams={setTeams}
        setAssignedStudents={setAssignedStudents}
        transitionToStateFn={transitionToStateFn}
      />
    }
    default: {
      return <Message content="Something went wrong. Reload the application to start again." />;
    }
  }
}