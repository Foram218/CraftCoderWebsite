import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./WordPressTechnologies.module.css";
import background from "../../../assets/images/WordPressTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import wordpressWPTech from "../../../assets/images/wordpressWPTech.svg";
import userTech from "../../../assets/images/userTech.svg";
import responsiveWPTech from "../../../assets/images/responsiveWPTech.svg";
import pluginInteTech from "../../../assets/images/pluginInteTech.svg";
import ecomSolTech from "../../../assets/images/ecomSolTech.svg";
import seoTech from "../../../assets/images/seoTech.svg";
import contentTech from "../../../assets/images/contentTech.svg";
import supportWPTech from "../../../assets/images/supportWPTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
// import OfferWordPress from "./images/OfferWordPress.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const WordPress = () => {
  const appContent = [
    {
      img: wordpressWPTech,
      title: " Custom WordPress Solutions ",
      desc: "Our expertise lies in delivering custom WordPress solutions that align precisely with your business goals. From elegant designs to intricate functionalities, we craft websites that cater to your unique requirements.",
    },
    {
      img: userTech,
      title: " User-Centric Design ",
      desc: " Our designers work closely with developers to create visually appealing and intuitive interfaces that enhance user engagement and satisfaction. We prioritize user experience and adhere to best design practices.",
    },
    {
      img: responsiveWPTech,
      title: " Responsive Web Design ",
      desc: " With a mobile-first approach, we ensure that your WordPress website looks and functions flawlessly across various devices, ensuring a consistent and engaging user experience. ",
    },
    {
      img: pluginInteTech,
      title: " Plugin Integration ",
      desc: " WordPress's extensive library of plugins allows us to extend your website's functionality and integrate various features that suit your business needs. ",
    },
    {
      img: ecomSolTech,
      title: " E-commerce Solutions ",
      desc: " We specialize in developing e-commerce websites using WordPress and WooCommerce, empowering you to create online stores with secure payment gateways, efficient inventory management, and engaging user experiences.",
    },
    {
      img: seoTech,
      title: " SEO Optimization ",
      desc: " Our team optimizes your WordPress website for search engines, ensuring that your content ranks well in search results and attracts organic traffic. ",
    },
    {
      img: contentTech,
      title: " Content Management ",
      desc: " WordPress is renowned for its user-friendly content management system (CMS). We empower you to easily manage and update your website's content, ensuring it remains fresh and relevant. ",
    },
    {
      img: supportWPTech,
      title: " Ongoing Support and Maintenance ",
      desc: " Beyond development, our team provides continuous support and maintenance to keep your WordPress website up-to-date, secure, and aligned with the latest web standards. ",
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
            WordPress Application <br />
            Development
          </p>
          <p className={styles.desc}>
            Dive into the world of versatile web solutions with WordPress, where
            creativity and functionality converge to create exceptional websites
            tailored to your specific needs. Our skilled team of developers
            excels in harnessing the power of WordPress to build dynamic,
            user-friendly websites that cater to a wide range of industries and
            user preferences.
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

      {/* <div className={styles.offerContainer}>
        <img src={OfferWordPress} alt="" className={styles.OfferReactJs} />
      </div> */}

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

export default WordPress;
