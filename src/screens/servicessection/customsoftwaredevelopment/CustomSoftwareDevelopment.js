import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./CustomSoftwareDevelopment.module.css";
import background from "../../../assets/images/customSoftDevelop.svg";
import Stack from "@mui/material/Stack";
import MobileContent from "../mobilecontent/MobileContent";
import Platform from "../../platform/Platform";
// import RecentProject from "./RecentProject";
import MobileAppServices from "../mobileservices/MobileAppServices";
import ProductEngineering from "../../../assets/images/productEngineering.svg";
import DigitalTransformation from "../../../assets/images/digitalTransformation.svg";
import MVP from "../../../assets/images/MVP.svg";
import EnterpriseApp from "../../../assets/images/enterpriseApp.svg";
import IntegrationService from "../../../assets/images/integrationService.svg";
import QualityAssurance from "../../../assets/images/qualityAssurance.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomSoftwareRecentProject from "../customsoftwaredevelopment/CustomSoftwareRecentProject";
// import WebAppDevelopmentProcess from "./WebAppDevelopmentProcess";
// import CustomSoftProcess from "./CustomSoftprocess";
import CustProcess from "../../../assets/images/CustProcess.svg";
import CSDMobile from "../../../assets/images/CSDMobile.svg";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import Footer from "../../../components/common/Footer/Footer";
import FormContainer from "../../form/FormContainer";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";

const CustomSoftwareDevelopment = () => {
  const appContent = [
    {
      img: ProductEngineering,
      title: "Product Engineering",
      desc: "We serve as your strategic partner throughout the product engineering lifecycle. From ideation and design to prototyping, development, launch, and scaling, we ensure your software product aligns with your long-term vision. Our team combines technical expertise with industry insights to deliver best-in-market solutions that drive growth and success.",
    },
    {
      img: DigitalTransformation,
      title: "Digital Transformation",
      desc: "Embrace digital transformation and gain a competitive edge in today's rapidly evolving business landscape. Our digital transformation services help you leverage technology to optimize processes, improve customer engagement, and drive operational efficiency. With our expertise, you can navigate the digital landscape and stay ahead of the curve.",
    },
    {
      img: MVP,
      title: "MVP Development",
      desc: "Validate your business ideas and explore their potential with our high-quality MVP development services. We focus on delivering an effective solution with the right balance of core functionality and unique features. By prioritizing features based on your business goals, we help you quickly launch a minimum viable product that stands out among competitors.",
    },
    {
      img: EnterpriseApp,
      title: "Enterprise Applications",
      desc: "Our custom software development services extend to building high-end enterprise applications that simplify complex business processes. We create robust and scalable applications that optimize workflows, enhance collaboration, and generate a high return on investment. Our solutions are tailored to your specific industry and designed to meet your unique requirements.",
    },
    {
      img: IntegrationService,
      title: "Integration Services",
      desc: "Integrating new technologies and systems can be challenging for businesses. Our custom software engineers specialize in seamless integration and implementation, overcoming obstacles that arise during the process. We ensure a hassle-free integration of your software solutions, helping you maximize efficiency and productivity.",
    },
    {
      img: QualityAssurance,
      title: "Quality Assurance and Testing",
      desc: "We prioritize quality and reliability throughout the software development lifecycle. Our dedicated quality assurance team conducts rigorous testing to ensure your software solution performs flawlessly. We employ a combination of manual and automated testing methodologies to validate functionality, usability, security, and performance",
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
    <div className={styles.customMain}>
      {/* <TopBar /> */}

      <Header />

      {/* <---------------------------------- Content Section -----------------------------------> */}

      <div className={styles.content}>
        <img src={background} alt="" className={styles.backgroundImage} />

        <div className={styles.imageText}>
          <h1 className={styles.title}>Custom Software Development</h1>
        </div>
      </div>

      {/* <------------------------------ Software Development Section --------------------------------------> */}

      <div className={styles.customSoftwareMain}>
        <div className={styles.titles}>
          <Stack direction="row" className={styles.bothTitle}>
            <p className={styles.middleTitle}>Custom Software</p>
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

      {/* <------------------------------------------- Technologies and Platform Section ---------------------------------------> */}

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
              // indicatorColor="secondary"
              // textColor="secondary"
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

      {/* <------------------------------------ Recent Projects --------------------------------------> */}

      <div>
        <div className={styles.titleOfRecentProjects}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.bothTitle}>
            <div className={styles.middleTitle}>Explore our</div>
            <div className={styles.lastTitle}>recent projects</div>
          </div>
        </div>
        <CustomSoftwareRecentProject />
      </div>

      {/* <------------------------------------- Custom App Development Services from Craft Coders --------------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Why Choose Custom App Development Services From
          </div>
          <div className={styles.lastTitle}>Craft Coders Infotech LLP</div>
        </div>

        <MobileAppServices />
      </div>

      {/* <---------------------------------  Development Process Section ----------------------------------> */}

      <div className={styles.developmentProcess}>
        <img src={CustProcess} alt="" className={styles.CustProcess} />
        <img src={CSDMobile} alt="" className={styles.CSDMobile} />
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

      {/* <------------------------------ Clients Review Section ----------------------------------> */}

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

export default CustomSoftwareDevelopment;
