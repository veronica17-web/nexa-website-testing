import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
//confetti
// import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import { products } from "../../constants";
import { RiStarFill } from "react-icons/ri";
import { PiSteeringWheelThin } from "react-icons/pi";

// import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
// import { RiStarFill, RiStarHalfFill, RiPhoneFill } from "react-icons/ri";
// import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import EnquiryPopup from "../../components/utils/EnquiryPopup";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Range from "./Range";
import ShowRoom from "../../components/utils/ShowRoom";
import TestDrive from "../../components/utils/TestDrive";

function Home() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative">
      <Header />
      <Helmet>
        <title>Best Nexa Dealers in Hyderabad | Nexa Hyderabad</title>
        <meta
          name="title"
          content="Best Nexa Dealers in Hyderabad | Nexa Hyderabad"
        />
        <meta
          name="description"
          content="Saboo Nexa one of the best authorized Nexa dealers in Hyderabad.  Visit your nearest Saboo Nexa Hyderabad showroom to get best offers. Call now 98488 98488"
        />
        <meta
          name="keywords"
          content="Nexa Showrooms in Hyderabad, Nexa Delaers in Hyderabad, Nexa Cars Hyderabad, Nexa Balneo, Nexa Scross, Nexa Ignis, Nexa Ciaz, Nexa Xl6,Maruti baleno,maruti ciaz, maruti ignis, maruti xl6,maruti scross"
        />
        <meta name="author" content="BroaddCast Business Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboonexa.in/" />
        <meta
          property="og:title"
          content="Maruti Suzuki Authorized Car Dealer in Hyderabad & Secunderabad |RKS Motors"
        />
        <meta
          property="og:description"
          content="RKS Motor is one of the most trusted Nexa dealers in Hyderabad & Secunderabad. New Nexa car models Maruti Baleno, Maruti Baleno RS, Nexa Ignis, Nexa Scross, Maruti Ciaz & Nexa XL6."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.saboonexa.in/" />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Authorized Car Dealer in Hyderabad & Secunderabad |RKS Motors"
        />
        <meta
          property="twitter:description"
          content="RKS Motor is one of the most trusted Nexa dealers in Hyderabad & Secunderabad. New Nexa car models Maruti Baleno, Maruti Baleno RS, Nexa Ignis, Nexa Scross, Maruti Ciaz & Nexa XL6."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg"
        />
      </Helmet>
      <HomeVideo />
      <CarEnq title="NEXA CAR ENQUIRY" />

      <Range />
      <Navigate />
      <VehicleProducts />

      <SerFinInsur />
      <News />
      <Outlets />
      <Testimonials />
    </div>
  );
}

export const HomeVideo = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the video source URL based on the browser
  const videoSource = isSafari
    ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Invicto_safari.mov"
    : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/videos/WEBSITE+mp4.webm";

  return (
    <>
      <div className="relative top-0 left-0 w-full h-screen bg-black ">
        <video
          className="object-cover w-full h-full "
          preload="metadata"
          poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Header+Banner_Desktop_1500x605.webp"
          loop
          autoPlay
          playsInline
          muted
        >
          <source
            src={videoSource}
            type={isSafari ? "video/quicktime" : "video/mp4"}
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
            className="font-serif text-5xl lg:text-8xl "
          >
            INVICTO
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="500"
            className="mb-2 text-2xl lg:text-5xl lg:mb-4 "
          >
            THE LEAGUE OF EXTRAORDINARY
          </div>
          <Link to="/maruti-invicto-price-in-hyderabad">
            <button
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="500"
              className="px-4 py-2 text-white uppercase border border-white hover:bg-black hover:border-black lg:px-8"
            >
              Discover More
            </button>
          </Link>
        </div>
      </div>

      <EnquiryPopup
        open={open}
        setOpen={setOpen}
        phone={phone}
        setPhone={setPhone}
        title={"Book Now"}
      />
    </>
  );
};

