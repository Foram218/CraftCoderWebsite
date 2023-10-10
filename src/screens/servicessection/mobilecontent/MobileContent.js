import React from "react";

const MobileContent = (props) => {
  return (
    <div className="flex flex-col md:flex-row relative p-[11px md:p-[20px] bg-white rounded my-3 w-full">
      <div className="flex items-center">
        <img
          src={props.img}
          alt=""
          className={
            "absolute md:relative h-[35px] md:h-[80px]  w-[35px] md:w-[120px] max-md:right-0 max-md:top-[-20px] max-w-[initial] "
          }
        />
      </div>
      <div className="flex flex-col items-start justify-center md:ml-3 ">
        <span className="text-[12px] md:text-[15px] lg:text-[24px]">
          {props.title}
        </span>
        <span className=" text-[9px] md:text-[9px] leading-[15px] text-[#6E7E83] lg:text-[15px] lg:leading-6 ">
          {props.desc}
        </span>
      </div>
    </div>
  );
};

export default MobileContent;
