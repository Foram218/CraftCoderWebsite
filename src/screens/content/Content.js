import Stack from "@mui/material/Stack";
import React from "react";
import styles from "./Content.module.css";
import contentImage from "../../assets/images/content.svg";
import mobileContentImage from "../../assets/images/mobileContent.svg";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={contentImage} alt="" className={styles.imgContent} />
      </div>
      <div className={styles.rightContainer}>
        <p className={styles.mainTitle}>EMPOWER</p>
        <Stack direction="row" className={styles.textContent}>
          <p className={styles.centerTitle}>How We</p>
          <p className={styles.lastTitle}>Do It</p>
        </Stack>
        <img
          src={mobileContentImage}
          alt=""
          className={styles.mobileContentImage}
        />
        <p className={styles.desc}>
          Craft Coders Infotech LLP offers exceptional mobile and web
          development services, employing a meticulous process. From thorough
          research and planning to elegant design and robust functionality, we
          deliver innovative solutions that surpass expectations. Trust us to
          bring your ideas to life seamlessly.
        </p>
      </div>
    </div>
  );
};

export default Content;
