import { useEffect, useState, Fragment } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";
import Accessories from "./screens/more/Accessories";
import Awards from "./screens/more/Awards";
import Gallery from "./screens/more/Gallery";
import Testimonial from "./screens/more/Testimonial";
import Showrooms from "./screens/outlets/Showrooms";
import Workshops from "./screens/outlets/Workshops";
import Truevalue from "./screens/outlets/Truevalue";
import Insurance from "./screens/services/Insurance";
import Finance from "./screens/services/Finance";
import Baleno from "./screens/cars/Baleno";
// import Scross from './screens/cars/Scross';
import Ciaz from "./screens/cars/Ciaz";
import Ignis from "./screens/cars/Ignis";
import Offers from "./screens/more/Offers";
import BookAService from "./screens/more/BookAService";
import PageNotFound from "./screens/more/PageNotFound";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SlCallOut } from "react-icons/sl";
import { Transition, Dialog } from "@headlessui/react";
import loginkey from "./assets/login_key.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Thankyou from "./screens/more/Thankyou";
import XL from "./screens/cars/XL";
import axios from "axios";
import platform from "platform";
import { CgSpinner } from "react-icons/cg";
import PrivacyPolicy from "./screens/more/PrivacyPolicy";
// import NewProduct from "./screens/more/NewProduct";
import GrandVitara from "./screens/cars/GrandVitara";
import Fronx from "./screens/cars/Fronx";
import Jimny from "./screens/cars/Jimny";
// import Compare from "./screens/Compare";

import Compare from "./Compare";
import Corporate from "./screens/services/Corporate";
import Carousel from "./components/Vitara/Extras/Carousel";
import VitaraIHE from "./components/Vitara/Versions/VitaraIHE";
import VitaraAG from "./components/Vitara/Versions/VitaraAG";
import VitaraAT from "./components/Vitara/Versions/VitaraAT";
import VitaraMT from "./components/Vitara/Versions/VitaraMT";
import MobileCarousel from "./components/Vitara/Extras/MobileCarousel";
import BlogPage from "./components/Home/BlogPage";
import NexaCNG from "./screens/more/CNG/NexaCNG";
import GrandVitaraCNG from "./screens/more/CNG/GrandVitaraCNG";
import BalenoCNG from "./screens/more/CNG/BalenoCNG";
import XL6CNG from "./screens/more/CNG/XL6CNG";
import NexaPriceList from "./screens/more/NexaPriceList";
import Invicto from "./screens/cars/Invicto";
import Service24x7 from "./screens/services/Service24x7";
import CallButton from "./components/Footer/CallButton";
import FronxCNG from "./screens/more/CNG/FronxCNG";
import Career from "./screens/more/Career";
import Dashboard from "./screens/more/Dashboard/Dashboard";

axios.defaults.baseURL = "https://saboogroups.com/admin/api/";

