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
import Scross from "./screens/cars/Scross";
import Ciaz from "./screens/cars/Ciaz";
import Ignis from "./screens/cars/Ignis";
import Offers from "./screens/more/Offers";
import BookAService from "./screens/more/BookAService";
import PageNotFound from "./screens/more/PageNotFound";
import { IoCloseCircle, IoLogoWhatsapp } from "react-icons/io5";
import { BsTelephoneForward } from "react-icons/bs";
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
import NexaJubilee from "./screens/more/NexaJubilee";
import NexaLumbini from "./screens/more/NexaLumbini";

function App2() {
  const [open, setOpen] = useState(false);
  const [ip, setIP] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getIp = async () => {
      const res = await axios.get("https://api.ipify.org?format=json");
      setIP(res.data.ip);
    };
    getIp();

    const platform_name = platform.name; // 'Browser'
    const platform_os = platform.os.family; // 'Windows 10 || OSX || Linux' etc

    if (ip !== "") {
      setTimeout(() => {
        axios
          .post("https://saboogroups.com/admin/api/visitors", {
            device_ip: ip,
            os: platform_os,
            browser: platform_name,
          })
          .catch((err) => {
            console.log(err);
          });
      }, 5000);
    }
  }, [ip]);

  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        if (sessionStorage.getItem("popup") !== "true") {
          setOpen(true);
          sessionStorage.setItem("popup", "true");
        }
      }, 1000);
    }, [pathname]);
    return null;
  };

  const Popup = () => {
    const [number, setNumber] = useState("");

    const handleSubmit = async () => {
      setLoading(true);
      try {
        await axios.post("https://saboogroups.com/admin/api/popup", {
          phone: number,
        });
        toast.success("Thank you for subscribing");
        setLoading(false);
        setOpen(false);
      } catch (error) {
        toast.error("Something went wrong");
        setLoading(false);
        console.log(error);
      }
    };

    const pattern = /^[6-9][0-9]{6,9}$/;
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
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
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
              <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="text-left">
                    <button
                      className="outline-none absolute right-2 top-2"
                      onClick={() => setOpen(false)}
                    >
                      <IoCloseCircle size={28} />
                    </button>
                    <div className="mt-2 space-y-3">
                      <form onSubmit={handleSubmit}>
                        <img
                          src={loginkey}
                          alt="logo"
                          className="w-full h-16"
                        />
                        <h4 className="text-center text-red-600 font-bold">
                          Get A Quote/Offer
                        </h4>

                        <div className="mt-2 py-8">
                          <input
                            className="border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500"
                            type="text"
                            id="Phone"
                            name="Phone"
                            minLength="10"
                            maxLength="10"
                            value={number}
                            autoComplete="off"
                            onChange={(e) =>
                              setNumber(
                                e.target.value.replace(/[^1-9 ]/g, "") &&
                                  e.target.value.replace(/ /g, "")
                              )
                            }
                            required
                            placeholder="Enter mobile number"
                          />
                        </div>

                        <div className="flex items-center justify-center space-x-5 mb-5">
                          <a
                            href="https://wa.me/919848898488"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <IoLogoWhatsapp
                              size={20}
                              className="text-green-700 mr-1"
                            />
                            WhatsApp
                          </a>
                          <a
                            href="https://wa.me/919848898488"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <BsTelephoneForward size={20} className="mr-1" />
                            Call us
                          </a>
                        </div>

                        <div className="flex items-center space-x-2 mb-5">
                          <input
                            id="comments"
                            type="checkbox"
                            className=" h-4 w-4 border-gray-300 rounded"
                            required
                          />
                          <label
                            htmlFor="comments"
                            className="text-gray-700 text-sm"
                          >
                            I agree to the{" "}
                            <Link to="/terms-and-condition">
                              Privacy Policy and Terms of Service
                            </Link>
                            .
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={loading === true ? true : false}
                          className="w-full rounded-md border shadow-sm py-2 mb-3 bg-black font-medium text-white hover:bg-red-700 text-sm"
                        >
                          {loading ? (
                            <div className="flex items-center justify-center">
                              <CgSpinner className="animate-spin h-5 mr-2 text-white w-5" />
                              Loading
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
      <ScrollTop />
      <Popup />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Vehicles */}
        <Route path="/nexa-xl6-on-road-price-in-hyderabad" element={<XL />} />
        <Route
          path="/nexa-scross-petrol-on-road-price-in-hyderabad"
          element={<Scross />}
        />
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

        {/* services */}
        <Route path="/maruti-car-insurance" element={<Insurance />} />
        <Route path="/maruti-car-finance" element={<Finance />} />

        {/* outlets */}
        <Route
          path="/maruti-nexa-showroom-outlets-in-hyderabad"
          element={<Showrooms />}
        />
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
        <Route path="/awards" element={<Awards />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/offers" element={<Offers />} />
        <Route
          path="/book-online-maruti-nexa-car-service/"
          element={<BookAService />}
        />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/terms-and-condition" element={<PrivacyPolicy />} />
        <Route path='/nexa-jubilee-feedback' element={<NexaJubilee />} />
        <Route path='/nexa-lumbini-feedback' element={<NexaLumbini />} />
        {/* Contact */}
        <Route path="/contact-us" element={<Contact />} />
        {/* PageNotFound */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App2;
