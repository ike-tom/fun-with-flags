import styles from "./AnswerButton.module.scss";

interface AnswerButtonProps {
  name: string;
  onClick?: () => void;
}

function AnswerButton(props: AnswerButtonProps) {
  const { name, onClick } = props;
  return (
    <button
      className={`${styles.answerButton} ${
        name === "yes" ? styles.yesButton : styles.noButton
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default AnswerButton;
