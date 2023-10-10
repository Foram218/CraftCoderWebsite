//react
import React, { useCallback, useEffect, useRef, useState } from "react";
//react dom
import "./Slider.css";
// import clientBackground from "../src/Components/images/clientBg.svg";
const Slide = ({ clientBackground, text, name, position, index }) => (
  <>
    {/* <img src={clientBackground} alt="title" className="clientBg" /> */}
    <div className="carousel-caption-styles">
      <h3
        className="carousel-caption-text"
        // style={{ color: index > 0 ? "#FFF" : "#092A35" }}
      >
        {text}
      </h3>
      <p
        className="carousel-caption-name"
        // style={{ color: index > 0 ? "#FFF" : "#092A35" }}
      >
        {name}
      </p>
      <p
        className="carousel-caption-position"
        // style={{ color: index > 0 ? "#FFF" : "#092A35" }}
      >
        {position}
      </p>
    </div>
  </>
);

export const Carousel = ({
  autoPlay = false,
  activeSlideDuration = 3000, //how long a slide will be displayed
  interactionMode = "swipe", //swipe or hover
  alignIndicators = "center", //center, left, right
  alignCaption = "center", //center, left, right
  slides = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextActiveIndex, setNextActiveIndex] = useState(0);
  const [activeIndexClasses, setActiveIndexClasses] = useState([
    "active-slide",
  ]);
  const [nextActiveIndexClasses, setNextActiveIndexClasses] = useState([]);
  const [disablePrevNext, setDisablePrevNext] = useState(false);
  const [xCoordinate, setXCoordinate] = useState(null);
  // use it to set the indicator position based on the coming (alignIndicators) prop
  const [indicatorPosition, setIndicatorPosition] = useState("position-center");
  /*will be used to reset classes after animating the transition from a slide to another
        (it has to be equal to the animation duration in the css
        classes [enter-to-left, exit-to-left, enter-to-right, exit-to-right])*/
  const animationDuration = 600;
  // will be used to autoplay the carousel
  const autoSlide = useRef(null);
  // used to detect slider direction when clicking the buttons to change slides
  const direction = useRef("to-left");

  useEffect(() => {
    if (alignIndicators === "right") {
      setIndicatorPosition("position-right");
    } else if (alignIndicators === "left") {
      setIndicatorPosition("position-left");
    }
  }, [alignIndicators]);

  // show the next slide in the view port based on the direction
  const animateSliding = useCallback(() => {
    let newActiveIndexClasses = [];
    let newNextActiveIndexClasses = [];

    // attach the following classes if the user click the next button
    if (direction.current === "to-left") {
      newActiveIndexClasses.push("active-slide", "exit-to-left");
      newNextActiveIndexClasses.push(
        "active-slide",
        "next-active-slide",
        "enter-to-left"
      );
    } else {
      // attach the following classes if the user click the prev button
      newActiveIndexClasses.push("active-slide", "exit-to-right");
      newNextActiveIndexClasses.push(
        "active-slide",
        "next-active-slide",
        "enter-to-right"
      );
    }

    setActiveIndexClasses(newActiveIndexClasses);
    setNextActiveIndexClasses(newNextActiveIndexClasses);
  }, []);

  const setActiveSlide = (nextActiveI) => {
    setActiveIndex(nextActiveI);
    setActiveIndexClasses(["active-slide"]);
    setNextActiveIndexClasses([]);
    setDisablePrevNext(false);
  };

  // used to restart auto sliding when user click prev, next button or on the carousel indicator
  const restartAutoSliding = useCallback(
    (nextAcIn) => {
      setNextActiveIndex(nextAcIn);
      setDisablePrevNext(true);

      // attach the required classes to animate the transition between slides
      animateSliding();

      let startId = null;
      // reset classes and enable prev & next btns after the animation duration
      startId = setTimeout(() => {
        setActiveSlide(nextAcIn);
        clearInterval(startId);
      }, animationDuration);

      // restart auto sliding
      autoSlide.current = autoPlay
        ? setInterval(() => {
            //stop auto sliding (so that when user click the next button we can reset the timer for auto sliding)
            stopAutoSliding();

            // set direction to left because slide is coming from the right side to the view port
            direction.current = "to-left";

            // set the next active index
            let nextActiveI = activeIndex + 1;

            // if we reach the last slide reset the next active index to 0
            if (nextActiveI === slides.length) {
              nextActiveI = 0;
            }

            // restart auto sliding
            restartAutoSliding(nextActiveI);
          }, activeSlideDuration)
        : null;
    },
    [animateSliding, activeSlideDuration, activeIndex, autoPlay, slides.length]
  );

  const nextSlide = useCallback(() => {
    //stop auto sliding (so that when user click the next button we can reset the timer for auto sliding)
    stopAutoSliding();

    // set direction to left because slide is coming from the right side to the view port
    direction.current = "to-left";

    // set the next active index
    let nextActiveI = activeIndex + 1;

    // if we reach the last slide reset the next active index to 0
    if (nextActiveI === slides.length) {
      nextActiveI = 0;
    }

    // restart auto sliding
    restartAutoSliding(nextActiveI);
  }, [activeIndex, slides.length, restartAutoSliding]);

  const startAutoSliding = useCallback(() => {
    autoSlide.current = autoPlay
      ? setInterval(nextSlide, activeSlideDuration)
      : null;
  }, [autoPlay, activeSlideDuration, nextSlide]);

  const stopAutoSliding = () => {
    clearInterval(autoSlide.current);
  };

  useEffect(() => {
    startAutoSliding();
    return () => stopAutoSliding();
  }, [startAutoSliding]);

  // used to unify the touch and click cases
  const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

  // get and set the x coordinate
  const getSetXCoordinate = (e) => setXCoordinate(unify(e).clientX);

  // move the slide based on the swipe direction
  const moveSlide = (e) => {
    if (xCoordinate || xCoordinate === 0) {
      const dx = unify(e).clientX - xCoordinate;
      const s = Math.sign(dx);

      if (s < 0) {
        nextSlide();
      } else if (s > 0) {
        prevSlide();
      }
    }
  };

  const prevSlide = () => {
    //stop auto sliding (so that when user click the prev button we can reset the timer for auto sliding)
    stopAutoSliding();

    // set direction to right because slide is coming from the left side to the view port
    direction.current = "to-right";

    // set the next active index
    let nextActiveI = activeIndex - 1;

    // if we are at the first slide set the next active index to the last slide
    if (nextActiveI < 0) {
      nextActiveI = slides.length - 1;
    }

    // restart auto sliding
    restartAutoSliding(nextActiveI);
  };

  return (
    <div
      className="carousel-slider-wrapper-main"
      style={{
        cursor: interactionMode === "swipe" ? "pointer" : "",
      }}
      onMouseDown={(e) => {
        if (interactionMode !== "swipe") {
          return;
        }
        getSetXCoordinate(e);
      }}
      onTouchStart={(e) => {
        if (interactionMode !== "swipe") {
          return;
        }
        getSetXCoordinate(e);
      }}
      onMouseUp={(e) => {
        if (disablePrevNext || interactionMode !== "swipe") {
          return;
        }
        moveSlide(e);
      }}
      onTouchEnd={(e) => {
        if (disablePrevNext || interactionMode !== "swipe") {
          return;
        }
        moveSlide(e);
      }}
      onMouseMove={(e) => {
        if (interactionMode !== "swipe") {
          return;
        }
        e.preventDefault();
      }}
      onTouchMove={(e) => {
        if (interactionMode !== "swipe") {
          return;
        }
        e.preventDefault();
      }}
    >
      {/*(onMouseDown & onTouchStart) & (onMouseUp & onTouchEnd) used to detect the motion direction*/}
      {/*(onMouseMove & onTouchMove) used to prevent edge from navigating the
                 opposite motion direction (also sometimes on chrome)*/}
      {slides.map((el, i) => {
        let classes = "";

        if (i === activeIndex) {
          classes = activeIndexClasses.join(" ");
        } else if (i === nextActiveIndex) {
          classes = nextActiveIndexClasses.join(" ");
        }

        return (
          <div
            key={i}
            className={`carousel-slide ${classes} ${
              interactionMode === "swipe" ? "swipe" : ""
            }`}
            style={{ textAlign: alignCaption }}
            // the following events to pause the auto slide on hover
            onMouseEnter={() => {
              if (interactionMode !== "hover") {
                return;
              }
              stopAutoSliding();
            }}
            onMouseLeave={() => {
              if (interactionMode !== "hover") {
                return;
              }
              startAutoSliding();
            }}
          >
            <Slide
              //   imageSrc={el.image}
              text={el.text}
              name={el.name}
              position={el.position}
              index={i}
            />
          </div>
        );
      })}
    </div>
  );
};

