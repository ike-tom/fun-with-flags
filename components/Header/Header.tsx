import styles from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { change } from "../../redux/theme";

function Header() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <header className={styles.header__wrapper}>
      <h1 className={styles.header}>Fun with Flags</h1>
      <div className={styles.toggleSwitch}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="checkbox"
            onChange={() => dispatch(change())}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
