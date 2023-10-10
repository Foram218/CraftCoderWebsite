import React from "react";
import styles from "./ClientStories.module.css";
import Verify from "../../assets/images/verify.svg";
import Stack from "@mui/material/Stack";

const ClientStories = (props) => {
  return (
    <div className={styles.main}>
      <img src={props.clientBox} alt="" className={styles.clientBox} />
      <div className={styles.subContent}>
        <img src={props.img} alt="" className={styles.image} />
        <div className={styles.desc}> "{props.desc}" </div>
        <div className={styles.desc}> {props.content} </div>
        <Stack direction="row" spacing={2}>
          <img src={Verify} alt="" />
          <p className={styles.verified}>Verified Review</p>
        </Stack>
      </div>
    </div>
  );
};

export default ClientStories;
