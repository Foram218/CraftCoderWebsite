import React from "react";
// import ClientData from "./ClientData";
import styles from "./ClientReview.module.css";
import clientBackground from "../../assets/images/clientBg.svg";
import clientBackgroundMobile from "../../assets/images/clientBgMobile.svg";
import { Carousel } from "../../Slider";
// import { Slider } from "infinite-react-carousel/lib";

const clientreview = [
  {
    text: "The app delivered by Craft Coders Infotech LLP now has 3,000 active users, and it has successfully met the client’s requirements and expectations. The team was communicative over Skype, and they delivered what they promised. Moreover, they were highly responsive, honest, and solutions-oriented.",
    name: "Prachum Chanman",
    position: "Founder & CEO, J-Pad",
  },
  {
    text: " All the new features worked smoothly and were easy to use, leaving the client completely satisfied with the collaboration. Craft Coders Infotech LLP leveraged their knowledge and technical expertise to provide quality and timely solutions. They were skilled, reliable, and professional throughout.",
    name: "Abhishek Mishra",
    position: "Founder & CTO, IT Consulting Firm",
  },
  {
    text: "Craft Coders Infotech LLP delivered excellent results, which pleased the company's customer and helped open the door for future partnerships. The team was always available on Skype and email to discuss the processes and concerns. Overall, their enthusiasm, assistance, and patience stood out.",
    name: "Peter Kaufman",
    position: "Owner, PMKDatabase",
  },
  {
    text: "The vendor created a responsive app with a user-friendly and eye-catching design. The client described the Craft Coders Infotech team as too good with their work. All tasks were completed on time and the vendor was always clear in terms of the commitment and the requirements of the project.",
    name: "Italo Andrade",
    position: "CEO, Digital Business Card",
  },
];

const ClientReview = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titles}>
        <div className={styles.mainTitle}>TESTIMONIAL</div>
        <div className={styles.centerTitle}>What's Our Client Think</div>
        <div className={styles.lastTitle}>About Us</div>
      </div>

      <div className={styles.subSection}>
        <div className={styles.animatedSection}>
          <Carousel
            autoPlay={true}
            useRightLeftTriangles={false}
            slides={clientreview}
          />
        </div>
        <img src={clientBackground} alt="" className={styles.clientBg} />
        <img
          src={clientBackgroundMobile}
          alt=""
          className={styles.clientBgMobile}
        />
      </div>
    </div>
  );
};

export default ClientReview;
