import Image from "next/image";
import { useState } from "react";
import styles from "./CountryQuizCard.module.scss";
import { CountryQuizProps } from "../../interfaces/Country.interface";

function CountryQuizCard(country: CountryQuizProps) {
  const [isBlurred, setIsBlurred] = useState(true);
  if (!country) {
    return <div>loading</div>;
  }

  function removeBlur() {
    setIsBlurred(false);
  }

  return (
    <div className={styles.country__wrapper}>
      <div className={styles.country__flag}>
        <Image
          alt={country?.country?.name?.common}
          src={country?.country?.flags?.svg}
          className={styles.image}
          width={264}
          height={160}
        />
      </div>
      <div
        className={styles.country__info}
        onClick={removeBlur}
        style={{ filter: isBlurred ? "blur(7px)" : "none" }}
      >
        <h2 className={styles.country__name}>
          {country?.country?.name?.common}
        </h2>
      </div>
    </div>
  );
}

export default CountryQuizCard;
