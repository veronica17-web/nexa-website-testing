import React, { useState } from "react";
import Header from "./components/Header/Header";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { products } from "./constants";
import { Helmet } from "react-helmet";

function Compare({ first, second }) {
  const [selec1, setSelec1] = useState(0);
  const [selec2, setSelec2] = useState(1);
  const [selec3, setSelec3] = useState(2);
  const [third, setThird] = useState(false);

  // useEffect(() => {
  //   if (first !== undefined) setSelec1(first);
  //   if (second !== undefined) setSelec1(second);
  // }, []);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelec1(selectedIndex);
  };
  const handleSelectChange2 = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelec2(selectedIndex);
  };
  const handleSelectChange3 = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelec3(selectedIndex);
  };

  return (
    <>
      <Helmet>
        <title>Compare Cars | Nexa Hyderabad | Saboo Nexa</title>
        <meta
          name="title"
          content="Compare Cars | Nexa Hyderabad | Saboo Nexa"
        />
        <meta
          name="description"
          content="Best Nexa Showroom in Hyderabad. Saboo Nexa onde of the leading Nexa car dealers in Hyderabad. "
        />
        {/* <meta
          name="keywords"
          content="Nexa Ciaz car price, Offers on Nexa Ciaz, Maruti Ciaz mileage, Ciaz Specifications, Nexa ciaz petrol price, Maruti ciaz on road price, Maruti ciaz variants, ciaz images, ciaz mileage, Nexa ciaz price in hyderabad, Maruti ciaz price in hyderabad, ciaz price in hyderabad, ciaz onroad price in hyderabad, offers on ciaz, ciaz offers 2022, new ciaz price, new ciaz price in hyderabad, new ciaz 2022 price, new ciaz 2022 onroad price, ciaz petrol price in hyderabad, ciaz 2022 petrol price in hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
        />
        <meta
          property="og:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
        />
        <meta
          property="twitter:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        /> */}
      </Helmet>
      <Header col={true} />
      <p className="pt-16 text-2xl font-medium text-center uppercase sm:text-3xl md:text-4xl lg:pt-24">
        Compare Cars
      </p>

      <div className="container flex justify-center px-3 mx-auto mb-20">
        <div className="flex justify-center  ">
          <div className="relative">
            <div className="flex justify-end overflow-hidden">
              <div className="mb-6 sm:scale-110 w-1/2 lg:w-1/3 ">
                <img src={products[selec1].img} alt="" srcset="" className="" />
              </div>
              <div className="mb-6 sm:scale-110 w-1/2 lg:w-1/3 ">
                <img src={products[selec2].img} alt="" srcset="" className="" />
              </div>

              <div className="mb-6 sm:scale-110 hidden  lg:w-1/3 lg:block group relative ">
                <img
                  src={products[selec3].img}
                  alt=""
                  srcset=""
                  className={`${!third && "opacity-0"}`}
                />
                <div
                  className={`rounded-full w-10 h-10 cursor-pointer bg-gray-500 text-white  hidden absolute top-8 right-8 ${
                    third &&
                    "block group-hover:flex justify-center items-center"
                  } `}
                  onClick={() => setThird(false)}
                >
                  x
                </div>
              </div>
            </div>
            <div className="sticky left-0 py-4 bg-white top-16 lg:top-20 grid grid-cols-2 lg:grid-cols-3 gap-4 ">
              <select
                name="product"
                id="product"
                onChange={handleSelectChange}
                className="text-2xl lg:text-4xl outline-none border-b col-span-1"
                // value={selec1}
              >
                {products.map((item, i) => (
                  <option
                    key={i}
                    value={item.name}
                    className="text-lg "
                    selected={i === selec1}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                name="product"
                id="product"
                onChange={handleSelectChange2}
                className="text-2xl lg:text-4xl outline-none border-b col-span-1"
                // value={selec1}
              >
                {products.map((item, i) => (
                  <option
                    key={i}
                    value={item.name}
                    className="text-lg "
                    selected={i === selec2}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="hidden lg:block">
                {!third ? (
                  <div className="flex justify-center items-center">
                    Add Car{" "}
                    <button
                      className="px-2 border rounded border-black ml-2 text-xl "
                      onClick={() => setThird(true)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <select
                    name="product"
                    id="product"
                    onChange={handleSelectChange3}
                    className="text-2xl lg:text-4xl outline-none border-b col-span-1 w-full "
                    // value={selec1}
                  >
                    {products.map((item, i) => (
                      <option
                        key={i}
                        value={item.name}
                        className="text-lg "
                        selected={i === selec3}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <div>
              <div className="mt-6">
                <span className="text-gray-500">Base Price</span>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].price}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].price}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].price}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-gray-500">Power</span>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].power}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].power}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].power}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-gray-500">frontBrake</span>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].frontBrake}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].frontBrake}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].frontBrake}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-gray-500">rearBrake</span>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].rearBrake}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].rearBrake}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].rearBrake}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-gray-500">Seating (Up to)</span>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].seating}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].seating}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].seating}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-gray-500">height</span>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].height}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].height}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].height}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-gray-500">width</span>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].width}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].width}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].width}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-gray-500">Length</span>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].length}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].length}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].length}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-gray-500">fuelTank</span>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec1].fuelTank}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                    {products[selec2].fuelTank}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl xl:text-3xl hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].fuelTank}
                  </div>
                </div>
              </div>
              {/* <div className="mt-8">
              <span className="text-gray-500">displacement</span>
              <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">
                {products[selec1].displacement}
              </div>
            </div>
            <div className="mt-8">
              <span className="text-gray-500">fuelType</span>
              <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">{products[selec1].fuelType}</div>
            </div>
            <div className="mt-8">
              <span className="text-gray-500">engineType</span>
              <div className="pt-2 md:text-lg lg:text-2xl xl:text-3xl">{products[selec1].engineType}</div>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="z-10 -mr-20">
            {products.map((item, i) => (
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto scale-110 product_image "
              />
            ))}
          </div>
          <div>
            {products.map((item, i) => (
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto scale-110 product_image"
              />
            ))}
          </div> */}
    </>
  );
}

export default Compare;
