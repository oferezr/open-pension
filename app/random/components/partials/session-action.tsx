import { FormEvent } from 'react';
import {
  BACKGROUND_COLORS,
  BUTTON_DISABLED_ACTION_TEXT,
  DEFAULT_BACKGROUND_COLOR,
  STATE_TRANSITION_ANIMATION_DURATION
} from '../../constants';
import { selectBackGroundColor, selectTransitionColors } from '../../logic';
import styles from '../../page.module.css';

interface Props {
  id: string;
  text: string;
  handler: (event: FormEvent) => void;
  disabled: boolean;
  cycleBackground: true | false | null;
}

function setBackgroundColor(cycleBackground: true | false | null) {
  const target = document.querySelector("body") as HTMLElement;
  const targetColor = cycleBackground ? selectBackGroundColor(BACKGROUND_COLORS): DEFAULT_BACKGROUND_COLOR;
  const transitionColors = selectTransitionColors(BACKGROUND_COLORS);
  const keyFrames = transitionColors.map(color => { return { backgroundColor: color }  });
  const options = { duration: STATE_TRANSITION_ANIMATION_DURATION, easing: "linear" };
  target.animate(keyFrames, options);
  target.style.setProperty("background-color", targetColor);
}

export default function SessionAction({ id, text, handler, disabled, cycleBackground }: Props) {
  const buttonText = disabled ? BUTTON_DISABLED_ACTION_TEXT : text;

  function actionHandler(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (cycleBackground !== null) setBackgroundColor(cycleBackground);
    handler(event);
  }

  return (
    <div id={id}>
      <button className={styles.actionButton} id={id} onClick={actionHandler} disabled={disabled}>
        {buttonText}
      </button>
    </div>
  );
}