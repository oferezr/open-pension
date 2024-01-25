import type { Dispatch, SetStateAction } from "react";

export interface Concept {
  name: string;
  idea: string;
}

export interface Group {
  id: number;
  name: string;
}

export interface Student {
  id: number;
  name: string;
  group: Group;
}

export interface Team {
  id: number;
}

export interface AssignedTeam {
  concept: Concept;
  students: number[];
}

export interface Distribution {
  developerCount: number;
  designerCount: number;
}

export interface PromptCompany {
  id: number;
  name: string;
}

export interface PromptIdea {
  id: number;
  description: string;
}

export interface Data {
  groups: Group[];
  students: Student[];
  teams: Team[];
  distribution: Distribution[];
  prompt_companies: PromptCompany[];
  prompt_ideas: PromptIdea[];
}

export interface StateDescriptor {
  action: {
    id: string;
    text: string;
    disabled: boolean;
  };
  cycleBackground: boolean;
  next: number;
}

export type SetTeams = Dispatch<SetStateAction<[] | AssignedTeam[]>>;

export type SetAssignedStudents = Dispatch<SetStateAction<[] | number[]>>;

export type SetCurrentTeamMembers = Dispatch<SetStateAction<[] | number[]>>;

export type TransitionStateFunction = (state: number) => void;
