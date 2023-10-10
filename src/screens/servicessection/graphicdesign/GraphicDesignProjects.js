import React from "react";
import GraphicProjects from "../graphicdesign/GraphicProjects";
import w1 from "../../../assets/images/w1.svg";
import w2 from "../../../assets/images/w2.svg";
import w3 from "../../../assets/images/w3.svg";
import { useNavigate } from "react-router-dom";
import crushApp from "../../../assets/images/crushApp.svg";
import nan from "../../../assets/images/nan.svg";
import jp from "../../../assets/images/jp.svg";
import chatGPT from "../../../assets/images/chatGPT.svg";
import jpAdmin from "../../../assets/images/jpAdmin.svg";
import AD1 from "../../../assets/images/AD1.svg";
import AD2 from "../../../assets/images/AD2.svg";
import AD3 from "../../../assets/images/AD3.svg";
import AD4 from "../../../assets/images/AD4.svg";
import AD5 from "../../../assets/images/AD5.svg";
import AD6 from "../../../assets/images/AD6.svg";
import logo1 from "../../../assets/images/logo1.svg";
import logo2 from "../../../assets/images/logo2.svg";
import logo3 from "../../../assets/images/logo3.svg";
import logo4 from "../../../assets/images/logo4.svg";
import logo5 from "../../../assets/images/logo5.svg";
import brochure from "../../../assets/images/brochure.svg";
import letter from "../../../assets/images/letter.svg";
import jPad from "../../../assets/images/jPad.svg";

const GraphicDesignProjects = ({ activeIndex }) => {
  const navigate = useNavigate();

  const platforms = [
    {
      id: "1",
      data: [
        {
          img: crushApp,
          name: "Crush Application - UI /UX Design",
          title: "CrushApp",
        },
        {
          img: nan,
          name: "Nantucket Rentals - UI /UX Design",
          title: "NantucketWeb",
        },
        {
          img: AD2,
          name: "Enrollin APP - UI /UX Design",
          title: "Enrollin",
        },
        {
          img: jp,
          name: "J-pad - Website Design",
          title: "jPad",
        },
        {
          img: chatGPT,
          name: "ChatGPT - Graphic Design",
          title: "ChatGPT",
        },
        {
          img: jpAdmin,
          name: "J-pad - Admin panel",
          title: "jPadAdminPanel",
        },
      ],
    },
    {
      id: "2",
      data: [
        {
          img: AD1,
          name: "Easi - UI /UX Design",
          title: "Easi",
        },
        {
          img: AD2,
          name: "Enrollin APP - UI /UX Design",
          title: "Enrollin",
        },
        {
          img: AD3,
          name: "Nantucket Rentals - UI /UX Design",
          title: "Nuntucket",
        },
        {
          img: AD4,
          name: "Sameep - UI /UX Design",
          title: "Sameep",
        },
        {
          img: AD5,
          name: "OpenAI - UI /UX Design",
          title: "OpenAI",
        },
        {
          img: AD6,
          name: "Crush Application - UI /UX Design",
          title: "CrushApp",
        },
      ],
    },
    {
      id: "3",
      data: [
        {
          img: logo1,
          name: "ChatGPT - Graphic Design",
          title: "ChatGPT",
        },
        {
          img: logo2,
          name: "Enrolin - Graphic Design",
          title: "EnrollinApp",
        },
        {
          img: logo3,
          name: "Epicseries - Graphic Design",
          title: "Epic",
        },
        {
          img: logo4,
          name: "Crush App - Graphic Design",
          title: "Crush",
        },
        {
          img: logo5,
          name: "Inbines - Graphic Design",
          title: "Inbines",
        },
        // {
        //   img: logo6,
        //   name: "Motatapu - Graphic Design",
        // },
      ],
    },
    // {
    //   id: "4",
    //   data: [
    //     {
    //       img: SocialMedia1,
    //     },
    //     {
    //       img: AppPreview1,
    //     },
    //     {
    //       img: ProductDesign1,
    //     },
    //     {
    //       img: LogoDesign1,
    //     },
    //     {
    //       img: Brochure1,
    //     },
    //     {
    //       img: Website1,
    //     },
    //   ],
    // },
    {
      id: "4",
      data: [
        {
          img: w1,
          title: "NantucketWeb",
        },
        {
          img: w2,
          title: "jPad",
        },
        {
          img: w3,
          title: "Acorn",
        },
      ],
    },
    {
      id: "5",
      data: [
        {
          img: brochure,
          name: "Brochure ",
          title: "Brochure",
        },
        {
          img: letter,
          name: "Letter Head ",
          title: "Sp",
        },
        {
          img: jPad,
          name: "J-pad - Admin panel",
          title: "jPadAdminPanel",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap px-16 justify-center items-center ">
      {platforms[activeIndex].data.map((item, index) => {
        return (
          <GraphicProjects
            key={index}
            img={item.img}
            name={item.name}
            link={item.link}
            onClick={() => {
              console.log("res:=", item.title);
              const link = item.title.replace(/ /g, "");
              navigate(`/${link}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default GraphicDesignProjects;
