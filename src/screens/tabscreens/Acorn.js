import React from "react";
import w3 from "../../assets/images/w3.svg";
import styles from "./Easi.module.css";
import Header from "../../components/common/Header/Header";
import "../../assets/images/acorn.png";

const Acorn = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={w3} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Acorn</p>
          <p className={`${styles.text} my-5`}>
            Project URL :{" "}
            <a
              href="https://acornconnections.com/"
              style={{ color: "#032887" }}
            >
              https://acornconnections.com/
            </a>
          </p>
          <p className={`${styles.text} my-5`}>Categories : Websites</p>
          <p className={styles.text}>Tools : Adobe Photoshop</p>
        </div>
      </div>
      <img
        src={require("../../assets/images/acorn.png")}
        alt=""
        className="mt-20"
      />
    </div>
  );
};

export default Acorn;
