import React from "react";
import { Link } from "react-router-dom";

function ServiceFinanceInsu() {
  return (
    <div className="mx-auto container space-y-5 px-5 lg:px-0">
      <Link to="/">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-Nexa-Service-Center.webp"
          alt="service center"
          className="max-w-full w-full"
        />
      </Link>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Link to="/">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-RKS-Nexa-Car-Finance.webp"
              alt="Finance"
              className="max-w-full w-full"
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-RKS-Nexa-Car-Insurance.webp"
              alt="Finance"
              className="max-w-full w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceFinanceInsu;
