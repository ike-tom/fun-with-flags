import styles from "./SearchInput.module.scss";

function SearchInput() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder="Search for a country..."
      ></input>
    </form>
  );
}

export default SearchInput;
