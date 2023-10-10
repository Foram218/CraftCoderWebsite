import Stack from "@mui/material/Stack";
import React from "react";
import styles from "../career/Career.module.css";

const Jobs = (props) => {
  return (
    <div className={styles.box}>
      <img src={props.img} alt="" className={styles.image} />
      <Stack direction="column" marginLeft={1}>
        <div className={styles.title}> {props.title} </div>
        <div className={styles.text}> {props.text} </div>
      </Stack>
    </div>
  );
};

export default Jobs;
