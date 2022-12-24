import Image from "next/image";
import styles from "./Country.module.scss";

function Country() {
  return (
    <div className={styles.country__wrapper}>
      <div className={styles.country__flag}>
        <Image
          alt="leeerob"
          src="https://flagcdn.com/pe.svg"
          className={styles.image}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.country__info}>
        <h2 className={styles.country__name}>Afghanistan</h2>
        <p className={styles.country__population}>
          Population: <span>27657145</span>
        </p>
        <p className={styles.country__region}>
          Region: <span>Asia</span>
        </p>
        <p className={styles.country__capital}>
          Capital: <span>Kabul</span>
        </p>
      </div>
    </div>
  );
}

export default Country;
