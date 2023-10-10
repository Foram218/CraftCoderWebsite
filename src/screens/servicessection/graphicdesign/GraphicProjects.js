import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GraphicDesign.module.css";
import link from "../../../assets/images/link.svg";

function GraphicProjects(props) {
  const navigate = useNavigate();
  return (
    <div
      className={` ${styles.mainImgContainer} h-[300px] lg:h-[400px] aspect-square m-[34px] rounded-3xl p-2 cursor-pointer`}
    >
      {/* // <div className="h-[300px] lg:h-[400px] aspect-square m-[34px]"> */}
      <div className={styles.containerImg}>
        <img
          src={props.img}
          className="m-0 h-full w-full lg:h-[400px] rounded-3xl"
        />
        <div className=" m-2 font-medium"> {props.name} </div>
        {/* <div onClick={props.onClick}> {props.link} </div> */}
        <div onClick={props.onClick}>
          {props.link}

          <div className={styles.edit}>
            <img src={link} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicProjects;
