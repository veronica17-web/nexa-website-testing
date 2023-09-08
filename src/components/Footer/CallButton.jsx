import React from "react";
import { MdCall, MdLocationOn } from "react-icons/md";
// import { PiSteeringWheelFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const CallButton = () => {
  return (
    <div className="flex justify-around bg-black text-white bottom-0 fixed z-20 w-full md:hidden py-2 ">
      <a href="tel:9848898488">
        <div className="flex flex-col justify-between items-center">
          <MdCall className="text-3xl" />
          <div className="text-sm">Call</div>
        </div>
      </a>
      <div className="flex flex-col justify-between items-center cursor-pointer">
        <Link to="/maruti-nexa-showroom-outlets-in-hyderabad">
          <MdLocationOn className="text-3xl mx-auto" />
          <div className="text-sm">Showroom</div>
        </Link>
      </div>
      <Link to="/book-online-maruti-nexa-car-service/">
        <div className="flex flex-col justify-between items-center cursor-pointer">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/mechanical-white.webp"
            alt=""
            srcset=""
            className="h-7 lg:h-10 mx-auto "
          />
          <div className="text-sm">Sevice</div>
        </div>
      </Link>
      {/* <Link to="/contact-us">
        <div className="flex flex-col justify-between items-center cursor-pointer">
          <PiSteeringWheelFill className="text-3xl lg:text-4xl " />
          <div className="text-sm">Test Drive</div>
        </div>
      </Link> */}

      <div ></div>
    </div>
  );
};

export default CallButton;