export const CarEnq = ({ title }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [method, setMethod] = useState("");
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
        outlet: "",
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
    <>
      <div className="container px-5 pt-8 mx-auto space-y-3 lg:px-0">
        <div className="py-2 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl">
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
          <div></div>
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
                className="w-full h-10 px-3 font-sans border-b border-black outline-none placeholder:text-lg placeholder:text-gray-400 "
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
                className="w-full h-10 px-3 font-sans border-b border-black outline-none placeholder:text-lg placeholder:text-gray-400 "
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
                className="w-full h-10 px-3 font-sans border-b border-black outline-none placeholder:text-lg placeholder:text-gray-400 "
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
              className="block w-full h-10 px-2 py-2 font-sans bg-white border-b border-black shadow-sm focus:outline-none sm:text-sm md:text-lg placeholder:text-lg placeholder:text-gray-600 "
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
              className="border-b border-black px-6 py-2.5 md:col-span-2 hover:bg-black hover:text-white duration-200 "
            >
              {loader ? (
                <div className="flex items-center justify-center">
                  <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
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
    </>
  );
};

const Navigate = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [phone, setPhone] = useState("");
  return (
    <div className="container px-5 mx-auto lg:pt-4 md:px-3 lg:px-0 uppercase border py-2 mb-10 mt-16 justify-between items-start text-center hidden md:flex cursor-pointer shadow-lg shadow-gray-400">
      <div className=" border-r w-1/5  py-4 hover:font-medium group">
        <Link to="/maruti-nexa-showroom-outlets-in-hyderabad">
          <div className="flex flex-col gap-2 justify-center items-center px-1">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/location.webp"
              alt=""
              srcset=""
              className="h-8 lg:h-10"
            />
            <div>Locate a Showroom</div>
          </div>
        </Link>
      </div>

      <div
        className="border-r w-1/5  py-4 hover:font-medium group"
        onClick={() => setOpen3(true)}
      >
        <div className="flex flex-col gap-2 justify-center items-center px-1">
          <PiSteeringWheelThin className="text-3xl lg:text-4xl " />
          <div>Book a test drive</div>
        </div>
      </div>
      <div
        className="border-r w-1/5  py-4 hover:font-medium group"
        onClick={() => setOpen2(true)}
      >
        <div className="flex flex-col gap-2 justify-center items-center px-1">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/showroom.webp"
            alt=""
            srcset=""
            className="h-8 lg:h-10"
          />
          <div className=""> Book a showroom visit</div>
        </div>
      </div>

      <div
        className="border-r w-1/5  py-4 hover:font-medium group"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col gap-2 justify-center items-center px-1">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/mechanical.webp"
            alt=""
            srcset=""
            className="h-8 lg:h-10"
          />
          <div>Book a service</div>
        </div>
      </div>
      <div className=" w-1/5  py-4 hover:font-medium group">
        <Link to="/maruti-car-insurance">
          <div className="flex flex-col gap-2 justify-center items-center px-1">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/car-insurance.webp"
              alt=""
              srcset=""
              className="h-8 lg:h-10"
            />
            <div>Insurance</div>
          </div>
        </Link>
      </div>
      <EnquiryPopup
        open={open}
        setOpen={setOpen}
        phone={phone}
        setPhone={setPhone}
        title={"Book A SERVICE"}
      />
      <ShowRoom
        open={open2}
        setOpen={setOpen2}
        phone={phone}
        setPhone={setPhone}
        title={"Showroom Visit"}
      />
      <TestDrive
        open={open3}
        setOpen={setOpen3}
        phone={phone}
        setPhone={setPhone}
        title={"Test Drive"}
      />
    </div>
  );
};

