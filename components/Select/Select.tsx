import React from "react";
import Select from "react-select";

import styles from "./Select.module.scss";

const options = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

function CountrySelector() {
  return (
    <Select
      className={styles.select}
      options={options}
      placeholder="Filter by Region"
    />
  );
}

export default CountrySelector;
