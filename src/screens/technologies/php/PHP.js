import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./PHPTechnologies.module.css";
import background from "../../../assets/images/PHPTech.svg";
import SubmitIcon from "../../../assets/images/teamBtn.svg";
import phpSolutionTech from "../../../assets/images/phpSolutionTech.svg";
import serverSidePHPTech from "../../../assets/images/serverSidePHPTech.svg";
import webAppPhpTech from "../../../assets/images/webAppPhpTech.svg";
import ecomTech from "../../../assets/images/ecomTech.svg";
import cmsTech from "../../../assets/images/cmsTech.svg";
import APITech from "../../../assets/images/APITech.svg";
import customWebTech from "../../../assets/images/customWebTech.svg";
import ongoingPhpTech from "../../../assets/images/ongoingPhpTech.svg";
import MobileContent from "../../servicessection/mobilecontent/MobileContent";
import Stack from "@mui/material/Stack";
import { Tab, Tabs } from "@mui/material";
import Platform from "../../platform/Platform";
// import OfferPHP from "./images/OfferPHP.svg";
import MobileAppServices from "../../servicessection/mobileservices/MobileAppServices";
import Review from "../../review/Review";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
import Footer from "../../../components/common/Footer/Footer";

const PHP = () => {
  const appContent = [
    {
      img: phpSolutionTech,
      title: " Custom PHP Solutions ",
      desc: "Our expertise lies in delivering custom PHP solutions that align precisely with your business objectives. From e-commerce platforms to content management systems, we develop software that caters to your unique requirements.",
    },
    {
      img: serverSidePHPTech,
      title: " Server-Side Excellence ",
      desc: " PHP's strong server-side scripting capabilities are at the core of our development process. Our developers create powerful server-side applications that handle complex tasks while ensuring optimal performance and responsiveness.",
    },
    {
      img: webAppPhpTech,
      title: " Web Application Development ",
      desc: " Leverage PHP's versatility for web application development. From interactive websites to web portals, we create solutions that engage users, enhance user experiences, and facilitate seamless interactions. ",
    },
    {
      img: ecomTech,
      title: " E-Commerce Solutions ",
      desc: " Our team specializes in developing robust and user-friendly e-commerce platforms using PHP. Create online stores that offer secure payment gateways, smooth browsing experiences, and efficient inventory management. ",
    },
    {
      img: cmsTech,
      title: " CMS Development ",
      desc: " PHP is widely used for building content management systems (CMS) that empower you to manage and update your content effortlessly. We create intuitive CMS solutions tailored to your content management needs.",
    },
    {
      img: APITech,
      title: " API Development ",
      desc: " We offer expert API development services using PHP, allowing your applications to seamlessly communicate with other systems, applications, or third-party services. Our APIs are designed for efficiency, security, and ease of use. ",
    },
    {
      img: customWebTech,
      title: " Custom Web Solutions ",
      desc: " Whether you need a booking system, a social networking platform, or a specialized web application, we harness PHP's capabilities to create tailor-made solutions that drive innovation and meet your unique requirements. ",
    },
    {
      img: ongoingPhpTech,
      title: " Ongoing Support and Maintenance ",
      desc: " Beyond development, our team provides ongoing support and maintenance services to ensure your PHP application remains up-to-date, secure, and optimized for performance. ",
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
          <p className={styles.heading}>PHP Website Development</p>
          <p className={styles.desc}>
            Explore the realm of PHP to create dynamic and feature-rich web
            applications tailored to your specific business needs. Our
            proficient team of developers excels in utilizing PHP's capabilities
            to craft robust, scalable, and efficient solutions that cater to a
            diverse range of industries and requirements.
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
        <img src={OfferPHP} alt="" className={styles.OfferAngularJs} />
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

export default PHP;