const VehicleProducts = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <div className="container px-5 mx-auto lg:pt-4 md:px-3 lg:px-0">
      <div className="grid gap-4 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <div
            className="relative flex flex-col overflow-hidden border-t border-l border-gray-100 shadow-lg shadow-gray-200 hover:shadow-gray-300"
            key={item.id}
          >
            {item.price && (
              <div className="absolute top-3 right-5 ">
                <p className="flex items-center font-medium">₹ {item.price}*</p>
                <div className="text-sm font-light">ex-showroom</div>
              </div>
            )}

            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="500"
              className="flex-auto overflow-hidden"
            >
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="mx-auto product_image"
                />
              </Link>
            </div>

            <div className="flex items-center justify-between p-5 rounded">
              <img src={item.logo} className="w-32" alt={item.name} />
              <div className="flex items-center font-semibold">
                &darr;
                <a
                  href={item.brouchure}
                  target="_blank"
                  rel="noreferrer"
                  className="pl-1"
                >
                  Brochure
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 pb-5 mx-4">
              <Link
                to={item.explore}
                className="w-full p-2 text-sm text-center uppercase border border-gray-800 rounded "
              >
                Explore
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
        {/* <div className='sm:col-span-2'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+banner.webp'
            className='lg:mx-auto  lg:h-[400px] lg:w-full'
            alt='banner'
          />
        </div> */}
      </div>
      <EnquiryPopup
        open={open}
        setOpen={setOpen}
        phone={phone}
        setPhone={setPhone}
        title={"Book Now"}
      />
    </div>
  );
};

