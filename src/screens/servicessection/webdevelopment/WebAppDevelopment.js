import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./WebAppDevelopment.module.css";
import background from "../../../assets/images/webAppBg.svg";
import Stack from "@mui/material/Stack";
import MobileContent from "../mobilecontent/MobileContent";
import Platform from "../../platform/Platform";
// import RecentProject from "../recentproject/RecentProject";
import MobileAppServices from "../mobileservices/MobileAppServices";
import CustomApp from "../../../assets/images/customApp.svg";
import EcommerceApp from "../../../assets/images/ecommerceApp.svg";
import PWAs from "../../../assets/images/PWAs.svg";
import WebApp from "../../../assets/images/webApp.svg";
import WebAppSupport from "../../../assets/images/webAppSupport.svg";
import ResponsiveWebApp from "../../../assets/images/responsiveWebApp.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import WebRecentProject from "./WebRecentProject";
// import WebAppDevelopmentProcess from "./WebAppDevelopmentProcess";
import WebProcess from "../../../assets/images/WebProcess.svg";
import WADMobile from "../../../assets/images/WADMobile.svg";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import Footer from "../../../components/common/Footer/Footer";
import FormContainer from "../../form/FormContainer";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";

const WebAppDevelopment = () => {
  const appContent = [
    {
      img: CustomApp,
      title: " Custom Web App Development ",
      desc: "We specialize in building fully customized web applications tailored to suit your unique business needs. Our team works closely with you to understand your requirements and design a solution that aligns with your goals. From concept to deployment, we ensure your web application is user-friendly, glitch-free, and delivers a seamless user experience.",
    },
    {
      img: EcommerceApp,
      title: " E-commerce Web App Development ",
      desc: "We help businesses capitalize on the vast potential of online commerce through our robust e-commerce web app development solutions. Our experts leverage web-based marketing channels to create engaging and intuitive e-commerce platforms that drive sales, enhance customer experiences, and support business growth.",
    },
    {
      img: PWAs,
      title: " Progressive Web Apps (PWAs) ",
      desc: "Stay ahead of the curve with Progressive Web Apps (PWAs), the next evolution of web applications. PWAs offer reliability, speed, and engagement, setting a new standard in user experiences. Our team excels in developing PWAs that deliver native app-like features, including offline functionality, push notifications, and seamless performance across devices.",
    },
    {
      img: WebApp,
      title: " Web Application Testing and Quality ",
      desc: "We guarantee top-notch quality and reliability for your web application through rigorous testing by our dedicated team. Our comprehensive tests include functional, performance, compatibility, and security testing, ensuring a flawless user experience.",
    },
    {
      img: WebAppSupport,
      title: " Web Application Support and Maintenance ",
      desc: "We understand that launching a web application is just the beginning. We provide comprehensive web application support and maintenance services to keep your app running smoothly and up-to-date. Our team ensures timely updates, bug fixes, and feature enhancements, allowing you to focus on your core business while we take care of your web application.",
    },
    {
      img: ResponsiveWebApp,
      title: " Responsive Web Design ",
      desc: "In today's mobile-centric world, responsive web design is essential. We create visually appealing and responsive web applications that adapt seamlessly to different screen sizes and devices. Our responsive designs provide a consistent and optimal user experience, enhancing engagement and conversion rates.",
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
    <div className={styles.mainWebContainer}>
      {/* <TopBar /> */}

      <Header />

      {/* <------------------------------- Content Section -------------------------------------> */}

      <div className={styles.content}>
        <img src={background} alt="" className={styles.backgroundImage} />

        <div className={styles.imageText}>
          <h1 className={styles.title}>Web App Development</h1>
        </div>
      </div>

      {/* <-------------------------------------- Web App Development --------------------------------------> */}

      <div className={styles.webAppContent}>
        <div className={styles.titles}>
          {/* <p className={styles.mainTitle}>PROJECT</p> */}
          <Stack direction="row" className={styles.bothTitle}>
            <p className={styles.middleTitle}>Web App</p>
            <p className={styles.lastTitle}>Development</p>
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

      {/* <------------------------------ Technologies and Platforms Section ----------------------------------> */}

      <div className={styles.heading}>
        {/* <p className={styles.mainTitle}>PROJECT</p> */}
        <Stack direction="row" spacing={2}>
          <p className={styles.middleTitle}>Technologies & Platforms</p>
          <p className={styles.lastTitle}>We Work With</p>
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

      {/* <---------------------------------- Recent Projects ---------------------------------------> */}

      <div>
        <div className={styles.titleOfRecentProjects}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.bothTitle}>
            <div className={styles.middleTitle}>Explore our</div>
            <div className={styles.lastTitle}>recent projects</div>
          </div>
        </div>
        <WebRecentProject />
      </div>

      {/* <-------------------------- Web App development Services from Craft Coders -------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles}>
          <div className={styles.middleTitle}>
            Why Choose Web App Development Services From
          </div>
          <div className={styles.lastTitle}>Craft Coders Infotech LLP</div>
        </div>

        <MobileAppServices />
      </div>

      {/* <---------------------------------- Development Process Section ----------------------------------------> */}

      <div className={styles.developmentProcess}>
        <img src={WebProcess} alt="" className={styles.webProcess} />
        <img src={WADMobile} alt="" className={styles.WADMobile} />
      </div>

      {/* <---------------------------------------  Form Section For Contact With Senior ------------------------------------> */}

      <div className={styles.schedule}>
        <div className={styles.titles}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Schedule A Call with our Senior Mobile Lead & Get a Free
          </div>
          <div className={styles.lastTitle}>Quotation for your project</div>
        </div>

        <FormContainer />
      </div>

      {/* <------------------------------------------ Clients Review Section ------------------------------------------> */}

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

export default WebAppDevelopment;
