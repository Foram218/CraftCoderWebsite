import React from "react";
import styles from "./Platform.module.css";

function Technologies(props) {
  return (
    <div className={styles.main}>
      <div className={styles.imagee}>
        <img
          src={props.img}
          className={`${styles.mainImage} h-[65px] md:h-[120px]  w-[35px] lg:h-[220px]  lg:w-[150px] md:w-[120px] max-md:right-0  max-w-[initial] `}
        />
      </div>
      <div className={styles.name}> {props.name} </div>
    </div>
  );
}

export default Technologies;
