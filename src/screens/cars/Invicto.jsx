import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
// import { Swiper, SwiperSlide } from 'swiper/react';

import { GiBeltBuckles, GiSpeedometer } from "react-icons/gi";

import { Tab } from "@headlessui/react";

import { toast } from "react-toastify";

import axios from "axios";
import { CgSpinner } from "react-icons/cg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";

import Helmet from "react-helmet";
// import { Autoplay, Navigation, Pagination } from 'swiper';

import {
  MdAirlineSeatReclineExtra,
  // MdOutlineFileDownload,
} from "react-icons/md";
// import Carousel from '../../components/Fronx/Extras/Carousel';

import { Autoplay, EffectCoverflow } from "swiper";
// import EnquiryPopup from "../../components/utils/EnquiryPopup";
import { useEffect } from "react";
// import { CarEnq } from "../home/Home";
import { Link } from "react-router-dom";

const Invicto = () => {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const [exterior, setExterior] = useState(false);
  return (
    <div className="">
      <Helmet>
        <title>
          Maruti Suzuki Invicto On-Road Price in Hyderabad | Saboo NEXA
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Invicto On-Road Price in Hyderabad | Saboo NEXA"
        />
        <meta
          name="description"
          content="Get the latest on-road price of Maruti Suzuki Invicto in Hyderabad and enjoy a smooth car Buying experience. For more information about Nexa Invicto visit your nearest Saboo Nexa dealership today."
        />
      </Helmet>
      <Header />
      <div className="relative">
        <div className="top-0 left-0 w-full h-screen ">
          <video
            className="object-cover w-full h-full "
            preload="metadata"
            loop
            autoPlay
            playsInline
            muted
            poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Header+Banner_Desktop_1500x605.webp"
          >
            <source
              // class='w-30 h-30'
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/videos/WEBSITE+mp4.webm"
              type="video/mp4"
            />
          </video>
          <div className="absolute bottom-40 lg:bottom-24 left-[3%] lg:left-[5%] text-white ">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="500"
              className="text-2xl lg:text-4xl"
            >
              THE NEW
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="500"
              className="pb-1 font-serif text-5xl uppercase lg:text-8xl"
            >
              INVICTO
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="mb-2 text-2xl uppercase lg:text-5xl lg:mb-4"
            >
              THE LEAGUE OF EXTRAORDINARY
            </div>
            <a
              href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Saboo+RKS_Invicto.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                className="px-4 py-2 uppercase border hover:text-white hover:bg-black hover:border-black lg:px-8"
              >
                BROCHURE
              </button>
            </a>
          </div>
        </div>
      </div>

      <CarEnq2 title="BOOK YOUR INVICTO" />

      {/* Design Philosophy */}
      <Philosphy />

      <Col />

      {/* Int & Ext Sliders */}
      <div className="bg-black pb-10 lg:pb-20 ">
        <div className="xl:container  mx-auto">
          <div className="pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8 text-white ">
            Discover Opulence
          </div>
          <div className="flex justify-center pb-2 text-xl gap-5 ">
            <div className="">
              <button
                className={`px-4 py-1  border tracking-widest rounded-lg duration-500  ${
                  !exterior
                    ? "border-white bg-white text-black "
                    : "border-gray-800 text-gray-500 hover:text-white hover:border-white"
                }`}
                onClick={() => setExterior(!exterior)}
              >
                Exterior
              </button>
            </div>
            <div className="">
              <button
                className={`px-4 py-1  border tracking-widest rounded-lg duration-500 ${
                  exterior
                    ? "border-white bg-white text-black"
                    : "border-gray-800 text-gray-500 hover:text-white hover:border-white"
                } `}
                onClick={() => setExterior(!exterior)}
              >
                Interior
              </button>
            </div>
          </div>
          {exterior ? <InteriorSlider /> : <ExteriorSlider />}
        </div>
      </div>

      {/* Intelligent Electric Hybrid System */}
      <div className="">
        <TabNavigationInvictio />
      </div>

      {/* Benefits of Intelligent Electric Hybrid */}
      <Benefits />

      {/* Color */}
      {/* <InvictoColor /> */}

      <Safety />
      <CarComp />
      <InvictoCarEnquiry2 />
    </div>
  );
};

// function InvictoCarEnquiry() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [model, setModel] = useState("");

//   const [method, setMethod] = useState();
//   const [loader, setLoader] = useState(false);

//   function handleSubmit() {
//     setLoader(true);

//     // First API callledu
//     axios
//       .post("https://saboogroups.com/admin/api/enquiry", {
//         name: name,
//         email: email,
//         phone: phone,
//         model: model,
//       })
//       .then((res) => {
//         setMethod("POST");
//         toast.success("Enquiry sent successfully");
//       })
//       .catch((err) => {
//         setLoader(false);
//         toast.error("Something went wrong!");
//         console.log(err);
//       });

//     // Second API call
//     axios
//       .get(
//         `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
//       Our Sales consultant will contact you shortly.

//       Regards
//       RKS Motor Pvt. Ltd.
//       98488 98488
//       www.saboomaruti.in
//       www.saboonexa.in&type=1&template_id=1407168967467983613`
//       )
//       .then((res) => {
//         console.log("SMS API Response:", res.data);
//         // Handle the response from the SMS API if needed
//       })
//       .catch((err) => {
//         console.error("Error sending SMS:", err);
//         // Handle errors from the SMS API if needed
//       })
//       .finally(() => {
//         setLoader(false);
//       });
//   }

