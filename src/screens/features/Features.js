import React from "react";
import styles from "./Features.module.css";
import FeaturesAndServices from "./FeaturesAndServices";
import frame1 from "../../assets/images/frame1.svg";
import frame2 from "../../assets/images/frame2.svg";
import frame3 from "../../assets/images/frame3.svg";
import frame4 from "../../assets/images/frame4.svg";
import frame5 from "../../assets/images/frame5.svg";
import frame6 from "../../assets/images/frame6.svg";
import Slider from "infinite-react-carousel";

const Features = () => {
  const featuresModal = [
    {
      frame: frame1,
      title: "Mobile App Development",
      desc: "Drive growth with user-friendly iOS and Android apps. Elevate your brand's mobile presence with our expert development services.",
    },
    {
      frame: frame2,
      title: "Web App Development",
      desc: "Unlock digital potential with cutting-edge web app development. Blend responsive designs with intuitive user experiences to elevate online presence.",
    },
    {
      frame: frame3,
      title: "Custom Software Development",
      desc: "Boost productivity and thrive with powerful, secure custom software. Tailored solutions drive efficiency and keep you ahead of competition.",
    },
    {
      frame: frame4,
      title: "Graphic Design",
      desc: "Elevate your brand with exceptional graphic design. Stand out with stunning visuals and impactful marketing materials.",
    },
    {
      frame: frame5,
      title: "Digital Marketing",
      desc: "Expand reach, optimize online presence, and generate valuable leads with our comprehensive digital marketing solutions. Stay ahead in the digital landscape.",
    },
    {
      frame: frame6,
      title: "Quality Assurance",
      desc: "Deliver excellence and build trust with our robust QA solutions. Meticulous testing ensures flawless performance and user satisfaction.",
    },
  ];

  return (
    <>
      <div className={styles.features}>
        <div className={styles.slide}>
          <Slider
            className={styles.slider}
            arrows={false}
            dots
            slidesToShow={3}
            autoplay={true}
            dotsClass="carousel-dots"
            pauseOnHover={false}
            centerPadding={0}
          >
            {featuresModal.map((item) => {
              return (
                <FeaturesAndServices
                  frame={item.frame}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </Slider>
        </div>
        <div className={styles.Slider}>
          <Slider
            className={styles.Sliders}
            arrows={false}
            dots
            slidesToShow={1}
            autoplay={true}
            dotsClass="carousel-dots"
            pauseOnHover={false}
            centerPadding={0}
          >
            {featuresModal.map((item) => {
              return (
                <FeaturesAndServices
                  frame={item.frame}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Features;
