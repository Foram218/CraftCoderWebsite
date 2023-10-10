import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./NodeJSTechnologies.module.css";
import background from "../../../assets/images/NodeJSTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import NodeJsSolutionTech from "../../../assets/images/NodeJsSolutionTech.svg";
import serverSideNodeTech from "../../../assets/images/serverSideNodeTech.svg";
import Realtimetech from "../../../assets/images/Realtimetech.svg";
import scalabilityNodeTech from "../../../assets/images/scalabilityNodeTech.svg";
import APINodeTech from "../../../assets/images/APINodeTech.svg";
import securityNodeTech from "../../../assets/images/securityNodeTech.svg";
import ongoingSupportNodeTech from "../../../assets/images/ongoingSupportNodeTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
import OfferNodeJs from "../../../assets/images/OfferNodeJs.svg";
import OfferNodeJsMobile from "../../../assets/images/OfferNodeJsMobile.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const NodeJS = () => {
  const appContent = [
    {
      img: NodeJsSolutionTech,
      title: " Custom Node.js Solutions ",
      desc: "Our expertise lies in delivering tailor-made Node.js solutions that align perfectly with your business objectives. From real-time chat applications to high-performance APIs, we create solutions that are designed to meet the unique demands of your project.",
    },
    {
      img: serverSideNodeTech,
      title: " Server-side Excellence ",
      desc: " Node.js is renowned for its efficiency in handling server-side operations. Our developers are adept at creating lightning-fast server-side applications that optimize resource utilization and provide seamless user experiences.",
    },
    {
      img: Realtimetech,
      title: " Real-time Applications ",
      desc: " Leverage Node.js's event-driven architecture to build real-time applications that enable instant data synchronization and communication. Whether it's a live chat feature or real-time analytics, we create applications that keep your users engaged. ",
    },
    {
      img: scalabilityNodeTech,
      title: " Scalability and Performance ",
      desc: " Node.js's non-blocking I/O architecture and lightweight footprint make it ideal for building scalable applications that can handle a large number of concurrent users without compromising performance. ",
    },
    {
      img: APINodeTech,
      title: " API Development ",
      desc: " We specialize in creating robust APIs using Node.js, allowing you to connect your application with various third-party services and data sources. Our APIs are designed to be secure, efficient, and easily maintainable.",
    },
    {
      img: securityNodeTech,
      title: " Security and Authentication ",
      desc: " Our developers prioritize security, implementing robust authentication and authorization mechanisms to protect your Node.js applications from vulnerabilities and unauthorized access. ",
    },
    {
      img: ongoingSupportNodeTech,
      title: " Ongoing Support and Maintenance ",
      desc: " We believe that launching an application is just the beginning. Our team provides continuous support and maintenance services to ensure that your Node.js application remains up-to-date, secure, and optimized. ",
    },
  ];

  const [value, setValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabData = [
    { lable: "Frontend" },
    { lable: "Backend" },
    { lable: "Mobile" },
    { lable: "Design" },
    { lable: "Database" },
    { lable: "Project Management" },
  ];

  return (
    <div className={styles.mainContainer}>
      <Header />

      {/* <--------------------------------- Content Section ---------------------------------> */}

      <div className={styles.content}>
        <div className={styles.leftContent}>
          <p className={styles.heading}>
            NodeJS Development <br />
          </p>
          <p className={styles.desc}>
            Embrace the cutting-edge technology of Node.js to create robust and
            efficient web applications tailored to your specific business needs.
            Our skilled team of developers specializes in harnessing the
            capabilities of Node.js to build fast, scalable, and real-time
            applications that redefine user experiences.
          </p>
          {/* <p className={styles.desc}>
            We are here to help you to boost your business to stand out in the
            market and reach to your <br />
            customers and achieve your business goals. We are here to help you
            to boost your business <br />
            to stand out in the market and reach to your customers and achieve
            your business goals. <br />
            We are here to help you to boost your business to stand out in the
            market and reach to your <br />
            customers and achieve your business goals. We are here to help you
            to boost your business <br />
            to stand out in the market and reach to your customers and achieve
            your business goals.
          </p> */}
          <div className={styles.container}>
            <div className={styles.button}>
              <p className={styles.textOfButton}>
                Schedule a Developer Interview
              </p>
              <img src={SubmitIcon} alt="" className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src={background} alt="" className={styles.background} />
        </div>
      </div>

      {/* <------------------------------------- React JS Development Section --------------------------------------> */}

      <div className={styles.mobileAppContent}>
        <div className={styles.titles}>
          <p className={styles.mainTitle}>OUR EXPERT TEAM</p>
          <Stack direction="row" className={styles.bothTitle}>
            <p className={styles.middleTitle}>Help you with </p>
            <p className={styles.lastTitle}>below services</p>
          </Stack>
        </div>
        <div className={`${styles.appContent} px-6 md:px-[20%]`}>
          {appContent.map((item) => {
            return (
              <MobileContent
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>

      {/* <---------------------------------- Technologies and Platforms Section ----------------------------------> */}

      <div className={styles.headingOfplatform}>
        <p className={styles.mainTitleOfPlatform}>OUR TECH EXPERTISE</p>
        <Stack direction="row" spacing={2}>
          <p className={styles.centerTitleOfPlatform}>
            Technologies & Platforms
          </p>
          <p className={styles.lastTitleOfPlatform}>We Work With</p>
        </Stack>
        <div className={styles.main1}>
          <nav className={styles.platforms}>
            <Tabs
              sx={{ maxWidth: { xs: 320, sm: 480, md: 700, lg: 1875 } }}
              variant="scrollable"
              scrollButtons={false}
              value={value}
              onChange={handleChange}
              centered
            >
              {TabData.map((item, index) => {
                return (
                  <Tab
                    label={item.lable}
                    className={styles.list}
                    onClick={() => setActiveIndex(index)}
                  />
                );
              })}
            </Tabs>
          </nav>
        </div>
        <Platform activeIndex={activeIndex} />
      </div>

      {/* <--------------------------------------- React JS Combinations Section ------------------------------------> */}

      <div className={styles.offerContainer}>
        <img src={OfferNodeJs} alt="" className={styles.OfferAngularJs} />
        <img
          src={OfferNodeJsMobile}
          alt=""
          className={styles.OfferNodeJsMobile}
        />
      </div>

      {/* <----------------------------- React JS Development Services from Craft Coders -----------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles} style={{ textAlign: "center" }}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Why Choose Mobile App Development Services From
          </div>
          <div className={styles.lastTitle}>Craft Coders Infotech LLP</div>
        </div>

        <MobileAppServices />
      </div>

      {/* <-------------------------------------- Review Section --------------------------------------> */}

      <div className={styles.reviewSection}>
        <Review />
      </div>

      {/* <----------------------------- Form Section For Contact with Senior ---------------------------------> */}

      <div className={styles.schedule}>
        <div className={styles.titlesOfSchedule}>
          {/* <div className={styles.mainTitleOfSchedule}>PROJECT</div> */}
          <div className={styles.middleTitleOfSchedule}>
            Schedule A Call with our Senior Mobile Lead & Get a Free
          </div>
          <div className={styles.lastTitleOfSchedule}>
            Quotation for your project
          </div>
        </div>

        <FormContainer />
      </div>

      {/* <--------------------------------------- Clients Review Section -----------------------------------------> */}

      {/* <ClientsReview /> */}
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
      <img
        src={ClientReviewMobileReactTech}
        alt=""
        className={styles.ClientReviewMobileReactTech}
      />

      <Footer />
    </div>
  );
};

export default NodeJS;
