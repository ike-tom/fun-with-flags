import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header__wrapper}>
      <h1 className={styles.header}>Fun with Flags</h1>
      <div className={styles.toggleSwitch}>
        <label className={styles.label}>
          <input className={styles.input} type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
