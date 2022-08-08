import React from "react";
import Helmet from "react-helmet";
import { FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { testimonials } from "../../constants";

function Testimonial() {
  return (
    <>
      <Header />
      <Helmet>
        <title>Client Testimonials | Saboo Nexa | RKS Motor</title>
        <meta
          name="title"
          content="Client Testimonials | Saboo Nexa | RKS Motor"
        />
        <meta
          name="description"
          content="Read client reviews of Maruti Suzuki Baleno, Nexa Ignis, Maruti Ciaz, Nexa XL6 & Maruti SCross. Call us 98488 98488 for latest offers on Maruti Nexa cars."
        />
      </Helmet>
      <div className="bg-[#15151e] py-16 ">
        <p className="text-center text-white uppercase text-3xl font-semibold">
          Testimonials
        </p>
        <p className="text-gray-100 text-center text-xs tracking-wider mt-1">
          What Customers Say About Us
        </p>
      </div>
      <div className="shadow sm:px-0 px-4">
        <p className="mx-auto container py-4"><Link to='/'>Home</Link> / Testimonials</p>
      </div>
      <div className="pt-8 pb-16 container mx-auto space-y-7 px-4 sm:px-0">
        {testimonials.map((item) => (
          <div
            className="shadow-[0px_0px_15px_3px_rgb(0,0,0,21%)] rounded-xl p-5 space-y-5"
            key={item.author}
          >
            <p className="text-gray-600">
              <i>"{item.text}"</i>
            </p>
            <div className="flex justify-between">
              <p className="font-bold">
                <i>{item.author}</i>
              </p>
              <FaQuoteRight size={48} className="text-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testimonial;
