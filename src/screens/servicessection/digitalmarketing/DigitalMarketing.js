import React, { useState } from "react";
import Header from "../../../components/common/Header/Header";
import styles from "./DigitalMarketing.module.css";
import background from "../../../assets/images/digitalMarketing.svg";
import Stack from "@mui/material/Stack";
import MobileContent from "../mobilecontent/MobileContent";
import SearchEngine from "../../../assets/images/searchEngine.svg";
import PPC from "../../../assets/images/PPC.svg";
import SocialMediaMarketing from "../../../assets/images/socialMediaMarketing.svg";
import ContentMarketing from "../../../assets/images/contentMarketing.svg";
import EmailMarketing from "../../../assets/images/emailMarketing.svg";
import Analytics from "../../../assets/images/analytics.svg";
import Platform from "../../platform/Platform";
import MobileAppServices from "../mobileservices/MobileAppServices";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MarketingProcess from "../../../assets/images/MarketingProcess.svg";
import DMMobile from "../../../assets/images/DMMobile.svg";
import ClientsReview from "../../../assets/images/ClientsReview.svg";
import Footer from "../../../components/common/Footer/Footer";
import FormContainer from "../../form/FormContainer";
import ClientReviewMobileReactTech from "../../../assets/images/ClientReviewMobileReactTech.svg";
// import TopBar from "./TopBar";

const DigitalMarketing = () => {
  const appContent = [
    {
      img: SearchEngine,
      title: "Search Engine Optimization (SEO)",
      desc: "We specialize in optimizing your website to improve its organic search engine rankings. Our SEO experts conduct in- depth keyword research, optimize on-page elements, build high-quality backlinks, and implement technical SEO strategies to enhance your website's visibility on search engines like Google. We focus on driving qualified organic traffic to your website.",
    },
    {
      img: PPC,
      title: "Pay-Per-Click (PPC)",
      desc: "Advertising Our PPC advertising services help you reach your target audience through paid search campaigns. We create data-driven PPC strategies, conduct keyword research, develop compelling ad copy, and optimize campaigns to maximize conversions while minimizing costs. Whether it's Google Ads, Bing Ads, or social media advertising, we ensure your ads are highly targeted and drive tangible results.",
    },
    {
      img: SocialMediaMarketing,
      title: "Social Media Marketing",
      desc: "Leverage the power of social media to build brand awareness and engage with your audience. Our social media marketing services encompass strategy development, content creation, community management, and paid social advertising. We tailor our approach to each platform, including Facebook, Instagram, Twitter, LinkedIn, and others, to ensure your brand's message resonates with your followers.",
    },
    {
      img: ContentMarketing,
      title: "Content Marketing",
      desc: "Engaging and valuable content is the key to attracting and retaining customers. Our content marketing services include content strategy, creation, distribution, and promotion. We develop compelling blog posts, articles, infographics, videos, and other forms of content that not only captivate your audience but also drive organic traffic and establish your brand as an authority in your industry.",
    },
    {
      img: EmailMarketing,
      title: "Email Marketing",
      desc: "Nurture your leads and build lasting relationships with your customers through effective email marketing campaigns. We develop personalized and targeted email marketing strategies, create engaging email content, and optimize email deliverability and performance. Our goal is to help you increase customer retention, drive conversions, and generate repeat business.",
    },
    {
      img: Analytics,
      title: "Analytics and Reporting",
      desc: "Data-driven decision-making is crucial for the success of your digital marketing efforts. We provide comprehensive analytics and reporting services, tracking key performance indicators (KPIs), and delivering actionable insights. Our detailed reports help you understand campaign performance, identify areas for improvement, and make informed marketing decisions.",
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
    <div className={styles.digitalMarketing}>
      {/* <TopBar /> */}

      <Header />

      {/* <------------------------------- Content Section -------------------------------------> */}

      <div className={styles.content}>
        <img src={background} alt="" className={styles.backgroundImage} />

        <div className={styles.imageText}>
          <h1 className={styles.title}>Digital Marketing</h1>
        </div>
      </div>

      {/* <---------------------------------- Digital Marketing Section ----------------------------------> */}

      <div className={styles.digitalMarketingMain}>
        <div className={styles.titles}>
          {/* <p className={styles.mainTitle}>PROJECT</p> */}
          <Stack direction="row" className={styles.bothTitle}>
            <p className={styles.middleTitle}>Digital</p>
            <p className={styles.lastTitle}>Marketing</p>
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

      {/* <----------------------------------- Technologies and Platforms Section ----------------------------------------> */}

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

      {/* <div>
        <div className={styles.titleOfRecentProjects}>
          <div className={styles.mainTitle}>PROJECT</div>
          <div className={styles.bothTitle}>
            <div className={styles.middleTitle}>Explore our</div>
            <div className={styles.lastTitle}>recent projects</div>
          </div>
        </div>
        <RecentProject />
      </div> */}

      {/* <------------------------------------- Digital Marketing Services from Craft Coders --------------------------------------> */}

      <div className={styles.mobileApps}>
        <div className={styles.titles}>
          {/* <div className={styles.mainTitle}>PROJECT</div> */}
          <div className={styles.middleTitle}>
            Why Choose Digital Marketing Services From
          </div>
          <div className={styles.lastTitle}>Craft Coders Infotech LLP</div>
        </div>

        <MobileAppServices />
      </div>

      {/* <----------------------------------- Development Process Section -----------------------------------> */}

      <div className={styles.developentProcess}>
        <img
          src={MarketingProcess}
          alt=""
          className={styles.marketingProcess}
        />
        <img src={DMMobile} alt="" className={styles.DMMobile} />
      </div>

      {/* <--------------------------------  Form Section For Contact With Senior ----------------------------------------->  */}

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

export default DigitalMarketing;
