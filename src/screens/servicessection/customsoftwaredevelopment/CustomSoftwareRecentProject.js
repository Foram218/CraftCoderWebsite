import React from "react";
import RecentProContent from "../recentproject/RecentProContent";
import styles from "../recentproject/RecentProject.module.css";
import NuntucketCustomSoft from "../../../assets/images/NuntucketCustomSoft.svg";
import Enrolin from "../../../assets/images/Enrolin.svg";
import OpenAI from "../../../assets/images/OpenAI.svg";

const CustomSoftwareRecentProject = () => {
  const recentProjects = [
    {
      img: NuntucketCustomSoft,
      title: "Nantucket Rentals",
      desc: "Discover a wide range of Nantucket vacation rentals directly from homeowners and local brokerages with our user-friendly app. Browse detailed listings, make secure payments, and sign rental agreements seamlessly. Enjoy hassle-free communication with property owners or local brokers, ensuring a smooth vacation experience. Access essential information such as check-in instructions and local recommendations, all within the app. Collaborating closely with our client, we've developed this exceptional app to simplify your Nantucket vacation planning. Download the Nantucket Rentals app now and unlock the convenience of searching, booking, and managing your dream vacation rental on Nantucket Island.",
    },
    {
      img: Enrolin,
      title: "Enrolin",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      img: OpenAI,
      title: "Open AI",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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

export default CustomSoftwareRecentProject;