//   const pattern = /^[6-9][0-9]{6,9}$/;
//   if (phone !== "" && phone.length === 10) {
//     if (!pattern.test(phone)) {
//       toast.error("Enter valid phone number", {
//         theme: "colored",
//       });
//     }
//   }
//   return (
//     <>
//       <div className="py-6 bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Saboo-RKS-Nexa-Price-Banner.webp)]">
//         <div className="container px-5 mx-auto space-y-3 lg:px-0">
//           <h3 className="text-xl font-semibold text-white">
//             Register Now To Know More About Invicto
//           </h3>
//           <form
//             action={
//               pattern.test(phone) && phone.length === 10
//                 ? "https://crm.zoho.in/crm/WebToLeadForm"
//                 : "#"
//             }
//             name="WebToLeads54158000000752015"
//             method={method}
//             acceptCharset="UTF-8"
//           >
//             <input
//               type="text"
//               style={{ display: "none" }}
//               name="xnQsjsdp"
//               value="5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b"
//             />
//             <input type="hidden" name="zc_gad" id="zc_gad" value="" />
//             <input
//               type="text"
//               style={{ display: "none" }}
//               name="xmIwtLD"
//               value="3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92"
//             />
//             <input
//               type="text"
//               style={{ display: "none" }}
//               name="actionType"
//               value="TGVhZHM="
//             />
//             <input
//               type="text"
//               style={{ display: "none" }}
//               name="returnURL"
//               value="https://www.saboonexa.in/thank-you?email=Email"
//             />
//             <input
//               type="text"
//               style={{ display: "none" }}
//               id="ldeskuid"
//               name="ldeskuid"
//             />
//             <input
//               type="text"
//               style={{ display: "none" }}
//               id="LDTuvid"
//               name="LDTuvid"
//             />
//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:grid-cols-2">
//               <div>
//                 <input
//                   className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
//                   placeholder="Name"
//                   id="Last_Name"
//                   name="Last Name"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
//                   placeholder="Email"
//                   id="Email"
//                   name="Email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
//                   placeholder="Mobile"
//                   value={phone}
//                   id="Phone"
//                   name="Phone"
//                   required
//                   minLength="10"
//                   maxLength="10"
//                   onChange={(e) =>
//                     setPhone(
//                       e.target.value.replace(/[^1-9 ]/g, "") &&
//                         e.target.value.replace(/ /g, "")
//                     )
//                   }
//                 />
//                 {!pattern.test(phone) && phone.length === 10 ? (
//                   <small className="text-red-500">
//                     phone number is invalid
//                   </small>
//                 ) : (
//                   ""
//                 )}
//               </div>
//               <>
//                 <select
//                   id="LEADCF6"
//                   name="LEADCF6"
//                   onChange={(e) => setModel(e.target.value)}
//                   className="block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                 >
//                   <option>Select Model</option>
//                   <option value="INVICTO">Invicto</option>
//                 </select>
//               </>
//               <>
//                 <button
//                   type="submit"
//                   disabled={
//                     pattern.test(phone) && phone.length === 10 ? false : true
//                   }
//                   onClick={handleSubmit}
//                   className="inline-flex justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white bg-red-800 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                 >
//                   {loader ? (
//                     <div className="flex items-center justify-center">
//                       <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
//                       Loading
//                     </div>
//                   ) : (
//                     "Submit"
//                   )}
//                 </button>
//               </>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

