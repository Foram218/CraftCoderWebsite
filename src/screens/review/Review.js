import React from "react";
import styles from "./Review.module.css";
import clutchImage from "../../assets/images/clutch.svg";
import googleImage from "../../assets/images/google.svg";

const Review = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titles}>
        <p className={styles.mainTitle}>EMPOWER</p>
        <div className={styles.both}>
          <p className={styles.centerTitle}>Read our</p>
          <p className={styles.lastTitle}>reviews on</p>
        </div>
      </div>
      <div className={styles.rating}>
        <div className={styles.clutchRating}>
          <a href="https://clutch.co/profile/craft-coders-infotech-llp#highlights">
            <img src={clutchImage} alt="" className={styles.clutch} />
          </a>
        </div>
        <a href="https://www.google.com/search?q=craftcodersinfotech&oq=craftcodersinfotech&aqs=chrome.0.69i59j46i10i175i199i512j69i60j69i65l2j69i60.7574j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3be04f27e340a7d1:0x265386f316def20b,1,,,,">
          <img src={googleImage} alt="" className={styles.google} />
        </a>
      </div>
    </div>
  );
};

export default Review;
