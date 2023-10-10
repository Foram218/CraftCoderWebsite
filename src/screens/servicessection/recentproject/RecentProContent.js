import React from "react";
import styles from "./RecentProject.module.css";
import { useMediaQuery } from "@mui/material";

const RecentProContent = (props) => {
  const matches = useMediaQuery(`(max-width:768px)`);
  return (
    <div
      className={`w-full md:w-[80%] items-center`}
      style={{
        display: "flex",
        flexDirection: matches
          ? "column"
          : props.index % 2 === 1
          ? "row-reverse"
          : "row",
      }}
    >
      <img src={props.img} alt="" className={styles.image} />
      <div
        className="flex flex-col justify-center max-md:items-center"
        style={{
          paddingLeft: !matches ? (props.index % 2 === 1 ? 0 : 20) : 0,
        }}
      >
        <div className={styles.title}> {props.title} </div>
        <div className={styles.desc}> {props.desc} </div>
      </div>
    </div>
  );
};

export default RecentProContent;