const SerFinInsur = () => {
  return (
    <div className="py-4 overflow-hidden text-white ">
      <div className="container hidden px-2 mx-auto space-y-2 lg:px-0 md:block">
        <div className="duration-500 hover:scale-95">
          <Link to="/book-online-maruti-nexa-car-service">
            {/* <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
              alt="service center"
              className="w-full max-w-full overflow-hidden shadow-lg rounded-3xl shadow-gray-500"
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="500"
            /> */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Maruti_Suzuki_Service_Ganesh_Chaturthi_September_Offers_Saboo_RKS_Motor.webp"
              alt="Website_Maruti_Suzuki_Service_Ganesh_Chaturthi_September_Offers_Saboo_RKS_Motor"
              className="w-full hidden sm:block rounded-3xl shadow-lg"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Website_Mobile_Maruti_Suzuki_Service_Ganesh_Chaturthi_September_Offers_Saboo_RKS_Motor.webp"
              alt="Website_Mobile_Maruti_Suzuki_Service_Ganesh_Chaturthi_September_Offers_Saboo_RKS_Motor.webp"
              className="sm:hidden w-full"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="500"
            className=""
          >
            <Link to="/maruti-car-insurance">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/home-page-banners/Insurance+Desktop.webp"
                alt="insurance"
                className="w-full max-w-full overflow-hidden duration-500 shadow-lg rounded-3xl hover:scale-95 shadow-gray-500"
              />
            </Link>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="500"
            className=""
          >
            <Link to="/maruti-car-finance">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/home-page-banners/Finance+Desktop.webp"
                alt="Finance"
                className="w-full max-w-full overflow-hidden duration-500 shadow-lg rounded-3xl shadow-gray-500 hover:scale-95"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-2 mb-2 overflow-hidden md:hidden lg:mx-0 rounded-3xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 4,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className="relative cursor-pointer">
              <Link to="/book-online-maruti-nexa-car-service/">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Nexa+Service+mobile+Hafeezpet.webp"
                  alt="Sevice Hafeezpet"
                  className="rounded-3xl"
                />
              </Link>
              <figcaption className="absolute px-4 -mt-16 text-lg text-white">
                <div className="text-xl">
                  <p>SERVICE</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with revolutionary technology</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="relative cursor-pointer">
              <Link to="/maruti-car-insurance">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Insurance+Mobile+800x800.webp"
                  alt="Insurance"
                  className="rounded-3xl"
                />
              </Link>
              <figcaption className="absolute px-4 -mt-16 text-lg text-white">
                <div className="text-xl">
                  <p>INSURANCE</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with a firm grip</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="relative cursor-pointer">
              <Link to="/maruti-car-finance">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Finance+Mobile+800x800.webp"
                  alt="Finance"
                  className="rounded-3xl"
                />
              </Link>
              <figcaption className="absolute px-4 -mt-16 text-lg text-white">
                <div className="text-xl md-20">
                  <p>FINANCE</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with utmost comfort</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="relative cursor-pointer">
              <Link to="/accessories">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Accessories+Mobile+800x800.webp"
                  alt="Accessories"
                  className="rounded-3xl"
                />
              </Link>
              <figcaption className="absolute px-4 -mt-16 text-lg text-white">
                <div className="text-xl">
                  <p>ACCESSORIES</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with a Powerful Persona</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
      <section
        data-aos="zoom-in"
        data-aos-delay="0"
        data-aos-duration="500"
        className="container relative py-2 mx-auto group"
      >
        <Link to="/maruti-suzuki-24/7-service-in-hyderabad ">
          <div className="justify-around hidden duration-500 bg-black shadow-lg md:flex rounded-3xl hover:scale-95 shadow-black">
            <img
              // src={require('../../assets/nexa service banner.jpg')}
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/nexa+service+banner.jpg"
              className="w-full overflow-hidden rounded-3xl "
              alt="Service Banner"
            />
          </div>
          <div className="px-2 md:hidden">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/nexa+service+banner+mobile.jpg"
              className="w-full rounded-3xl"
              alt="Service Banner"
            />
          </div>
          <div className="absolute  bottom-[23%] left-[16%] md:left-[12%] text-white py-2 lg:py-3 px-2 lg:px-10 border border-white rounded-lg lg:rounded-xl group-hover:bg-white group-hover:text-black cursor-pointer duration-500">
            Book Your Serivce
          </div>
        </Link>
      </section>
    </div>
  );
};

const News = () => {
  return (
    <div className="container px-2 pt-3 mx-auto lg:px-0 ">
      <div className="mb-3">
        <span className="overflow-hidden text-4xl md:text-5xl">NEWS</span>
        {/* <span className='text-5xl font-medium uppercase md:text-6xl'>
          SABOO NEXA WORLD
        </span> */}
        <div className="relative md:whitespace-nowrap ">
          <div className="inline-flex pt-2 pb-2 overflow-x-hidden text-5xl font-medium uppercase group-hover:animate-type-reverse text-brand-accent md:h-20 md:animate-type-second md:text-6xl">
            SABOO NEXA WORLD
          </div>
          <div className="box-border hidden w-1 h-10 -mb-2 bg-black md:inline-block md:animate-cursor will-change-transform md:-mb-4 md:h-16"></div>
        </div>
      </div>
      <div className="">
        {/* <div className='h-[80vh] object-cover'> */}
        <div className="flex flex-col gap-4 mb-8 lg:flex-row ">
          <div
            // data-aos="zoom-in"
            // data-aos-delay="0"
            // data-aos-duration="500"
            className=" lg:w-1/3 relative "
          >
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/1-upload.webp"
              alt=" Maruti Suzuki Jimny hits Hyderabad roads"
              srcSet=""
              className="overflow-hidden bg-black shadow-lg rounded-2xl shadow-gray-500 saturate-200 select-none"
            />
            <div className="   mt-4">
              <div className="uppercase ">
                {/* <div className="pb-2 text-lg  lg:text-xl">21 JUN 2023</div> */}
                <div className="pb-2 text-xl font-medium lg:text-2xl">
                  Maruti Suzuki Jimny hits Hyderabad roads
                </div>
              </div>
              <div>
                <Link
                  to="/maruti-nexa-latest-news"
                  className="relative inline-flex items-center justify-start px-4 py-3 overflow-hidden lg:px-6 group"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left duration-200 ease-in-out whitespace-nowrap text-gray-600transition-colors group-hover:text-white">
                    Read More
                  </span>
                  <span className="absolute inset-0 border border-gray-600"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/3 relative  ">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/2-upload+ama.webp"
              alt=" Maruti Suzuki delivers Jimny to customers"
              srcSet=""
              className="overflow-hidden bg-black shadow-lg rounded-2xl shadow-gray-500 brightness-110 saturate-150"
            />
            <div className="  mt-4">
              <div className="uppercase ">
                {/* <div className="pb-2 text-lg  lg:text-xl">21 JUN 2023</div> */}
                <div className="pb-2 text-xl font-medium lg:text-2xl">
                  Maruti Suzuki delivers Jimny to customers
                </div>
              </div>
              <div>
                <Link
                  to="/maruti-nexa-latest-news"
                  className="relative inline-flex items-center justify-start px-4 py-3 overflow-hidden lg:px-6 group"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left duration-200 ease-in-out whitespace-nowrap text-gray-600transition-colors group-hover:text-white">
                    Read More
                  </span>
                  <span className="absolute inset-0 border border-gray-600"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/3 relative  ">
            <div>
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/full-blog-section/Nexa_0003_v6velugu.webp"
                alt="   హైదరాబాద్ కస్టమర్ల చేతికి జిమ్మీ"
                srcSet=""
                className="overflow-hidden bg-black shadow-lg rounded-2xl shadow-gray-500 brightness-110 saturate-150"
              />
            </div>
            <div className=" gap-2  rounded-2xl mt-4 ">
              {/* <div className="pb-2 text-lg  lg:text-xl">21 JUN 2023</div> */}
              <div className="pb-2 text-xl font-medium lg:text-2xl uppercase">
                హైదరాబాద్ కస్టమర్ల చేతికి జిమ్మీ
              </div>

              <Link
                to="/maruti-nexa-latest-news"
                className="relative inline-flex items-center justify-start px-4 py-3 overflow-hidden lg:px-6 group w-min"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left duration-200 ease-in-out whitespace-nowrap text-gray-600transition-colors group-hover:text-white">
                  Read More
                </span>
                <span className="absolute inset-0 border border-gray-600"></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-5xl font-medium  uppercase md:text-6xl mb-4">
          gallery
        </div>
        <div className="flex gap-4 flex-col md:flex-row  ">
          <div className="md:w-1/3  duration-500 hover:z-10 relative group overflow-hidden rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
              alt="Grand Launch of Suzuki Jimny at our Nexa Lumbini"
              className="object-cover  overflow-hidden duration-500 bg-black shadow-lg rounded-2xl shadow-gray-500 saturate-200 select-none group-hover:scale-105"
            />
            <Link to="/gallery">
              <div className="hidden  absolute inset-0 group-hover:flex  flex-col justify-center items-center gap-4  text-white duration-700 bg-black bg-opacity-50 rounded-2xl">
                {/* <div className="text-xl text-white">View More </div> */}
                <div className="text-whtie bg-black border px-4 py-2">
                  + View more
                </div>
              </div>
            </Link>
          </div>
          <div className="md:w-1/3  duration-500 hover:z-10 relative group overflow-hidden rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/2.webp"
              alt="Grand Launch of Suzuki Jimny at our Nexa Lumbini"
              className="object-cover  overflow-hidden duration-500 bg-black shadow-lg rounded-2xl shadow-gray-500 saturate-200 select-none group-hover:scale-105"

              // data-aos="zoom-in"
              // data-aos-delay="0"
              // data-aos-duration="500"
            />{" "}
            <Link to="/gallery">
              {/* <div className="text-xl text-white">View More </div> */}
              <div className="hidden  absolute inset-0 group-hover:flex  flex-col justify-center items-center gap-4  text-white duration-700 bg-black bg-opacity-50 rounded-2xl">
                {/* <div className="text-xl text-white">View More </div> */}
                <div className="text-whtie bg-black border px-4 py-2">
                  + View more
                </div>
              </div>
            </Link>
          </div>
          <div className="md:w-1/3 duration-500 hover:z-10 relative group overflow-hidden rounded-2xl">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/4.webp"
              alt="Grand Launch of Suzuki Jimny at our Nexa Lumbini"
              className="object-cover  overflow-hidden duration-500 bg-black shadow-lg rounded-2xl shadow-gray-500 saturate-200 select-none group-hover:scale-105"

              // data-aos="zoom-in"
              // data-aos-delay="0"
              // data-aos-duration="500"
            />
            <Link to="/gallery">
              <div className="hidden  absolute inset-0 group-hover:flex  flex-col justify-center items-center gap-4  text-white duration-700 bg-black bg-opacity-50 rounded-2xl">
                {/* <div className="text-xl text-white">View More </div> */}
                <div className="text-whtie bg-black border px-4 py-2">
                  + View more
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="my-6">
          <div className="my-4 text-2xl border-b-2 border-gray-600 rounded w-min whitespace-nowrap">
            26 May 2023
          </div>
          <div className="flex flex-col justify-between gap-4 lg:items-center lg:flex-row ">
            <div className="text-xl font-medium uppercase sm:text-3xl lg:text-4xl">
              Grand Launch of Suzuki Jimny at our Nexa Lumbini
            </div>
            <div>
              <Link
                to="/gallery"
                className="relative inline-flex items-center justify-start px-4 py-3 overflow-hidden lg:px-6 group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out whitespace-nowrap group-hover:text-white">
                  See More
                </span>
                <span className="absolute inset-0 border border-gray-800"></span>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="container px-2 pt-10 pb-16 mx-auto space-y-4 lg:px-0 ">
      {/* <div className="overflow-hidden text-4xl uppercase md:text-5xl">
        SABOO NEXA
      </div>
      <div className="relative md:whitespace-nowrap ">
        <div className="inline-flex overflow-x-hidden text-5xl font-medium uppercase group-hover:animate-type-reverse text-brand-accent md:h-20 md:animate-type whitespace-nowrap md:text-6xl">
          Testimonials
        </div>
        <span className="box-border hidden w-1 h-10 bg-black md:inline-block md:animate-cursor will-change-transform md:-mb-4 md:h-16"></span>
      </div> */}
      <div className="">
        <span className="overflow-hidden text-4xl md:text-5xl">SABOO NEXA</span>
        {/* <span className='text-5xl font-medium uppercase md:text-6xl'>
          SABOO NEXA WORLD
        </span> */}
        <div className="relative md:whitespace-nowrap ">
          <div className="inline-flex pt-2 pb-2 overflow-x-hidden text-4xl font-medium uppercase group-hover:animate-type-reverse text-brand-accent md:animate-type md:text-5xl lg:text-6xl">
            Testimonials
          </div>
          <div className="-mb-2  box-border md:inline-block h-10 w-1 hidden md:animate-cursor bg-black will-change-transform md:-mb-2.5 md:h-16 "></div>
        </div>
      </div>
      <div className="pb-3 ">
        At Saboo RKS, we have implemented an advanced process that guarantees
        all reviews are authored by genuine individuals, accurately reflecting
        their real-life experiences.
      </div>

      <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-3 lg:gap-10 xl:gap-20">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="shadow-lg shadow-gray-500 rounded-3xl  bg-[#000000f4] "
        >
          <Link to="/testimonials">
            {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
            <div className="flex flex-col justify-center h-full py-8">
              <div className="ml-10 text-4xl text-gray-500 animate-pulse">
                <BsQuote />
              </div>
              <p className="text-lg text-center text-gray-100 uppercase">
                ROHIN KUMAR
              </p>
              <div className="flex items-center justify-center text-red-600">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <p className="px-5 mt-6 text-center text-gray-200">
                Great experience buying my new XL6. It all started with the
                praveen one of the RM making a call about my interest followed
                by Mr. Abishek's cordial and informative interactions that made
                me go with RKs
              </p>
              <div className="mr-10 text-4xl text-gray-500 rotate-180 animate-pulse">
                <BsQuote />
              </div>
            </div>
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="shadow-lg shadow-gray-500 rounded-3xl bg-[#000000f4] "
        >
          <Link to="/testimonials">
            {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
            <div className="flex flex-col justify-center h-full py-8">
              <div className="ml-10 text-4xl text-gray-500 animate-pulse">
                <BsQuote />
              </div>
              <p className="text-lg text-center text-gray-100 uppercase">
                JYOTHSNA INKOLLU
              </p>
              <div className="flex items-center justify-center text-red-600">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                {/* <RiStarHalfFill /> */}
              </div>
              <div className="px-5 mt-6 text-center text-gray-100">
                This is the best service center i have seen still now. Best
                service and best staff.
              </div>
              <div className="mr-10 text-4xl text-gray-500 rotate-180 animate-pulse lg:mt-4 ">
                <BsQuote />
              </div>
            </div>
          </Link>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="shadow-lg shadow-gray-500 rounded-3xl bg-[#000000f4] "
        >
          <Link to="/testimonials">
            <div className="flex flex-col justify-center h-full py-8">
              <div className="ml-10 text-4xl text-gray-500 animate-pulse">
                <BsQuote />
              </div>
              <p className="text-lg text-center text-gray-100 uppercase">
                JHANSI PRIYA
              </p>
              <div className="flex items-center justify-center text-red-600 ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <p className="px-5 mt-6 text-center text-gray-100">
                It was a fabulous experience with you. Thanks a lot for the
                support provided by you, on time delivery, info about vehicle &
                Discounts. Good to have an executive like you. All the best, for
                your future endeavour.
              </p>
              <div className="mr-10 text-4xl text-gray-500 rotate-180 animate-pulse">
                <BsQuote />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Outlets = () => {
  return (
    <div className="container px-2 py-10 mx-auto lg:px-0 ">
      <div className="text-5xl font-medium text-right uppercase md:text-6xl">
        OUTLETS
      </div>

      <br />
      <div className="mb-6 text-right">
        To ensure that you receive the ultimate Nexa experience, we have
        strategically positioned ourselves in three prominent hotspots
        throughout Hyderabad
      </div>

      <div className="container grid grid-cols-1 gap-4 mx-auto lg:grid-cols-3 lg:gap-10 xl:gap-20 ">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden"
        >
          <div className="bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
          <div className="mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl xl:text-4xl">
            Nexa Lumbini
          </div>
          {/* <div className="mb-2">Adarsh Nagar, Hyderabad - 500063</div> */}
          <a
            href="https://www.google.com/maps/place/NEXA/@17.407435,78.472675,14z/data=!4m5!3m4!1s0x0:0x167869bcabc7428b!8m2!3d17.407435!4d78.4726753?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
              style={{
                backgroundImage:
                  'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/lumbini_outlet.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </a>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden"
        >
          <div className="bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
          <div className="mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl xl:text-4xl">
            Nexa Jubilee
          </div>
          {/* <div className="mb-2">Jubilee Hills, Hyderabad - 500033</div> */}
          <a
            href="https://www.google.com/maps/place/NEXA/@17.439431,78.398485,14z/data=!4m5!3m4!1s0x0:0x1cb759ff5f828d3!8m2!3d17.4394309!4d78.398485?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
              style={{
                backgroundImage:
                  'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/jubilee-outlet.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </a>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden"
        >
          <div className="bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
          <div className="mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl xl:text-4xl">
            Nexa Hafeezpet
          </div>
          {/* <div className="mb-2">Hafeezpet, Hyderabad - 500049</div> */}
          <a
            href="https://goo.gl/maps/rgoP8TXGQ9b3WvYu8"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
              style={{
                backgroundImage:
                  'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/hafeezpet-outlet.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

// Define default props for CarEnq
CarEnq.defaultProps = {
  title: "ENQUIRY FORM",
};

export default Home;
