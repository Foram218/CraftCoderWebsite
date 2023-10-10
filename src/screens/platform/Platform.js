import React from "react";
import styles from "./Platform.module.css";
import Technologies from "./Technologies";
import MySQL from "../../assets/images/mySQL.svg";
import MSSQL from "../../assets/images/msSQL.svg";
import MongoDB from "../../assets/images/mongoDB.svg";
import SQLite from "../../assets/images/SQLite.svg";
import PostgreSQL from "../../assets/images/PostgreSQL.svg";
import Firebase from "../../assets/images/Firebase.svg";
import Realm from "../../assets/images/Realm.svg";
import SubmitIcon from "../../assets/images/teamBtn.svg";
import { useNavigate } from "react-router-dom";
import AngularJS from "../../assets/images/angularJS.svg";
import Vue from "../../assets/images/vue.svg";
import ReactJS from "../../assets/images/reactJS.svg";
import NextJS from "../../assets/images/nextJS.svg";
import NodeJS from "../../assets/images/nodeJS.svg";
import PHP from "../../assets/images/php.svg";
import JAVA from "../../assets/images/java.svg";
import iOS from "../../assets/images/iOSMobile.svg";
import Android from "../../assets/images/AndroidMobile.svg";
import ReactNative from "../../assets/images/reactNativeMobile.svg";
import Flutter from "../../assets/images/flutterMobile.svg";
import MicrosoftTeam from "../../assets/images/MicrosoftTeam.svg";
import Jira from "../../assets/images/Jira.svg";
import Trello from "../../assets/images/Trello.svg";
import Asana from "../../assets/images/Asana.svg";
import Slack from "../../assets/images/Slack.svg";
import AI from "../../assets/images/AI.svg";
import Figma from "../../assets/images/figma.svg";
import PS from "../../assets/images/PS.svg";

const Platform = ({ activeIndex }) => {
  const navigate = useNavigate();

  const platforms = [
    {
      id: "1",
      data: [
        {
          img: AngularJS,
          name: "Angular JS",
        },
        {
          img: Vue,
          name: "Vue",
        },
        {
          img: ReactJS,
          name: "React JS",
        },
        {
          img: NextJS,
          name: "Next JS",
        },
      ],
    },
    {
      id: "2",
      data: [
        {
          img: NodeJS,
          name: "Node JS",
        },
        {
          img: PHP,
          name: "PHP",
        },
        {
          img: JAVA,
          name: "Java",
        },
      ],
    },
    {
      id: "3",
      data: [
        {
          img: iOS,
          name: "iOS",
        },
        {
          img: Android,
          name: "Android",
        },
        {
          img: ReactNative,
          name: "React Native",
        },
        {
          img: Flutter,
          name: "Flutter",
        },
      ],
    },
    {
      id: "4",
      data: [
        {
          img: PS,
          name: "Adobe Photoshop",
        },
        {
          img: Figma,
          name: "Figma",
        },
        {
          img: AI,
          name: "Adobe Illustrator",
        },
      ],
    },
    {
      id: "5",
      data: [
        {
          img: MySQL,
          name: "My SQL",
        },
        {
          img: MSSQL,
          name: "MS-SQL",
        },
        {
          img: MongoDB,
          name: "MongoDB",
        },
        {
          img: SQLite,
          name: "SQLite",
        },
        {
          img: PostgreSQL,
          name: "PostgreSQL",
        },
        {
          img: Firebase,
          name: "Firebase",
        },
        {
          img: Realm,
          name: "Realm",
        },
      ],
    },
    {
      id: "6",
      data: [
        {
          img: MicrosoftTeam,
          name: "Microsoft Team",
        },
        {
          img: Jira,
          name: "Jira",
        },
        {
          img: Trello,
          name: "Trello",
        },
        {
          img: Asana,
          name: "Asana",
        },
        {
          img: Slack,
          name: "Slack",
        },
      ],
    },
  ];

  return (
    <div className={styles.platformContainer}>
      <div className={styles.platform}>
        {platforms[activeIndex].data.map((item, index) => {
          return <Technologies key={index} img={item.img} name={item.name} />;
        })}
      </div>
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => navigate("/ContactUs")}
        >
          <p className={styles.textOfButton}>Schedule A Developer Interview</p>
          <img src={SubmitIcon} alt="" className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Platform;