function InvictoCarEnquiry2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("INVICTO");

  const [method, setMethod] = useState();
  const [loader, setLoader] = useState(false);

  function handleSubmit() {
    setLoader(true);

    // First API call
    axios
      .post("https://saboogroups.com/admin/api/enquiry", {
        name: name,
        email: email,
        phone: phone,
        model: model,
      })
      .then((res) => {
        setMethod("POST");
        toast.success("Enquiry sent successfully");
      })
      .catch((err) => {
        setLoader(false);
        toast.error("Something went wrong!");
        console.log(err);
      });

    // Second API call
    axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
      Our Sales consultant will contact you shortly.
      
      Regards
      RKS Motor Pvt. Ltd.
      98488 98488
      www.saboomaruti.in
      www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log("SMS API Response:", res.data);
        // Handle the response from the SMS API if needed
      })
      .catch((err) => {
        console.error("Error sending SMS:", err);
        // Handle errors from the SMS API if needed
      })
      .finally(() => {
        setLoader(false);
      });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }
  return (
    <>
      <div className="pt-8 pb-20 md:pb-28 ">
        <div className="container px-5 mx-auto space-y-3 lg:px-0">
          <div className="pt-2 pb-6 text-3xl text-center uppercase lg:pb-8 sm:text-4xl md:text-5xl">
            Book Your Invicto Now
          </div>
          <form
            action={
              pattern.test(phone) && phone.length === 10
                ? "https://crm.zoho.in/crm/WebToLeadForm"
                : "#"
            }
            name="WebToLeads54158000000752015"
            method={method}
            acceptCharset="UTF-8"
          >
            <input
              type="text"
              style={{ display: "none" }}
              name="xnQsjsdp"
              value="5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b"
            />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input
              type="text"
              style={{ display: "none" }}
              name="xmIwtLD"
              value="3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92"
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="actionType"
              value="TGVhZHM="
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="returnURL"
              value="https://www.saboonexa.in/thank-you?email=Email"
            />
            <input
              type="text"
              style={{ display: "none" }}
              id="ldeskuid"
              name="ldeskuid"
            />
            <input
              type="text"
              style={{ display: "none" }}
              id="LDTuvid"
              name="LDTuvid"
            />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-10">
              <div>
                <input
                  className="w-full h-10 px-3 font-sans border-b border-black outline-none placeholder:text-lg placeholder:text-gray-400 "
                  placeholder="Name"
                  id="Last_Name"
                  name="Last Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-full h-10 px-3 font-sans border-b border-black outline-none placeholder:text-lg placeholder:text-gray-400 "
                  placeholder="Email"
                  id="Email"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email.length > 0 && !emailPattern.test(email) ? (
                  <small className="text-red-500">Invalid email address</small>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  className="w-full h-10 px-3 font-sans border-b border-black outline-none placeholder:text-lg placeholder:text-gray-400 "
                  placeholder="Mobile"
                  value={phone}
                  id="Phone"
                  name="Phone"
                  required
                  minLength="10"
                  maxLength="10"
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/[^1-9 ]/g, "") &&
                        e.target.value.replace(/ /g, "")
                    )
                  }
                />
                {phone.length > 0 && phone.length < 10 ? (
                  <small className="text-red-500">
                    Phone number must be 10 digits
                  </small>
                ) : !pattern.test(phone) && phone.length === 10 ? (
                  <small className="text-red-500">
                    Phone number is invalid
                  </small>
                ) : (
                  ""
                )}
              </div>
              <>
                <select
                  id="LEADCF6"
                  name="LEADCF6"
                  onChange={(e) => setModel(e.target.value)}
                  className="block w-full h-10 px-2 py-2 font-sans bg-white border-b border-black shadow-sm focus:outline-none sm:text-sm placeholder:text-lg placeholder:text-gray-600 "
                >
                  {/* <option defaultChecked>Select Model</option> */}
                  <option value="INVICTO" className="">
                    Invicto
                  </option>
                </select>
              </>

              <button
                type="submit"
                disabled={
                  pattern.test(phone) && phone.length === 10 ? false : true
                }
                onClick={handleSubmit}
                class="group relative md:col-span-2 h-10 w-full shadow-lg overflow-hidden bg-black text-md rounded-lg border-white "
              >
                <div class="absolute inset-0 w-[0.5px]  bg-white transition-all duration-[500ms]  ease-out group-hover:w-full group-hover:border-b-2 group-hover:border-b-black border border-white"></div>
                <span class="relative text-white group-hover:text-black ">
                  {loader ? (
                    <div className="flex items-center justify-center">
                      <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
                      Loading
                    </div>
                  ) : (
                    "Submit"
                  )}
                </span>
              </button>
            </div>
            <div className="container mt-6 text-xs text-gray-600">
              <span className="font-semibold">*Disclaimer:</span> By clicking
              'Submit,' you acknowledge that you have agreed to our Terms of
              Service and Privacy Policy and hereby give consent to be contacted
              by Saboo Maruti (RKS Motor Pvt. Ltd) or its representatives on
              your 'Mobile'.
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const ExteriorSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const styles = `
  #app { height: 100% }
  html,
  body {
    position: relative;
    height: 100%;
  }
  
  body {
    font-size: 14px;
    // color: #000;
    margin: 0;
    padding: 0;
  }
.swiper {
  // width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  // margin: 40px
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  // width: 300px;
  
  // height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


`;
  const handleClickSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index); // Go to the clicked slide
    }
  };

  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
  };
  return (
    <>
      <style>{styles}</style>
      <div className="  ">
        <Swiper
          effect={"coverflow"}
          // loop={true}
          // grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={-30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          onSwiper={handleSwiperInit}
          // pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className="rounded-3xl"
        >
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-4+webp.webp"
              alt=""
              onClick={() => handleClickSlide(0)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-2+jpg.webp"
              alt=""
              onClick={() => handleClickSlide(1)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-3+jpg.webp"
              alt=""
              onClick={() => handleClickSlide(2)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-5+webp.webp"
              alt=""
              onClick={() => handleClickSlide(3)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Extr-img-5+webp.webp"
              alt=""
              onClick={() => handleClickSlide(4)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
const InteriorSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const styles = `
  #app { height: 100% }
  html,
  body {
    position: relative;
    height: 100%;
  }
  
  body {
    font-size: 14px;
    // color: #000;
    margin: 0;
    padding: 0;
  }
.swiper {
  // width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  // margin: 40px
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  // width: 300px;
  
  // height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


`;
  const handleClickSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index); // Go to the clicked slide
    }
  };

  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
  };
  return (
    <>
      <style>{styles}</style>
      <div>
        <Swiper
          effect={"coverflow"}
          // loop={true}
          // grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={-30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          onSwiper={handleSwiperInit}
          // pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className="rounded-3xl"
        >
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-3+jpg.webp"
              alt=""
              onClick={() => handleClickSlide(0)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-2+jpg.webp"
              alt=""
              onClick={() => handleClickSlide(1)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-8+webp.webp"
              alt=""
              onClick={() => handleClickSlide(2)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-5+webp.webp"
              alt=""
              onClick={() => handleClickSlide(3)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-6+webp.webp"
              alt=""
              onClick={() => handleClickSlide(4)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-4+webp.webp"
              alt=""
              onClick={() => handleClickSlide(5)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/intr-img-1+jpg.webp"
              alt=""
              onClick={() => handleClickSlide(6)}
            />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden  rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/int-img-7+webp.webp"
              alt=""
              onClick={() => handleClickSlide(7)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

function Philosphy() {
  // useEffect(() => {
  //   const zoomElement = document.querySelector(".invicto_philosophy");
  //   let zoom = 0.7;
  //   const zoomSpeed = 0.04;

  //   const handleWheel = (e) => {
  //     if (e.deltaY > 0) {
  //       zoom = Math.min(1, zoom + zoomSpeed); // Limit zoom to a maximum of 1
  //     } else {
  //       zoom = Math.max(0.8, zoom - zoomSpeed); // Limit zoom to a minimum of 0.5
  //     }
  //     zoomElement.style.transform = `scale(${zoom})`;
  //   };

  //   document.addEventListener("wheel", handleWheel);

  //   return () => {
  //     // Clean up the event listener when the component unmounts
  //     document.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  return (
    <div className="text-white bg-black">
      <div className="container mx-auto px-1 xl:px-0">
        <div className=" w-full pt-10 overflow-hidden ">
          {/* <div className="pb-5 text-2xl font-semibold text-center md:text-3xl"> */}
          <div className="pt-2 pb-6 text-3xl text-center uppercase lg:pb-8 sm:text-4xl md:text-5xl">
            Design Philosophy
          </div>
          <div className="px-6 py-10 italic font-normal text-white bg-black lg:hidden">
            <div className="pb-6 text-xl font-semibold">
              WELCOME TO THE LEAGUE OF EXTRAORDINARY
            </div>
            Embodying NEXA’s Crafted Futurism Design Language, the INVICTO
            features signature design elements like the NEXTre’ LED Headlamps,
            LED Tail lamps, and the NEXWave Grille with urbane chrome accents.
          </div>
          <div className="lg:hidden ">
            <div className="grid ">
              <video
                className="object-cover w-full h-full pb-6"
                preload="metadata"
                loop
                autoPlay
                playsInline
                muted
                poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Header+Banner_Desktop_1500x605.webp"
              >
                <source
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/videos/philoshphyNexa.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="relative hidden duration-500 lg:block">
            <div className="grid grid-cols-10 ">
              <video
                className="object-cover w-full h-full col-span-7 "
                preload="metadata"
                loop
                autoPlay
                playsInline
                muted
                poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Header+Banner_Desktop_1500x605.webp"
              >
                <source
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/videos/philoshphyNexa.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="flex flex-col justify-center col-span-3 px-6 text-lg italic font-normal text-white bg-black ">
                <div className="pb-6 text-2xl font-semibold">
                  WELCOME TO THE LEAGUE OF EXTRAORDINARY
                </div>
                Embodying NEXA’s Crafted Futurism Design Language, the INVICTO
                <br />
                features signature design elements like the NEXTre’ LED
                Headlamps,
                <br />
                LED Tail lamps, and the NEXWave Grille with urbane chrome
                accents.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabNavigationInvictio() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="pt-10 lg:pt-20 pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl ">
          Intelligent Electric Hybrid System
        </div>
        <div className="text-center text-md lg:text-lg">
          Real power isn’t loud. It’s subtle. The advanced electric hybrid
          system from Maruti Suzuki is a fully hybrid technology that can drive
          on battery power alone, and operate in fuel efficient zero emissions
          mode. The Intelligent Electric Hybrid can seamlessly switch between
          pure electric, petrol mode & hybrid mode depending on the driving
          situation. A revolutionary solution that makes your travel smooth,
          silent and efficient.
        </div>
      </div>

      <Tab.Group>
        <div className="flex items-center justify-center pt-8 ">
          <Tab.List className="flex px-0.5 gap-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-2 mb-3"
                  : "bg-gray-300 text-black hover:bg-black font-light  hover:text-gray-300 mb-3 px-2 py-2  "
              }
            >
              Electric Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? // ? "bg-black text-gray-200 px-1 py-2 outline-none "
                    "bg-black text-gray-200 px-2 mb-3"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-2 py-2 "
              }
            >
              Hybrid Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-2 mb-3"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-2 py-2 "
              }
            >
              Engine Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-2 mb-3"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-2 py-2 "
              }
            >
              Regenerative Braking
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}

            {/* exterior */}
            <Tab.Panel>
              <ElectricDrive />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <HybridDrive />
              {/* <HyrbridDrive /> */}
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <EngineDrive />
              {/* <EngineDrive /> */}
            </Tab.Panel>

            <Tab.Panel>
              <RegenerativeBraking />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const ElectricDrive = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="h-[50vh] ">
          <div class="gap-1 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <video
              class="w-screen"
              autoplay="autoplay"
              loop
              className=" rounded-xl overflow-hidden"
            >
              <source
                class="w-30 h-30"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4"
                type="video/mp4"
              />
            </video>

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg">
              For low speed cruising, the energy stored in the battery pack is
              utilized to power the electric motor. A truly Electric Drive that
              provides you with immediate acceleration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const HybridDrive = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="h-[50vh] ">
          <div class="gap-1 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <video
              class="w-screen"
              autoplay="autoplay"
              loop
              className=" rounded-xl overflow-hidden"
            >
              <source
                class="w-30 h-30"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4"
                type="video/mp4"
              />
            </video>

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg">
              Gives you optimum performance and spontaneous acceleration using
              the power of both the petrol engine and the battery pack. The
              combined power output provides a powerful driving experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const EngineDrive = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="h-[50vh] ">
          <div class="gap-1 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4 ">
            <video
              class="w-screen"
              autoplay="autoplay"
              loop
              className=" rounded-xl overflow-hidden"
            >
              <source
                class="w-30 h-30"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4"
                type="video/mp4"
              />
            </video>

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg">
              An engine drive leverages the IC engine to help you cruise through
              your journeys while also charging the battery at the same time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const RegenerativeBraking = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="h-[50vh] ">
          <div class="gap-1 items-center py-2 px-2 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4 h-30">
            <video
              class="w-screen"
              autoplay="autoplay"
              loop
              className=" rounded-xl overflow-hidden"
            >
              <source
                class="w-30 h-30"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4"
                type="video/mp4"
              />
            </video>

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg">
              A smart solution that maximizes energy efficiency by leveraging
              regenerative braking to recharge the Li-ion battery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function Benefits() {
  return (
    <div className={`py-14 text-white bg-black `}>
      <div className="container py-6 mx-auto lg:px-10">
        <div className="pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8 ">
          Benefits of Intelligent Electric Hybrid
        </div>
        <div className="flex gap-2 md:flex-col">
          <div className="flex flex-col justify-around gap-4 pl-2 my-6 md:gap-0 md:flex-row md:pl-0">
            <div className="flex items-center justify-center w-20 h-20 rounded-full md:h-32 md:w-32 bg-gradient-to-tr from-gray-300 via-gray-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full shadow-2xl md:h-28 md:w-28 filter-none hover:scale-105 ">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full md:h-28 md:w-28 filter-none">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon1+png.webp"
                    alt=""
                    srcSet=""
                    className="mx-auto"
                  />
                </div>
                <div className="hidden w-5 h-5 mx-auto -mt-3 rotate-45 bg-gray-100 rounded md:block"></div>
              </div>
            </div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full md:h-32 md:w-32 bg-gradient-to-tr from-gray-300 via-gray-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full shadow-2xl md:h-28 md:w-28 filter-none hover:scale-105 ">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full md:h-28 md:w-28 filter-none">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon2+png.webp"
                    alt=""
                    srcSet=""
                    className="p-2 mx-auto md:p-4"
                  />
                </div>
                <div className="hidden w-5 h-5 mx-auto -mt-3 rotate-45 bg-gray-100 rounded md:block"></div>
              </div>
            </div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full md:h-32 md:w-32 bg-gradient-to-tr from-gray-300 via-gray-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full shadow-2xl md:h-28 md:w-28 filter-none hover:scale-105 ">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full md:h-28 md:w-28 filter-none">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon3+png.webp"
                    alt=""
                    srcSet=""
                    className="mx-auto "
                  />
                </div>
                <div className="hidden w-5 h-5 mx-auto -mt-3 rotate-45 bg-gray-100 rounded md:block"></div>
              </div>
            </div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full md:h-32 md:w-32 bg-gradient-to-tr from-gray-300 via-gray-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full shadow-2xl md:h-28 md:w-28 filter-none hover:scale-105 ">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full md:h-28 md:w-28 filter-none">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon4+png.webp"
                    alt=""
                    srcSet=""
                    className="mx-auto "
                  />
                </div>
                <div className="hidden w-5 h-5 mx-auto -mt-3 rotate-45 bg-gray-100 rounded md:block"></div>
              </div>
            </div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full md:h-32 md:w-32 bg-gradient-to-tr from-gray-300 via-gray-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full shadow-2xl md:h-28 md:w-28 filter-none hover:scale-105 ">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full md:h-28 md:w-28 filter-none">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/benifit-icon5+png.webp"
                    alt=""
                    srcSet=""
                    className="p-2 mx-auto md:p-4"
                  />
                </div>
                <div className="hidden w-5 h-5 mx-auto -mt-3 rotate-45 bg-gray-100 rounded md:block"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 md:flex-col md:gap-1">
            {/* <div  className="h-2 bg-gray-300 blur-[2px] mt-6" ></div> */}
            <div className="flex flex-col justify-around w-2 mx-4 my-3 rounded md:h-2 md:w-full md:mx-0 bg-gradient-to-br md:bg-gradient-to-t from-gray-200 md:shadow md:flex-row ">
              <div className="flex items-center justify-center w-8 h-8 -mt-3 -ml-3 bg-gray-300 rounded-full md:ml-0">
                <div className="flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full hover:animate-pulse">
                  <div className="w-2 h-2 bg-blue-300 rounded-full "></div>
                </div>
              </div>
              <div className="flex items-center justify-center w-8 h-8 -mt-3 -ml-3 bg-gray-300 rounded-full md:ml-0">
                <div className="flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full hover:animate-pulse">
                  <div className="w-2 h-2 bg-blue-300 rounded-full "></div>
                </div>
              </div>
              <div className="flex items-center justify-center w-8 h-8 -mt-3 -ml-3 bg-gray-300 rounded-full md:ml-0">
                <div className="flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full hover:animate-pulse">
                  <div className="w-2 h-2 bg-blue-300 rounded-full "></div>
                </div>
              </div>
              <div className="flex items-center justify-center w-8 h-8 -mt-3 -ml-3 bg-gray-300 rounded-full md:ml-0">
                <div className="flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full hover:animate-pulse">
                  <div className="w-2 h-2 bg-blue-300 rounded-full "></div>
                </div>
              </div>
              <div className="flex items-center justify-center w-8 h-8 -mt-3 -ml-3 bg-gray-300 rounded-full md:ml-0">
                <div className="flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full hover:animate-pulse">
                  <div className="w-2 h-2 bg-blue-300 rounded-full "></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-around my-3 md:items-start md:my-6 md:flex-row md:gap-4 ">
              <div className="pb-2 border-b md:text-center md:w-1/5 md:border-0">
                <div className="py-3 lg:py-5 font-medium md:text-xl">
                  Better Fuel <br className="hidden md:block" /> Efficiency
                </div>
                <div className="md:font-light tracking-wider text-center">
                  The Hybrid System consumes less fuel and maximizes fuel
                  efficiency. Engine uses less fuel when it is revolving slower,
                  at a lower RPM.
                </div>
              </div>

              <div className="pb-2 border-b md:text-center md:w-1/5 md:border-0">
                <div className="py-3 lg:py-5 font-medium md:text-xl">
                  Lower CO2 <br className="hidden md:block" /> Emissions
                </div>
                <div className="md:font-light tracking-wider text-center">
                  When the electric motor kicks in, the overall load on the
                  petrol engine reduces, which leads to lower CO2 emissions and
                  a more environment-friendly drive.
                </div>
              </div>
              <div className="pb-2 border-b md:text-center md:w-1/5 md:border-0">
                <div className="py-3 lg:py-5 font-medium md:text-xl">
                  No Range <br className="hidden md:block" /> Anxiety
                </div>
                <div className="md:font-light tracking-wider text-center">
                  The battery charges during cruising and regenerative braking.
                  This gives you an extended range as compared to an electric
                  vehicle that needs charging at regular intervals.
                </div>
              </div>
              <div className="pb-2 border-b md:text-center md:w-1/5 md:border-0">
                <div className="py-3 lg:py-5 font-medium md:text-xl">
                  Enhanced <br className="hidden md:block" /> Performance
                </div>
                <div className="md:font-light tracking-wider text-center">
                  Enhanced power delivery from the combined output of the petrol
                  engine and electric motor delivers smooth and quick
                  acceleration.
                </div>
              </div>
              <div className="md:text-center md:w-1/5">
                <div className="py-3 lg:py-5 font-medium md:text-xl">
                  Quieter <br className="hidden md:block" /> Driving
                </div>
                <div className="md:font-light tracking-wider text-center">
                  Minimal engine noise in the EV mode and a smooth switch over
                  between petrol and electric will give you a smooth and quiet
                  driving experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function InvictoColor() {
//   const [tabsColors, setTabsColors] = useState(1);
//   return (
//     <div className="py-4 mx-auto ">
//       <div className="pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8 ">
//         Color Range
//       </div>

//       <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/background-image-for-color.webp')] bg-cover bg-no-repeat ">
//         <div className="container py-2 mx-auto">
//           <a
//             href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Saboo+RKS_Invicto.pdf"
//             className="m-3 p-3 border text-white flex items-center max-w-[200px] mt-8 ml-3 rounded hover:bg-white hover:text-black duration-500"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <MdOutlineFileDownload className="mr-2 text-xl animate-pulse" />
//             Download Brochure
//           </a>

//           <div className="mt-24 ml-auto mr-1">
//             {/* 1. NEXA BLUE (CELESTIAL) */}
//             <img
//               src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Blue_810+x+411.webp"
//               alt="NEXA BLUE"
//               className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
//             />

//             {/* 2. STELLAR BRONZE */}
//             <img
//               src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/AVANT_GRADE_BRONZE_810+x+411+webp.webp"
//               alt="STELLAR BRONZE"
//               className={tabsColors === 2 ? "flex mx-auto" : "hidden"}
//             />

//             {/* 3. MAJESTIC_SILVER */}
//             <img
//               src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/MAJESTIC_SILVER_810+x+411+webp.webp"
//               alt="MAJESTIC SILVER"
//               className={tabsColors === 3 ? "flex mx-auto" : "hidden"}
//             />

//             {/* 4. PLATINUM WHITE */}
//             <img
//               src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/PLATINUM_WHITE_810+x+411+webp.webp"
//               alt="PLATINUM_WHITE"
//               className={tabsColors === 4 ? "flex mx-auto" : "hidden"}
//             />
//           </div>
//           <div className="flex items-center justify-center">
//             <div onClick={() => setTabsColors(1)}>
//               <div className={tabsColors === 1 ? "relative" : "hidden"}>
//                 <p className="w-6 h-6 bg-[#163472] mr-[10px] border-t border-x"></p>
//                 <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
//                 <p className="arrow-dropdown-selected-car border-t-8 border-[#163472]"></p>
//               </div>
//               <p
//                 className={
//                   tabsColors !== 1 ? "w-6 h-6 bg-[#163472] mr-2" : "hidden"
//                 }
//               ></p>
//             </div>

//             <div onClick={() => setTabsColors(2)}>
//               <div className={tabsColors === 2 ? "relative" : "hidden"}>
//                 <p className="w-6 h-6 bg-[#b2aea9] mr-[10px] border-t border-x"></p>
//                 <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
//                 <p className="arrow-dropdown-selected-car border-t-8 border-[#b2aea9]"></p>
//               </div>
//               <p
//                 className={
//                   tabsColors !== 2 ? "w-6 h-6 bg-[#b2aea9] mr-2" : "hidden"
//                 }
//               ></p>
//             </div>

//             <div onClick={() => setTabsColors(3)}>
//               <div className={tabsColors === 3 ? "relative" : "hidden"}>
//                 <p className="w-6 h-6 bg-[#B6BABD] mr-[10px] border-t border-x"></p>
//                 <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
//                 <p className="arrow-dropdown-selected-car border-t-8 border-[#B6BABD]"></p>
//               </div>
//               <p
//                 className={
//                   tabsColors !== 3
//                     ? "w-6 h-6 border bg-[#B6BABD] mr-2"
//                     : "hidden"
//                 }
//               ></p>
//             </div>

//             <div onClick={() => setTabsColors(4)}>
//               <div className={tabsColors === 4 ? "relative" : "hidden"}>
//                 <p className="w-6 h-6 bg-[#f9f9f9] mr-[10px] border-t border-x"></p>
//                 <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
//                 <p className="arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]"></p>
//               </div>
//               <p
//                 className={
//                   tabsColors !== 4 ? "w-6 h-6 bg-[#ffffff] mr-2" : "hidden"
//                 }
//               ></p>
//             </div>
//           </div>
//           <p
//             className={
//               tabsColors === 1
//                 ? "text-center text-[#163472]  w-max mx-auto backdrop-blur-md font-semibold text p-2 my-2"
//                 : "hidden"
//             }
//           >
//             NEXA BLUE (CELESTIAL)
//           </p>
//           <p
//             className={
//               tabsColors === 2
//                 ? "text-center  w-max mx-auto backdrop-blur-md font-semibold text p-2 my-2"
//                 : "hidden"
//             }
//           >
//             STELLAR BRONZE
//           </p>
//           <p
//             className={
//               tabsColors === 3
//                 ? "text-center  w-max mx-auto backdrop-blur-md font-semibold text p-2 my-2"
//                 : "hidden"
//             }
//           >
//             MAJESTIC SILVER
//           </p>
//           <p
//             className={
//               tabsColors === 4
//                 ? "text-center text-white w-max mx-auto backdrop-blur-md font-semibold text p-2 my-2"
//                 : "hidden"
//             }
//           >
//             MYSTIC WHITE
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

function Safety() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="container mx-auto mt-6 text-center ">
        <div className="pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8 ">
          SAFETY
        </div>
        <span className="text-md lg:text-lg"> Cocooned in Advanced Safety</span>
      </div>
      <div className="py-4 text-2xl font-semibold text-center lg:text-3xl "></div>
      <div className="container relative flex flex-col items-center justify-center mx-auto -mt-10">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/safetyInvicto.webp"
          alt=""
          srcSet=""
          className="m-28"
        />

        <div className="absolute left-[62%] top-16  lg:flex group hidden  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black">
            <GiBeltBuckles className="text-4xl group-hover:text-white" />
          </div>
          <div className="mx-3 my-auto w-60 group-hover:backdrop-blur-md">
            <div className="pb-1 font-semibold ">
              Seat Belt Pre-Tensioners with force limiters
            </div>

            <div className="hidden font-light group-hover:block">
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          </div>
        </div>
        <div className="absolute left-[19%] xl:left-[20%] top-[60%]  lg:flex lg:flex-col md:items-start group hidden  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black">
            <GiSpeedometer className="text-4xl group-hover:text-white" />
          </div>

          <div className="py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md ">
            <div className="pb-1 font-semibold ">ABS with EBD</div>

            <div className="hidden text-sm font-light group-hover:block">
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          </div>
        </div>
        <div className="absolute right-[26%] bottom-24  lg:flex group hidden items-end  ">
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black ">
            <MdAirlineSeatReclineExtra className="text-4xl group-hover:text-white" />
          </div>
          <div className="py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md ">
            <div className="pb-1 font-semibold ">6 Air Bags</div>

            <div className="hidden font-light group-hover:block">
              6 Air Bags to take the impact before it reaches you.
            </div>
          </div>
        </div>
        <div className="absolute left-[10%]  bottom-[58%]    lg:flex-col md:items-start group hidden lg:flex ">
          <div className="py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md ">
            <div className="pb-1 font-semibold ">
              ISOFIX child fix anchorages
            </div>

            <div className="hidden font-light group-hover:block">
              Standardized international child seat fitting system, for that
              perfect drive with your little ones.
            </div>
          </div>
          <div className="flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black ">
            <MdAirlineSeatReclineExtra className="text-4xl group-hover:text-white" />
          </div>
        </div>

        <div className="h-16 absolute border top-36 right-[34%] border-black hidden lg:block"></div>
        <div className="w-48 absolute border top-52 right-[34%]  border-black hidden lg:block"></div>

        <div className="h-48 absolute border bottom-44 right-[50%] border-black hidden lg:block"></div>
        <div className="w-24 xl:w-32 absolute border  left-[22%] hidden lg:block  border-black"></div>
        <div className="h-16 absolute border top-1/2 left-[22%] border-black hidden lg:block"></div>
        <div className="w-24 lg:w-[12%]  just  absolute border top-[16rem] left-[18%] hidden lg:block  border-black"></div>
        <button
          className="absolute bg-white h-4 w-4 rounded-full flex justify-center lg:hidden items-center top-[45%] animate-pulse"
          onClick={() => setIndex(0)}
        >
          +
        </button>
        <button
          className="absolute bg-white h-4 w-4 rounded-full flex justify-center lg:hidden items-center top-[38%] left-[44%] animate-pulse"
          onClick={() => setIndex(1)}
        >
          +
        </button>
        <button
          className="absolute bg-white h-4 w-4 rounded-full flex justify-center lg:hidden items-center bottom-[50%] left-[25%] animate-pulse "
          onClick={() => setIndex(2)}
        >
          +
        </button>
        <button
          className="absolute bg-white h-4 w-4 rounded-full flex justify-center lg:hidden items-center top-[35%] left-[30%] animate-pulse "
          onClick={() => setIndex(3)}
        >
          +
        </button>
        <div className="absolute lg:hidden bottom-[20%] px-2 backdrop-blur-sm">
          {index === 0 ? (
            <div>
              <span className="font-semibold text-md lg:text-lg">
                Seat Belt Pre-Tensioners with force limiters
              </span>
              <br />
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          ) : index === 1 ? (
            <div>
              <span className="font-semibold text-md lg:text-lg">
                6 Air Bags
              </span>
              <br />6 Air Bags to take the impact before it reaches you.
            </div>
          ) : index === 2 ? (
            <div>
              <span className="font-semibold text-md lg:text-lg">
                ABS with EBD
              </span>
              <br />
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          ) : (
            index === 3 && (
              <div>
                <span className="font-semibold text-md lg:text-lg">
                  ISOFIX child fix anchorages
                </span>
                <br />
                Standardized international child seat fitting system, for that
                perfect drive with your little ones.
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export const CarComp = () => {
  const details = {
    id: 1,
    name: "Invicto",
    price: "24,79,000",
    logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/D23+logo+without+outline+Black_125x35.webp",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/invicto-main-thubmnail-no-bg.webp",
    brouchure:
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Saboo+RKS_Invicto.pdf",
    explore: "/maruti-invicto-price-in-hyderabad",
    engineType: "SMART HYBRID / ELECTRIC HYBRID",
    fuelType: "PETROL",
    displacement: "1987 cc",
    power: "150.19bhp @ 6000rpm",
    torque: "188Nm @ 4400-5200rpm",
    fuelTank: "52 L",
    mileage: "23.24",
    tranmission: "Automatic",
    length: "4755 mm",
    width: "1850 mm",
    height: "1790 mm",
    wheelbase: "2850",
    turningRadius: "5.65",
    frontBrake: "Ventilated Disc",
    rearBrake: "Solid Disc",
    frontSuspension: "MacPherson Strut",
    rearSuspension: "Torsion Beam",
    seating: "7",
  };

  return (
    <div className="pt-10 pb-10 overflow-hidden bg-black lg:pt-24 lg:pb-16 ">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div className="flex flex-wrap w-full justify-center -mb-10 z-10  md:hidden text-white ">
          <div className="space-x-5 text-3xl md:text-4xl lg:text-5xl">
            Invicto
          </div>
          <div className="ml-2 text-3xl font-thin md:text-4xl lg:text-5xl">
            Specs
          </div>
        </div>
        <div className="flex items-center justify-center object-cover lg:w-1/2 overflow-hidden">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto-Balck.webp"
            alt=""
            className="scale-125"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="300"
          className="ml-2 text-gray-200 sm:ml-5 md:ml-0 lg:w-1/2"
        >
          <div className="hidden flex-wrap w-full mb-8  md:flex ">
            <div className="space-x-5 text-3xl md:text-4xl lg:text-5xl">
              Invicto
            </div>
            <div className="ml-2 text-3xl font-thin md:text-4xl lg:text-5xl">
              Specs
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">
                  Power (EPA est.)
                </div>
                <div className="font-thin text-md md:text-lg">
                  {details.power}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">Torque</div>
                <div className="font-thin text-md md:text-lg">
                  {details.torque}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">Length</div>
                <div className="font-thin text-md md:text-lg">
                  {details.length}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">width</div>
                <div className="font-thin text-md md:text-lg">
                  {details.width}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">height</div>
                <div className="font-thin text-md md:text-lg">
                  {details.height}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">
                  displacement
                </div>
                <div className="font-thin text-md md:text-lg">
                  {details.displacement}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">fuelType</div>
                <div className="font-thin text-md md:text-lg">
                  {details.fuelType}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">fuelTank</div>
                <div className="font-thin text-md md:text-lg">
                  {details.fuelTank}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">engineType</div>
                <div className="font-thin text-md md:text-lg">
                  {details.engineType}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">mileage</div>
                <div className="font-thin text-md md:text-lg">
                  {details.mileage}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">frontBrake</div>
                <div className="font-thin text-md md:text-lg">
                  {details.frontBrake}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">rearBrake</div>
                <div className="font-thin text-md md:text-lg">
                  {details.rearBrake}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">
                  frontSuspension
                </div>
                <div className="font-thin text-md md:text-lg">
                  {details.frontSuspension}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="w-10 mb-2 border-b"></div>
              <div>
                <div className="font-medium text-md md:text-lg">
                  rearSuspension
                </div>
                <div className="font-thin text-md md:text-lg">
                  {details.rearSuspension}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex justify-center mx-auto mt-10">
        <Link to="/compare">
          <div className="px-2 py-2 text-white duration-500 border-2 border-white rounded cursor-pointer lg:px-10 hover:bg-white hover:text-black text-md md:text-lg">
            Compare Models
          </div>
        </Link>
      </div>
    </div>
  );
};

function Col() {
  const videoRef = useRef(null);
  const [playingSegment, setPlayingSegment] = useState(0);
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };

  const jumpToTime = (timeInSeconds, segment) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeInSeconds;
      videoRef.current.play();
      setPlayingSegment(segment);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      const videoNode = videoRef.current; // Capture the current value of videoRef.current
      const handleTimeUpdate = () => {
        const currentTime = videoNode.currentTime;

        if (currentTime >= 2 && currentTime < 9) {
          setPlayingSegment(0);
        } else if (currentTime >= 9 && currentTime < 16) {
          setPlayingSegment(1);
        } else if (currentTime >= 16 && currentTime < 23) {
          setPlayingSegment(2);
        } else if (currentTime >= 23) {
          setPlayingSegment(3);
        }
      };

      videoNode.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoNode.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const colour = [
    {
      colorCode: "#163472",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Blue_810+x+411.webp",
      text: "NEXA BLUE (CELESTIAL)",
    },
    {
      colorCode: "#B6BABD",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/MAJESTIC_SILVER_810+x+411+webp.webp",
      text: "MAJESTIC SILVER",
    },
    {
      colorCode: "#ffffff",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/PLATINUM_WHITE_810+x+411+webp.webp",
      text: "MYSTIC WHITE",
    },
    {
      colorCode: "#b2aea9",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/AVANT_GRADE_BRONZE_810+x+411+webp.webp",
      text: "STELLAR BRONZE",
    },
  ];

  return (
    <div className="py-20 bg-black" onContextMenu={handleContextMenu}>
      <div className="">
        <video
          className="object-cover w-full h-full max-h-screen sm:pb-6"
          preload="auto"
          autoPlay
          ref={videoRef}
          loop
          // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Header+Banner_Desktop_1500x605.webp"
        >
          <source
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/videos/car+colors_1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          className={`text-center  w-max mx-auto tracking-wider text-lg px-2 my-2 lg:-mt-36 sm:-mt-28 sm:text-white `}
        >
          {colour[playingSegment].text}
        </div>
      </div>

      <div className="relative flex justify-center gap-1 ">
        <div
          className={`h-10 w-10 p-1 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
        >
          <div
            onClick={() => jumpToTime(2, 0)}
            className={`bg-[#163472] h-full w-full rounded-full `}
          ></div>
        </div>
        <div
          className={`h-10 w-10 p-1 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
        >
          <div
            onClick={() => jumpToTime(9, 1)}
            className={`bg-[#B6BABD] h-full w-full rounded-full`}
          ></div>
        </div>
        <div
          className={`h-10 w-10 p-1 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
        >
          <div
            onClick={() => jumpToTime(16, 2)}
            className={`bg-[#ffffff] h-full w-full rounded-full`}
          ></div>
        </div>
        <div
          className={`h-10 w-10 p-1 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
        >
          <div
            onClick={() => jumpToTime(23, 3)}
            className={`bg-[#b2aea9] h-full w-full rounded-full`}
          ></div>
        </div>
        <div
          className={`h-10 w-10  p-1 z-10 cursor-pointer  border-2 border-gray-200 rounded-full absolute duration-500 transition-all  ${
            playingSegment === 3
              ? "ml-[132px]"
              : playingSegment === 2
              ? "ml-[44px]"
              : playingSegment === 1
              ? "mr-[44px]"
              : playingSegment === 0 && "mr-[132px]"
          }`}
        ></div>
      </div>
    </div>
  );
}

export const CarEnq2 = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [method, setMethod] = useState();
  const [loader, setLoader] = useState(false);

  function handleSubmit(event) {
    // event.preventDefault();
    setLoader(true);

    // First API call
    axios
      .post("https://saboogroups.com/admin/api/enquiry", {
        name: name,
        email: email,
        phone: phone,
        model: model,
      })
      .then((res) => {
        setMethod("POST");
        toast.success("Enquiry sent successfully");
      })
      .catch((err) => {
        setLoader(false);
        toast.error("Something went wrong!");
        console.log(err);
      });
    // .finally(() => {
    //   setLoader(false);
    // });

    // Second API call
    axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
    Our Sales consultant will contact you shortly.
    
    Regards
    RKS Motor Pvt. Ltd.
    98488 98488
    www.saboomaruti.in
    www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log("SMS API Response:", res.data);
        // Handle the response from the SMS API if needed
      })
      .catch((err) => {
        console.error("Error sending SMS:", err);
        // Handle errors from the SMS API if needed
      })
      .finally(() => {
        setLoader(false);
      });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }
  return (
    <div className=" bg-black">
      <div className="container px-5 pt-8 mx-auto space-y-3 lg:px-0 ">
        <div className="pt-2 pb-6 text-3xl text-center uppercase lg:pb-8 sm:text-4xl md:text-5xl text-white">
          {title}
        </div>
        <form
          onSubmit={handleSubmit}
          action={
            pattern.test(phone) && phone.length === 10
              ? "https://crm.zoho.in/crm/WebToLeadForm"
              : "#"
          }
          name="WebToLeads54158000000752015"
          method={method}
          acceptCharset="UTF-8"
        >
          <input
            type="text"
            style={{ display: "none" }}
            name="xnQsjsdp"
            value="5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="text"
            style={{ display: "none" }}
            name="xmIwtLD"
            value="3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92"
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="actionType"
            value="TGVhZHM="
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="returnURL"
            value="https://www.saboonexa.in/thank-you?email=Email"
          />
          <input
            type="text"
            style={{ display: "none" }}
            id="ldeskuid"
            name="ldeskuid"
          />
          <input
            type="text"
            style={{ display: "none" }}
            id="LDTuvid"
            name="LDTuvid"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
            <div>
              <input
                className="w-full h-10 px-3 font-sans border-b border-black outline-none rounded-xl placeholder:text-lg placeholder:text-gray-400"
                placeholder="Name"
                id="Last_Name"
                name="Last Name"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="w-full h-10 px-3 font-sans border-b border-black outline-none rounded-xl placeholder:text-lg placeholder:text-gray-400"
                placeholder="Mobile"
                value={phone}
                id="Phone"
                name="Phone"
                type="tel"
                required
                minLength="10"
                maxLength="10"
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/[^1-9 ]/g, "") &&
                      e.target.value.replace(/ /g, "")
                  )
                }
              />
              {phone.length > 0 && phone.length < 10 ? (
                <small className="text-red-500">
                  Phone number must be 10 digits
                </small>
              ) : !pattern.test(phone) && phone.length === 10 ? (
                <small className="text-red-500">Phone number is invalid</small>
              ) : (
                ""
              )}
            </div>
            <div>
              <input
                className="w-full h-10 px-3 font-sans border-b border-black outline-none rounded-xl placeholder:text-lg placeholder:text-gray-400"
                placeholder="Email"
                type="email"
                id="Email"
                name="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.length > 0 && !emailPattern.test(email) ? (
                <small className="text-red-500">Invalid email address</small>
              ) : (
                ""
              )}
            </div>

            <select
              id="LEADCF6"
              name="LEADCF6"
              required
              onChange={(e) => setModel(e.target.value)}
              className="block w-full h-10 px-2 py-2 font-sans text-black bg-white border-b border-black shadow-sm rounded-xl focus:outline-none sm:text-sm md:text-lg placeholder:text-lg"
            >
              {/* <option defaultChecked>Select Model</option> */}
              <option value="" className="">
                Model
              </option>
              <option value="Invicto" className="">
                Invicto
              </option>
              <option className="bg-gray-100 " value="Fronx">
                Fronx
              </option>
              <option className="bg-gray-100 " value="Jimny">
                Jimny
              </option>
              <option className="bg-gray-100 " value="Grand Vitara">
                Grand Vitara
              </option>
              <option className="bg-gray-100 " value="Ciaz">
                Ciaz
              </option>
              <option className="bg-gray-100 " value="Baleno">
                Baleno
              </option>
              <option className="bg-gray-100 " value="Ignis">
                Ignis
              </option>
              <option className="bg-gray-100 " value="XL6">
                XL6
              </option>
            </select>

            <button
              type="submit"
              className=" border-gray-500 bg-white px-6 py-2.5 md:col-span-2 border hover:text-white hover:bg-black rounded-xl hover:border-gray-400 "
            >
              {loader ? (
                <div className="flex items-center justify-center">
                  <CgSpinner className="w-5 h-5 mr-2  animate-spin" />
                  SUBMITTING
                </div>
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>
          <div className="container mt-6 text-xs text-gray-600">
            <span className="font-semibold">*Disclaimer:</span> By clicking
            'SUBMIT', you have agreed to our Terms and Conditions.
            {/* <span className='font-semibold'>*Disclaimer:</span> I agree that
              by clicking the ‘Submit’ button , I am explicitly soliciting a
              call and message via whatsapp or any other medium from Saboo RKS
              motors on my ‘Mobile’. */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invicto;
