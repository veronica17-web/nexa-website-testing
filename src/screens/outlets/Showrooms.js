import React from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";

function Showrooms() {
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Nexa Showrooms in Hyderabad & Secundrabad | Saboo Nexa
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Nexa Showrooms in Hyderabad & Secundrabad | Saboo Nexa"
        />
        <meta
          name="description"
          content="Saboo nexa is a leading Maruti Suzuki car dealer in Hyderabad & Secundrabad Telangana. Nexa jubliee Adress 1-65/5, KKR Square, Kavuri Hills, Madhapur, Jubilee hills, Opp - Bantia Furnitures, Hyderabad, Telangana - 500033"
        />
        <meta
          name="keywords"
          content="Maruti Suzuki Nexa Showrooms in Hyderabad"
        />
        <meta name="author" content="Broaddcast" />
      </Helmet>
      <Header />
      <div className="h-16 lg:h-20 bg-black"></div>
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Outlet.webp"
        className="max-w-full w-full "
        alt="finance banner"
      />
      {/* <div className="shadow sm:px-0 px-4">
        <p className="mx-auto container py-4"><Link to='/'>Home</Link> / Showroom</p>
      </div> */}
      <div className="container px-2 py-10 mx-auto lg:px-0 ">
        <div className="text-4xl font-medium text-center uppercase md:text-5xl">
          Showroom
        </div>

        <br />
        <div className="mb-6 text-center">
          To ensure that you receive the ultimate Nexa experience, we have
          strategically positioned ourselves in three prominent hotspots
          throughout Hyderabad
        </div>

        <div className="container grid grid-cols-1 gap-4 mx-auto lg:grid-cols-3 lg:gap-10 xl:gap-20 ">
          <div className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden">
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
          <div className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden">
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
          <div className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden">
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
    </>
  );
}

export default Showrooms;
