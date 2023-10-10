import Stack from "@mui/material/Stack";
import React from "react";
import styles from "../about/About.module.css";

const SimpleSoftwareDevelop = (props) => {
  return (
    <Stack
      className={styles.box}
      direction={props.index % 2 === 1 ? "column-reverse" : "column"}
    >
      <img src={props.img} alt="" className={styles.softImage} />

      <Stack className={styles.mixContainer}>
        <div style={{ color: props.titleColor }} className={styles.mapTitle}>
          {props.title}
        </div>
        <div className={styles.mapText}> {props.desc} </div>
      </Stack>
    </Stack>
  );
};

export default SimpleSoftwareDevelop;
