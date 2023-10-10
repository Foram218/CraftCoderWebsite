import React from "react";
import styles from "./CEOContent.module.css";
import CEOImage from "../../assets/images/CEO.svg";
import border from "../../assets/images/border.svg";

const CEOContent = () => {
  return (
    <div className={styles.container}>
      <img src={CEOImage} alt="" className={styles.image} />
      <div className={styles.rightContainer}>
        <div className={styles.titles}>
          <p className={styles.mainTitle}>Message From</p>
          <p className={styles.lastTitle}>CEO</p>
        </div>
        <img src={CEOImage} alt="" className={styles.Image} />

        <p className={styles.text}>
          Welcome to Craft Coders Infotech LLP! With a decade of experience, we
          deliver exceptional results and innovative solutions. Our dedicated
          team stays ahead with international insights keeping clients at the
          forefront. Trust us for unparalleled value and satisfaction. Join our
          transformative journey and elevate your business with Craft Coders
          Infotech LLP.
        </p>
        <img src={border} alt="" className={styles.border} />
        <div className={styles.name}>Keval Vasaniya</div>
        <div className={styles.qualification}>Co Founder & CEO</div>
      </div>
    </div>
  );
};

export default CEOContent;