function App() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const isAdminRoute =
    location.pathname === "/maruti-suzuki-24/7-service-in-hyderabad" ||
    location.pathname === "/dashboard";

  useEffect(() => {
    const getIp = async () => {
      try {
        await axios.get("https://api.ipify.org?format=json").then((res) => {
          axios.post("https://saboogroups.com/admin/api/visitors", {
            device_ip: res.data.ip,
            os: platform_os,
            browser: platform_name,
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    getIp();

    const platform_name = platform.name; // 'Browser'
    const platform_os = platform.os.family; // 'Windows 10 || OSX || Linux' etc
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (sessionStorage.getItem("popup") !== "true") {
        setOpen(true);
        sessionStorage.setItem("popup", "true");
      }
    }, 3000);
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const Popup = () => {
    const [methodpopup, setMethodPopup] = useState();
    const [number, setNumber] = useState("");

    function handleSubmit() {
      setLoading(true);
      axios
        .post("popup", {
          phone: number,
        })
        .then((res) => {
          setMethodPopup("POST");
        })
        .catch((err) => {
          toast.error("Something went wrong");
          setLoading(false);
        });
        
        axios
        .post('https://saboo-nexa.onrender.com/popup', {
       
        phone: number,
        })
        .then((res) => {
          toast.success('Enquiry sent successfully');
        })
        .catch((err) => {
          setLoading(false);
          toast.error('Something went wrong!');
          console.log(err);
        })
      axios
        .get(
          `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${number}&msg=Thank you for showing interest in Maruti Suzuki.
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
          setLoading(false);
        });

      setLoading(false);
    }
    
    

    const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
    if (number !== "" && number.length === 10) {
      if (!pattern.test(number)) {
        sessionStorage.setItem("popup", "false");
        toast.error("Enter valid phone number", {
          theme: "colored",
        });
      }
    }

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto select-none"
          onClose={() => {}}
        >
          <div className="flex justify-center items-center h-[90vh] md:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="text-left">
                    <div
                      onClick={() => setOpen(false)}
                      className="absolute flex items-center justify-center rounded-full cursor-pointer hover:border right-4 top-4 hover:border-red-600 group hover:bg-red-500 hover:bg-opacity-20"
                    >
                      <div className="mx-2 text-3xl font-light group-hover:text-red-600 -mt-0.5 flex items-center gap-1 duration-500 ">
                        <span className="hidden text-lg text-black group-hover:block">
                          Close
                        </span>{" "}
                        x
                      </div>
                    </div>
                    <div className="mt-2 space-y-3">
                      <form
                        action={
                          pattern.test(number) && number.length === 10
                            ? "https://crm.zoho.in/crm/WebToLeadForm"
                            : "#"
                        }
                        name="WebToLeads54158000001051349"
                        method={methodpopup}
                        acceptCharset="UTF-8"
                      >
                        <input
                          type="text"
                          className="hidden"
                          name="xnQsjsdp"
                          value="5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b"
                        />
                        <input
                          type="hidden"
                          name="zc_gad"
                          id="zc_gad"
                          value=""
                        />
                        <input
                          type="text"
                          className="hidden"
                          name="xmIwtLD"
                          value="3e4c511e1bfac462fb9ac158b261b0d3df2ae6eb9f9847d50cb87f439855b4e4"
                        />
                        <input
                          type="text"
                          className="hidden"
                          name="actionType"
                          value="TGVhZHM="
                        />
                        <input
                          type="text"
                          className="hidden"
                          name="returnURL"
                          value="https://saboonexa.in/"
                        />
                        <input
                          type="text"
                          id="Last_Name"
                          value="NexaWhatsapp_Lead"
                          name="Last Name"
                          maxLength="80"
                          style={{ display: "none" }}
                        />
                        <input
                          type="text"
                          value={number + "@gmail.com"}
                          ftype="email"
                          id="Email"
                          name="Email"
                          style={{ display: "none" }}
                          maxLength="100"
                        />
                        <div className="zcwf_row" style={{ display: "none" }}>
                          <div className="zcwf_col_lab">
                            <label htmlFor="LEADCF6">Car Model</label>
                          </div>
                          <div className="zcwf_col_fld">
                            <select
                              className="zcwf_col_fld_slt"
                              id="LEADCF6"
                              name="LEADCF6"
                            >
                              <option defaultValue value="SABOO NEXA Popup">
                                Saboonexa Popup
                              </option>
                            </select>
                            <div className="zcwf_col_help"></div>
                          </div>
                        </div>

                        {/* <img
                          src={popupLogo}
                          alt="logo"
                          className="h-8 select-none w-min "
                        /> */}
                        <img
                          src={loginkey}
                          alt="logo"
                          className="w-full h-16"
                        />
                        <h4 className="mt-2 text-lg font-medium text-center text-red-500">
                          Get A Quote/Offer
                        </h4>

                        <div className="py-4 mt-2">
                          <input
                            className="w-full h-10 px-3 border border-black rounded-md outline-none"
                            type="tel"
                            id="Phone"
                            required
                            name="Phone"
                            minLength="10"
                            maxLength="10"
                            value={number}
                            autoComplete="off"
                            onChange={(e) =>
                              setNumber(
                                e.target.value.replace(/[^0-9]/g, "") // Use /[^0-9]/ to allow only digits
                              )
                            }
                            placeholder="Enter mobile number"
                          />
                        </div>

                        <div className="flex items-center justify-center gap-2 mb-2 ">
                          <a
                            href="tel:+919848898488"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-1/2 py-2 duration-200 bg-blue-500 rounded-lg group hover:text-white bg-opacity-5 hover:bg-opacity-100"
                          >
                            <SlCallOut
                              size={20}
                              className="mr-2 text-blue-700 duration-200 group-hover:text-white"
                            />
                            Call now
                          </a>
                          <a
                            href="https://wa.me/919848898488"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center w-1/2 py-2 duration-200 bg-green-500 rounded-lg group hover:text-white bg-opacity-5 hover:bg-opacity-100"
                          >
                            <IoLogoWhatsapp
                              size={20}
                              className="mr-2 text-green-700 duration-200 group-hover:text-white "
                            />
                            WhatsApp
                          </a>
                        </div>

                        <div className="container mt-6 mb-4 text-xs text-gray-600">
                          <span className="font-semibold">*Disclaimer:</span> By
                          clicking 'Submit,' you acknowledge that you have
                          agreed to our{" "}
                          <Link
                            to="/terms-and-condition"
                            className="text-blue-600"
                          >
                            Privacy Policy and Terms of Service
                          </Link>
                          .
                        </div>

                        {/* <div className='flex items-center mb-5 space-x-2'>
                          <input
                            id='comments'
                            name='comments'
                            type='checkbox'
                            className='w-4 h-4 border-gray-300 rounded '
                            required
                          />
                          <label
                            htmlFor='comments'
                            className='text-sm text-gray-700'
                          >
                            I agree to the{' '}
                            <Link to='/terms-and-condition'>
                              Privacy Policy and Terms of Service
                            </Link>
                            .
                          </label>
                        </div> */}

                        <button
                          type="submit"
                          disabled={
                            pattern.test(number) && number.length === 10
                              ? false
                              : true
                          }
                          onClick={handleSubmit}
                          className="w-full py-2 mb-3 text-sm font-medium text-white bg-black border rounded-md shadow-sm cursor-pointer hover:bg-red-700"
                        >
                          {loading ? (
                            <div className="flex items-center justify-center">
                              <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
                              Submitting
                            </div>
                          ) : (
                            "SUBMIT"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };

  return (
    <>
      <Popup />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vitaratest" element={<Carousel />} />
        <Route path="/mobilecarousel" element={<MobileCarousel />} />

        {/* Vehicles */}

        <Route path="/nexa-xl6-on-road-price-in-hyderabad" element={<XL />} />
        {/* <Route
          path='/nexa-scross-petrol-on-road-price-in-hyderabad'
          element={<Scross />}
        /> */}
        <Route
          path="/nexa-ciaz-on-road-price-in-hyderabad"
          element={<Ciaz />}
        />
        <Route
          path="/new-maruti-baleno-price-in-hyderabad"
          element={<Baleno />}
        />
        <Route
          path="/nexa-ignis-on-road-price-in-hyderabad"
          element={<Ignis />}
        />

        <Route
          path="/grand-vitara-on-road-price-in-hyderabad"
          element={<GrandVitara />}
        />
        <Route
          path="/grand-vitara-features-intelligent-electric-hybrid"
          element={<VitaraIHE />}
        />
        <Route path="/grand-vitara-allgrip" element={<VitaraAG />} />
        <Route
          path="/grand-vitara-6-speed-automatic-transmission-price"
          element={<VitaraAT />}
        />
        <Route
          path="/grand-vitara-5-speed-manual-transmission-price"
          element={<VitaraMT />}
        />
        <Route
          path="/maruti-invicto-price-in-hyderabad"
          element={<Invicto />}
        />
        <Route path="/maruti-fronx-price-in-hyderabad" element={<Fronx />} />
        <Route path="/maruti-jimny-price-in-hyderabad" element={<Jimny />} />
        {/* services */}
        <Route path="/maruti-car-insurance" element={<Insurance />} />
        <Route path="/maruti-car-finance" element={<Finance />} />
        <Route
          path="/maruti-suzuki-24/7-service-in-hyderabad"
          element={<Service24x7 />}
        />
        {/* outlets */}
        <Route
          path="/maruti-nexa-showroom-outlets-in-hyderabad"
          element={<Showrooms />}
        />
        <Route path="/maruti-nexa-latest-news" element={<BlogPage />} />

        <Route
          path="/maruti-nexa-workshop-outlets-in-hyderabad"
          element={<Workshops />}
        />
        <Route
          path="/maruti-nexa-truevalue-outlets-in-hyderabad"
          element={<Truevalue />}
        />
        {/* more screen */}
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/cng" element={<NexaCNG />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/nexa-car-offers-in-hyderabad" element={<Offers />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/pricelist" element={<NexaPriceList />} />

        <Route
          path="/book-online-maruti-nexa-car-service/"
          element={<BookAService />}
        />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/terms-and-condition" element={<PrivacyPolicy />} />
        {/* <Route path="/compare" element={<Compare />} /> */}
        <Route path="/compare" element={<Compare />} />
        <Route path="/corporate" element={<Corporate />} />
        {/* CNG Cars */}

        <Route path="/grand-vitara-cng" element={<GrandVitaraCNG />} />
        <Route path="/baleno-cng" element={<BalenoCNG />} />
        <Route path="/xl6-cng" element={<XL6CNG />} />
        <Route path="/fronx-cng" element={<FronxCNG />} />

        {/* Contact */}
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* PageNotFound */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CallButton />
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
