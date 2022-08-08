import React from "react";
import Helmet from "react-helmet";
import { ImCheckmark } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function Thankyou() {
  return (
    <>
    <Header />
      <Helmet>
        <meta
          name="title"
          content="Maruti Suzuki Nexa Showroom, Car Finance, Maruti Insurance |SabooNexa "
        />
        <meta
          name="description"
          content="RKS Motor is one of the most trusted Nexa dealers in Hyderabad & Secunderabad. New Nexa car models Maruti Baleno, Maruti Baleno RS, Nexa Ignis, Nexa Scross, Maruti Ciaz & Nexa XL6."
        />
        <meta name="keywords" content="Nexa Showrooms in Hyderabad" />
        <meta name="author" content="Broaddcast" />
      </Helmet>

        <div className="py-16">
        <h1 className="flex justify-center text-green-700 text-9xl">
          <ImCheckmark />
        </h1>
        <h4 className="text-center font-semibold text-3xl">THANK YOU!</h4>
        <p className="text-center mt-6">
          Your Enquiry has been Processed Successfully. Our Executive will get
          in touch with you shortly.
        </p>
        <Link to="/" className="flex items-center justify-center py-8">
          <BsArrowRight /> &nbsp;Back to Home
        </Link>
        </div>
    </>
  );
}

export default Thankyou;
