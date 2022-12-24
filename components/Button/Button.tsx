import styles from "./Button.module.scss";
import Link from "next/link";

interface ButtonProps {
  name: string;
  link: string;
}

function Button(props: ButtonProps) {
  const { name, link } = props;
  return (
    <button className={styles.button}>
      <Link href={link}>{name}</Link>
    </button>
  );
}

export default Button;