/************ demo *************/
const slides = [
  {
    text: " The app delivered by Craft Coders Infotech LLP now has 3,000 active users, and it has successfully met the client’s requirements and expectations. The team was communicative over Skype, and  they delivered what they promised. Moreover, they were highly responsive, honest, and solutions-oriented.",
    name: "Prachum Chanman",
    position: "Founder & CEO, J-Pad",
  },
  {
    text: " The app delivered by Craft Coders Infotech LLP now has 3,000 active users, and it has successfully met the client’s requirements and expectations. The team was communicative over Skype, and  they delivered what they promised. Moreover, they were highly responsive, honest, and solutions-oriented.",
    name: "Abhishek Mishra",
    position: "Founder & CTO, IT Consulting Firm",
  },
  {
    text: "Craft Coders Infotech LLP delivered excellent results, which pleased the company's customer and helped open the door for future partnerships. The team was always available on Skype and email to discuss the processes and concerns. Overall, their enthusiasm, assistance, and patience stood out.",
    name: "Peter Kaufman",
    position: "Owner, PMKDatabase",
  },
  {
    text: " Craft Coders Infotech LLP has delivered the project in a timely manner. The client is very satisfied with the deliverables and impressed with the partnership. The service provider's team is professional, flexible, and communicative via Slack and Jira.",
    name: "Naresh Ranga",
    position: "Director, Taxiemall Technologies Private Limited",
  },
  {
    text: "Thanks to Craft Coders Infotech LLP's work, the client was very pleased with the outcome of this partnership. They communicated effectively and promptly via Skype. Their diligence and  cost-efficiency were hallmarks of their work.",
    name: "Louis Watson",
    position: "General Manager, Easicleans York Limited",
  },
  {
    text: "The vendor created a responsive app with a user-friendly and eye-catching design. The client described the Craft Coders Infotech team as too good with their work. All tasks were completed on time and  the vendor was always clear in terms of the commitment and the requirements of the project.",
    name: "Italo Andrade",
    position: "CEO, Digital Business Card",
  },
];
// const App = () => {
//   return (
//     <div className="text-center container">
//       {/*Carousel properties:
//     - slides => array of slides
//     - autoPlay => can be ture, false (default: false)
//     - activeSlideDuration => in milliseconds (default: 3000)
//     - interactionMode (default is swipe) => can be:
//       - (swipe => change slides by swiping to right or left)
//       - (hover => pause slide on hover)

//     - indicatorsColor => allows you to change the indicators color (default: #ffffff)
//     - alignIndicators => can be center, left, right (default: center)
//     - alignCaption => can be center, left, right (default: center)
//     - useRightLeftTriangles => can be true or false (default: false)
//     - rightTriangleColor or leftTriangleColor => set the background color of the right and the left triangles (default: #ffffff)
//     - rightIcon or leftIcon => set the right or left icon (it can be "svg" or "fontawesome icon") if you want to change the color use inline styles on the icon as follow:
//     (for svg) =>  style={{fill: "#000"}} default is black
//     (for fontawesome) => style={{color: "#000"}} default is black (don't forget to add fontawesome to your project) */}
//       <h3>React Carousel</h3>
//       <Carousel autoPlay={true} useRightLeftTriangles={true} slides={slides} />
//     </div>
//   );
// };

// const container = document.getElementById("app"),
//   root = createRoot(container);

// root.render(<App />);
