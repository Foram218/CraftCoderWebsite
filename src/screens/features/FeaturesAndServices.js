import React from "react";
import styles from "./FeaturesAndServices.module.css";

const FeaturesAndServices = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div>
          <img src={props.frame} className={styles.image} />
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.titleContent}> {props.title} </div>
          <div className={styles.text}> {props.desc} </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndServices;
