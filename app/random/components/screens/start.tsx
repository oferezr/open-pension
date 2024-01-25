'use client';

import type { StateDescriptor, TransitionStateFunction } from '../../types';
import SessionAction from '../partials/session-action';

interface Props {
  stateDescriptor: StateDescriptor;
  transitionToStateFn: TransitionStateFunction;
}

export default function Start({ stateDescriptor, transitionToStateFn }: Props) {

  function actionHandler() {
    transitionToStateFn(stateDescriptor.next);
  }

  return (
    <div className="center align-center">
      <SessionAction
        handler={actionHandler}
        id={stateDescriptor.action.id}
        text={stateDescriptor.action.text}
        disabled={stateDescriptor.action.disabled}
        cycleBackground={stateDescriptor.cycleBackground}
      />
    </div>
  );
}
