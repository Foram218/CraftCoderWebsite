import React from "react";
import styles from "../about/About.module.css";
import CountUp from "react-countup";

const Ratio = (props) => {
  const { number } = props;
  return (
    <div className={styles.detailBox}>
      <CountUp
        suffix="+"
        end={number}
        duration={3}
        className={styles.number}
        enableScrollSpy={true}
      />
      <div className={styles.ratioText}> {props.title} </div>
    </div>
  );
};

export default Ratio;
