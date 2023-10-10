import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./GraphicDesign.module.css";
import background from "../../../assets/images/graphicDesignBg.svg";
import Stack from "@mui/material/Stack";
import MobileContent from "../mobilecontent/MobileContent";
import Branding from "../../../assets/images/branding.svg";
import Print from "../../../assets/images/print.svg";
import DigitalDesign from "../../../assets/images/digitalDesign.svg";
import UXDesign from "../../../assets/images/UXDesign.svg";
import IconDesign from "../../../assets/images/iconDesign.svg";
import Packaging from "../../../assets/images/packaging.svg";
import Platform from "../../platform/Platform";
import GraphicDesignProjects from "../graphicdesign/GraphicDesignProjects";
// import RecentProject from "./RecentProject";
import MobileAppServices from "../mobileservices/MobileAppServices";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import GraphicProcess from "../../../assets/images/GraphicProcess.svg";
import GDMobile from "../../../assets/images/GDMobile.svg";
import FormContainer from "../../form/FormContainer";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import Footer from "../../../components/common/Footer/Footer";
import GraphicRecentProject from "../graphicdesign/GraphicRecentProjects";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";

const GraphicDesign = () => {
  const appContent = [
    {
      img: Branding,
      title: "Branding and Identity Design",
      desc: "We understand the importance of a strong brand identity. Our designers work closely with you to create visually appealing and memorable branding elements, including logos, typography, color palettes, and brand guidelines. We ensure that your brand stands out from the competition and resonates with your target audience.",
    },
    {
      img: Print,
      title: "Print Design",
      desc: "Whether it's brochures, flyers, business cards, or other promotional materials, our print design services help you leave a lasting impression. We combine creative design concepts with compelling visuals to create print collateral that effectively communicates your brand's message and values.",
    },
    {
      img: DigitalDesign,
      title: "Digital Design",
      desc: "In the digital age, having visually engaging digital assets is crucial. Our digital design services cover various aspects, including website graphics, social media graphics, banners, infographics, and more. We create visually stunning designs that capture attention and enhance user experiences across digital platforms.",
    },
    {
      img: UXDesign,
      title: "UI/UX Design",
      desc: "User interface (UI) and user experience (UX) are key elements in designing intuitive and user-friendly digital experiences. Our designers are well-versed in UI/UX design principles and create interfaces that are visually appealing, functional, and easy to navigate. We prioritize delivering seamless and enjoyable user experiences.",
    },
    {
      img: IconDesign,
      title: "Illustration and Icon Design",
      desc: "Bring your ideas to life through captivating illustrations and icons. Our skilled illustrators create custom illustrations and icons that align with your brand's aesthetic and messaging. Whether it's for websites, presentations, or marketing materials, our illustrations and icons add a unique touch to your visual content.",
    },
    {
      img: Packaging,
      title: "Packaging Design",
      desc: "In the competitive world of product packaging, we help your products stand out on the shelves. Our packaging design services focus on creating impactful and visually appealing packaging solutions that grab attention and communicate the essence of your product effectively.",
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

  const TabDataGraphic = [
    { lable: "All" },
    { lable: "App Design" },
    { lable: "Logo" },
    { lable: "Website" },
    { lable: "Other Design" },
  ];

  return (
    <div className={styles.graphicDesignContainer}>
      {/* <TopBar /> */}

      <Header />

      {/* <------------------------------------ Content Section -----------------------------------> */}

      <div className={styles.content}>
        <img src={background} alt="" className={styles.backgroundImage} />

        <div className={styles.imageText}>
          <h1 className={styles.title}>Graphic Design Development</h1>
        </div>
      </div>

      {/* <------------------------------ Graphic Design Section -----------------------------------> */}

      <div className={styles.graphicDesignMain}>
        <div className={styles.titles}>
          <p className={styles.mainTitle}>OUR EXPERT TEAM</p>
          <Stack direction="row" className={styles.bothTitle}>
            <p className={styles.middleTitle}>Help you with </p>
            <p className={styles.lastTitle}> below services</p>
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

      {/* <---------------------------- Technologies and Platforms Section ----------------------------> */}

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

      <div className="flex justify-center items-center flex-col mt-5">
        <div className="flex justify-center items-center flex-col h-[80px] md:h-[150px] ">
          <p className={styles.mainTitle}>OUR PORTFOLIO</p>
          <Stack direction="row" spacing={2}>
            <p className={styles.middleTitle}> Explore our </p>
            <p className={styles.lastTitle}> recent projects </p>
          </Stack>
        </div>
        <div>
          <nav>
            <Tabs
              sx={{ maxWidth: { xs: 320, sm: 480, md: 700, lg: 1875 } }}
              variant="scrollable"
              scrollButtons={false}
              value={value}
              onChange={handleChange}
              centered
            >
              {TabDataGraphic.map((item, index) => {
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

        <GraphicDesignProjects activeIndex={activeIndex} />
      </div>

      {/* <---------------------------------- Recent Projects ----------------------------------> */}

      {/* <div>
        <div className={styles.titleOfRecentProjects}>
          <div className={styles.mainTitle}>PROJECT</div>
          <div className={styles.bothTitle}>
            <div className={styles.middleTitle}>Explore our</div>
            <div className={styles.lastTitle}>recent projects</div>
          </div>
        </div>
        <GraphicRecentProject />
      </div> */}

      {/* <--------------------------------- Graphic Design Services from Craft Coders ----------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Why Choose Graphic Design Services From
          </div>
          <div className={styles.lastTitle}>Craft Coders Infotech LLP</div>
        </div>

        <MobileAppServices />
      </div>

      {/* <---------------------------- Development Process Section --------------------------------> */}

      <div className={styles.process}>
        <img src={GraphicProcess} alt="" className={styles.graphicProcess} />
        <img src={GDMobile} alt="" className={styles.GDMobile} />
      </div>

      {/* <--------------------------------  Form Section For Contact With Senior ----------------------------------------->  */}

      <div className={styles.schedule}>
        <div className={styles.titles}>
          <div className={styles.mainTitle}>PROJECT</div>
          <div className={styles.middleTitle}>
            Schedule A Call with our Senior Mobile Lead & Get a Free
          </div>
          <div className={styles.lastTitle}>Quotation for your project</div>
        </div>

        <FormContainer />
      </div>

      {/* <------------------------------------ Clients Review Section ----------------------------------------> */}

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

export default GraphicDesign;
