import React from "react";
import checkbox from "../../../assets/images/checkbox.svg";
import styles from "./MobileAppServices.module.css";

const Services = (props) => {
  return (
    <div className={styles.content}>
      <img src={checkbox} alt="" className={styles.image} />
      <div className={styles.text}> {props.title} </div>
    </div>
  );
};

export default Services;
