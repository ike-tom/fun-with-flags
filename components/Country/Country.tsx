import Image from "next/image";
import styles from "./Country.module.scss";
import { CountryQuizProps } from "../../interfaces/Country.interface";

function Country(country: CountryQuizProps) {
  // const { name, flags} = country?.country
  // console.log(name?.common)

  if (!country) {
    return <div>loading</div>;
  }
  // console.log(country?.country?.name?.common);
  return (
    <div className={styles.country__wrapper}>
      <div className={styles.country__flag}>
        <Image
          alt={country?.country?.name?.common}
          src="https://flagcdn.com/pe.svg"
          className={styles.image}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.country__info}>
        <h2 className={styles.country__name}>
          {country?.country?.name?.common}
        </h2>
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
