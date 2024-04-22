import React from "react";
import styles from "./NumberCard.module.css"

function NumberCard({ number, title }) {
  return (
    <div className={styles.card}>
      <h3>{number}</h3>
      <h3>{title}</h3>
    </div>
  );
}

export default NumberCard;
