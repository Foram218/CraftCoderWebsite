import React from "react";
import brochure2 from "../../assets/images/brochure2.svg";
import styles from "./Easi.module.css";
import Header from "../../components/common/Header/Header";
import "../../assets/images/brochure.png";

const Brochure = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={brochure2} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Brochure</p>
          <p className={`${styles.text} my-5`}>Categories : Brochure</p>
          <p className={styles.text}>Tools : Figma</p>
        </div>
      </div>
      <img
        src={require("../../assets/images/brochure.png")}
        alt=""
        className="mt-20"
      />
    </div>
  );
};

export default Brochure;
