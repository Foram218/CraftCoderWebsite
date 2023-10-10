import React from "react";
import RecentProContent from "../recentproject/RecentProContent";
import styles from "../recentproject/RecentProject.module.css";
import NantucketGraphic from "../../../assets/images/NantucketGraphic.svg";
// import Sameep from "./images/sameep.svg";
import DatingApp from "../../../assets/images/DatingApp.svg";

const GraphicRecentProject = () => {
  const recentProjects = [
    {
      img: NantucketGraphic,
      title: "Radiologex App",
      desc: "This app is for the Global Healthcare industry By this platform user will be able to upload his product on this app which is related to the healthcare industry and then sell itUser have to register on AppApp have a dashboard for user quick access to account/alertsHave contacts so that users will easily able to connect",
    },
    {
      img: DatingApp,
      title: "Sameep-Local Services & Offers",
      desc: "Omni is an award-winning ultimate multi-functional application that providesa marketplace and directory of peripheral services, allowing customers to conveniently book an appointment with an expert for their favorite related services online, or find the best services for related services in Hong Kong Good expert. Through Omni, you can buy any of your favorite products or make an appointment for related services, and you can easily get all the services around you with one touch of your finger.",
    },
  ];

  return (
    <div className={styles.main}>
      {recentProjects.map((item, index) => {
        return (
          <RecentProContent
            index={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        );
      })}
    </div>
  );
};

export default GraphicRecentProject;
