import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { accsliders } from "../../constants";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

function Accessories() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Best Maruti Suzuki Dealer in Hyderabad & Secundrabad | Saboo Nexa
        </title>
        <meta
          name="title"
          content="Best Maruti Suzuki Dealer in Hyderabad & Secundrabad | Saboo Nexa"
        />
        <meta
          name="description"
          content="SABOO Maruti is Hyderabad’s leading automobile dealership and has been driving growth in domains of automobile sales and service over the last four decades. We are extensively spread across the city with four sales outlets, seven workshops, one commercial outlet and two premium car outlets NEXA."
        />
        <meta name="keywords" content="Maruti dealers in Hyderabad" />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboonexa.in/about-us/" />
        <meta
          property="og:title"
          content="Maruti Suzuki Nexa Car Dealer in Hyderabad & Secunderabad |Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Saboo Nexa is an Authorized Maruti Suzuki Nexa Car Dealer in Hyderabad. Visit Our Nearest Branch to get the Best Offers, Low Down-payment & Low EMI Options on New Maruti Nexa Cars. Call us - 98488 98488"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/About-us.webp"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/about-us/"
        />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Nexa Car Dealer in Hyderabad & Secunderabad |Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Saboo Nexa is an Authorized Maruti Suzuki Nexa Car Dealer in Hyderabad. Visit Our Nearest Branch to get the Best Offers, Low Down-payment & Low EMI Options on New Maruti Nexa Cars. Call us - 98488 98488"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/About-us.webp"
        />
      </Helmet>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper slider-home"
      >
        {accsliders.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.img} className="max-w-full w-full" alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="shadow sm:px-0 px-4">
        <p className="mx-auto container py-4">
          <Link to="/">Home</Link> / Accessories
        </p>
      </div>
      <h1 className="text-center text-3xl pt-16 font-bold">
        GENUINE NEXA ACCESSORIES
      </h1>
      <div className="m-8">
        <p className="mx-auto sm:container py-4">
          We understand that your car is a worthy possession and you would like
          to adorn it with accessories that will make it a true manifestation of
          yourself. Redefine your passion for driving and style your drive with
          stylish exteriors, modish interiors and a wide variety of fitments
          from an unparalleled range of Genuine NEXA Accessories
        </p>
      </div>
      <h3 className="text-center text-3xl pt-2font-bold">
        EXPLORE ACCESSORIES BY CATEGORY
      </h3>
      <div className="container mx-auto m-28">
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Car-Wheel.webp"
              className="h-48  md:h-full md:w-68"
              alt="Maruti-Suzuki-Nexa_Jubilee"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Accessories-Seating.webp"
              className="h-48  md:h-full md:w-68"
              alt="Maruti-Suzuki-Nexa_Jubilee"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Kit.webp"
              className="h-48  md:h-full md:w-68"
              alt="Maruti-Suzuki-Nexa_Jubilee"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Price-List.webp"
              className="h-48  md:h-full md:w-68"
              alt="Maruti-Suzuki-Nexa_Jubilee"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Car-Perfume.webp"
              className="h-48  md:h-full md:w-68"
              alt="Maruti-Suzuki-Nexa_Jubilee"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Nexa-Car-Back-Camera.webp"
              className="h-48  md:h-full md:w-68"
              alt="Maruti-Suzuki-Nexa_Jubilee"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/nexa-accessories/Saboo-Maruti-Suzuk-Nexa-Genuine-Accessories-Kit.webp"
              className="h-48  md:h-full md:w-68"
              alt="Maruti-Suzuki-Nexa_Jubilee"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h3 className="text-center text-3xl pt-2 font-bold">
        CAR CABIN PROTECTIVE PARTITION
      </h3>

      <div className="container mx-auto py-16 ">
        <div className="grid md:grid-cols-3 gap-4 px-5">
          <div>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/saboo-Nexa-car-cabin.jpeg"
              className="h-48  md:h-full md:w-68"
              alt="Maruti-Suzuki-Nexa_Jubilee"
            />
          </div>
          <div className="space-y-4 col-span-2">
            <p className="text-gray-100">
              <span className="text-black font-medium">
                <h3 className="text-xl pt-2 font-bold">DESCRIPTION</h3>
                <ol>
                  <li className="list-disc list-outside">
                    {" "}
                    Isolates front and rear car cabin.
                  </li>
                  <li className="list-disc">
                    {" "}
                    Prevents transfer of droplets within the car due to
                    coughing/sneezing/talking.
                  </li>
                  <li className="list-disc">
                    {" "}
                    Made of Virgin grade premium Poly Vinyl Chloride material.
                  </li>
                  <li className="list-disc">
                    {" "}
                    Clear visibility and complete coverage from roof to floor.
                  </li>
                </ol>
                <h3 className="text-xl pt-2 font-bold">FEATURES AND USAGE</h3>
                <ol>
                  <li className="list-disc list-outside">
                    {" "}
                    Isolates front and rear car cabin.
                  </li>
                  <li className="list-disc">
                    {" "}
                    Prevents transfer of droplets within the car due to
                    coughing/sneezing/talking.
                  </li>
                  <li className="list-disc">
                    {" "}
                    Made of Virgin grade premium Poly Vinyl Chloride material.
                  </li>
                  <li className="list-disc">
                    {" "}
                    Clear visibility and complete coverage from roof to floor.
                  </li>
                </ol>
                <h3 className="text-xl pt-2 font-bold">
                  Color:<span className="text-gray-500 ">Transparent</span>
                </h3>
                <h3 className="text-xl pt-2 font-bold">
                  Quantity :<span className="text-gray-500">1</span>
                </h3>
                <h3 className="text-xl pt-2 font-bold">
                  Size:
                  <span className="text-gray-500">
                    As per car cabin- varies on model level
                  </span>
                </h3>
                <h3 className="text-xl pt-2 font-bold">
                  Point of Sale:
                  <span className="text-gray-500">
                    Usage Applicability Chauffer driven vehicles, convenient
                    family outings.
                  </span>
                </h3>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="m-8 mx-auto container w-full">
        <table className="w-full ">
          <thead className="bg-black text-gray-100">
            {" "}
            <tr>
              <th className="border border-slate-300 h-12">S.NO</th>
              <th className="border border-slate-300">PART NUMBER</th>
              <th className="border border-slate-300">PART DESCRIPTION</th>
              <th className="border border-slate-300">MRP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 pl-2 h-12">1</td>
              <td className="border border-slate-300 pl-2">990J0M999CV-CPB</td>
              <td className="border border-slate-300 pl-2">
                Car Cabin Protective Partition-Baleno
              </td>
              <td className="border border-slate-300 pl-2">₹ 799 *</td>
            </tr>
            <tr>
              <td className="border border-slate-300 pl-2 h-12">2</td>
              <td className="border border-slate-300 pl-2">990J0M999CV-CP6</td>
              <td className="border border-slate-300 pl-2">
                Car Cabin Protective Partition-XL6
              </td>
              <td className="border border-slate-300 pl-2">₹ 799 *</td>
            </tr>
            <tr>
              <td className="border border-slate-300 pl-2 h-12">3 </td>
              <td className="border border-slate-300 pl-2">990J0M999CV-CP1</td>
              <td className="border border-slate-300 pl-2">
                Car Cabin Protective Partition-Ciaz
              </td>
              <td className="border border-slate-300 pl-2">₹ 799 *</td>
            </tr>
            <tr>
              <td className="border border-slate-300 pl-2 h-12">4</td>
              <td className="border border-slate-300 pl-2">990J0M999CV-CP5</td>
              <td className="border border-slate-300 pl-2">
                Car Cabin Protective Partition-S-Cross
              </td>
              <td className="border border-slate-300 pl-2">₹ 799 *</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Accessories;
