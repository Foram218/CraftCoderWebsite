import React from "react";
import styles from "../about/About.module.css";

const Team = (props) => {
  return (
    <div className={styles.teamCard}>
      <img src={props.img} alt="" className={styles.empImg} />
      <div className={styles.teamName}> {props.name} </div>
      <div className={styles.teamPosition}> {props.position} </div>
    </div>
  );
};

export default Team;
