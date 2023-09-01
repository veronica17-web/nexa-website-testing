import { Fragment, useEffect, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "vehicles",
      name: "Vehicles",
      featured: [
        {
          name: "Created to…..in order to maintain uniformity",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto+Logo-header.webp",
          href: "/maruti-invicto-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/invicto-thumbnail.webp",
          imageAlt: "Suzuki invicto",
          price: "₹ 24,79,000*",
        },
        {
          name: "Created to Inspire Style and Performance.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp",
          href: "/maruti-fronx-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/HeaderMenu-167x87.webp",
          imageAlt: "Suzuki Fronx",
          price: "₹ 7,46,500*",
        },
        {
          name: "Functional Beauty Crafted for Purity of Function.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/120x30+black.webp",
          href: "/maruti-jimny-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/167x87-Ar_Vk_Jimny_Side+3-4th+Limbo+Shot_V1.webp",
          imageAlt: "Suzuki Jimny",
          price: "₹ 12,74,000*",
        },
        {
          name: "Create Inspire.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/GV-logo-204x37+webp.webp",
          href: "/grand-vitara-on-road-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/new167x87.webp",
          imageAlt: "GrandVitara",
          price: " ₹ 10,45,000*",
        },
        {
          name: "Created to Inspire Indulgence.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Logo-XL6.webp",
          href: "/nexa-xl6-on-road-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/Hover_menu_XL6.webp",
          imageAlt: "XL6",
          price: "₹ 11,29,000*",
        },

        {
          name: "Created to Inspire Elegance.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-logo.webp",
          href: "/nexa-ciaz-on-road-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-Car.webp",
          imageAlt: "Ciaz",
          price: " ₹ 8,99,500*",
        },
        {
          name: "Created to Inspire The Bold and Intelligent.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/newage_baleno_logo.png",
          href: "/new-maruti-baleno-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_agebaleno.png",
          imageAlt: "Baleno",
          price: "₹ 6,49,000*",
        },
        {
          name: "Created to Inspire The Toughness in You.",
          brand_logo:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Maruti-Suzuki-Ignis-logo.webp",
          href: "/nexa-ignis-on-road-price-in-hyderabad",
          imageSrc:
            "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ignis-Car.webp",
          imageAlt: "Ignis",
          price: "₹ 5,35,000*",
        },
      ],
    },
  ],
  pages: [
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact-us" },
  ],
  servicepages: [
    {
      name: "Insurance",
      to: "/maruti-car-insurance",
    },
    {
      name: "Finance",
      to: "/maruti-car-finance",
    },
    {
      name: "Corporate",
      to: "/corporate",
    },
  ],

  outlets: [
    {
      name: "Showrooms",
      to: "/maruti-nexa-showroom-outlets-in-hyderabad",
    },
    {
      name: "Workshop",
      to: "/maruti-nexa-workshop-outlets-in-hyderabad",
    },
    {
      name: "Truevalue",
      to: "/maruti-nexa-truevalue-outlets-in-hyderabad",
    },
  ],
  more: [
    {
      name: "CNG",
      to: "/cng",
    },

    // {
    //   name: "Careers",
    //   to: "/",
    // },
    {
      name: "Testimonials",
      to: "/testimonials",
    },
    {
      name: "Awards",
      to: "/awards",
    },
    {
      name: "Gallery",
      to: "/gallery",
    },
    {
      name: "Accessories",
      to: "/accessories",
    },
    {
      name: "Compare",
      to: "/compare",
    },
    {
      name: "Blog",
      to: "/maruti-nexa-latest-news",
    },
    // {
    //   name: "24/7 Service",
    //   to: "/maruti-suzuki-24/7-service-in-hyderabad",
    // },
  ],
};

const carLinks = [
  {
    name: "Invicto",
    link: "/maruti-invicto-price-in-hyderabad",
    heading: "Created to…..in order to maintain uniformity",
  },
  {
    name: "Fronx",
    link: "/maruti-fronx-price-in-hyderabad",
    heading: "Created to Inspire Style and Performance.",
  },

  {
    name: "Jimny",
    link: "/maruti-jimny-price-in-hyderabad",
    heading: "Functional Beauty Crafted for Purity of Function.",
  },
  {
    name: "Grand Vitara",
    link: "/grand-vitara-on-road-price-in-hyderabad",
    heading: "Create Inspire.",
  },
  {
    name: "XL6",
    link: "/nexa-xl6-on-road-price-in-hyderabad",
    heading: "Created to Inspire Indulgence.",
  },
  {
    name: "Ciaz",
    link: "/nexa-ciaz-on-road-price-in-hyderabad",
    heading: "Created to Inspire Elegance.",
  },
  {
    name: "Baleno",
    link: "/new-maruti-baleno-price-in-hyderabad",
    heading: "Created to Inspire The Bold and Intelligent.",
  },
  {
    name: "Ignis",
    link: "/nexa-ignis-on-road-price-in-hyderabad",
    heading: "Created to Inspire The Toughness in You.",
  },
];

function Header({ col }) {
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"bg-[#0c0c0ce8]   duration-500 transition"}>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40  "
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full  lg:rounded-r-xl text-black bg-white shadow-xl pb-12 flex flex-col overflow-y-auto ">
              <div className="px-4 pt-5 pb-2 lg:pb-4 flex justify-end">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center hover:text-gray-600"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  Close
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Links */}
              <Tab.Group
                as="div"
                className="mt-2 lg:hidden "
                onClick={() => setOpen(false)}
              >
                {/* <div className='border-b border-gray-200'>
                  <Tab.List className='-mb-px flex px-4 space-x-8'>
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'text-[#f01b28] border-[#f01b28]'
                              : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div> */}
                <div className="flex flex-wrap gap-1 justify-center ">
                  <button className=" bg-red-600 py-1.5 px-1.5  rounded-md text-white">
                    Book a Service
                  </button>
                  <button className=" bg-red-600 py-1.5 px-1.5  rounded-md text-white">
                    Offers
                  </button>
                  <button className=" bg-red-600 py-1.5 px-1.5  rounded-md text-white">
                    24/7 Services
                  </button>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className=" py-6 px-4 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm font-semibold"
                          >
                            <Link to={item.href}>
                              <div className="flex justify-center pb-2">
                                <img
                                  src={item.brand_logo}
                                  alt={item.imageAlt}
                                  className="object-center object-cover"
                                />
                              </div>

                              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 mb-2">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-center object-cover"
                                />
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
              <div
                className=" border-gray-200  "
                onClick={() => setOpen(false)}
              >
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root px-2">
                    <Link
                      to={page.to}
                      className="px-2 py-2 lg:py-2.5 block  hover:bg-gray-200 rounded-md hover:px-4 duration-300 "
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="" onClick={() => setOpen(false)}>
                {navigation.servicepages.map((page) => (
                  <div key={page.name} className="flow-root px-2">
                    <Link
                      to={page.to}
                      className="px-2 py-2 lg:py-2.5 block  hover:bg-gray-200 rounded-md hover:px-4 duration-300"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="" onClick={() => setOpen(false)}>
                {navigation.outlets.map((page) => (
                  <div key={page.name} className="flow-root px-2">
                    <Link
                      to={page.to}
                      className="px-2 py-2 lg:py-2.5 block  hover:bg-gray-200 rounded-md hover:px-4 duration-300"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className=" " onClick={() => setOpen(false)}>
                {navigation.more.map((page) => (
                  <div key={page.name} className="flow-root px-2">
                    <Link
                      to={page.to}
                      className="px-2 py-2 lg:py-2.5 block  hover:bg-gray-200 rounded-md hover:px-4 duration-300"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="px-2">

              <a
                href="https://www.spatial.io/s/Saboo-RKS-N-E-X-A-6322f4f7955236000112849b?share=3965153526388753240"
                className="px-2 py-2 lg:py-2.5 block  hover:bg-gray-200 rounded-md hover:px-4 duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Metaverse
              </a>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Desktop, Tab Menu */}

      <div
        className={`fixed scroll-smooth z-20 backdrop-blur-sm ${
          col && scrollTop < 7 ? "text-black" : "text-white"
        }  ${scrollTop > 7 && "bg-[#0c0c0ce8]  "} w-full `}
      >
        {/* <div
        className={`fixed scroll-smooth  ${navbar?"top-0":"md:top-14 "}  z-20  bg-[#0c0c0ce8]  w-full  shadow-2xl drop-shadow-2xl`}
      > */}
        <header className="relative container mx-auto ">
          {/* <nav aria-label='Top' className='container mx-auto '> */}
          <nav className="">
            <div className="border-gray-200">
              <div className="h-16 lg:h-20 px-3 flex justify-between items-center">
                {/* Logo */}

                <div className="lg:flex items-center hidden ">
                  <button
                    className={` ${
                      scrollTop > 7
                        ? "hover:bg-[#4d4d4d7a]"
                        : col && scrollTop < 7
                        ? " hover:bg-[#4d4d4d7a]"
                        : "hover:bg-[#0d0d0d] "
                    } p-3 transition-colors duration-100 rounded-md`}
                    onClick={() => setOpen(!open)}
                  >
                    {/* Menu */}
                    <MenuIcon className="h-8 w-8    " aria-hidden="true" />
                  </button>
                  <div className=" relative group py-3 cursor-pointer">
                    <div
                      className={`py-3 px-3 rounded-md  ${
                        scrollTop > 7
                          ? "hover:bg-[#4d4d4d7a]"
                          : col && scrollTop < 7
                          ? " hover:bg-[#4d4d4d7a]"
                          : "hover:bg-[#0d0d0d] "
                      } text-base `}
                    >
                      Services
                    </div>
                    <div className="absolute top-16  border-b-2  border-gray-200 rounded-lg bg-[#4d4d4d] hidden group-hover:block ">
                      <div className=" pt-1 flex justify-center">
                        <Link
                          className=" hover:bg-[#0c0b0b] text-white p-3 w-full mx-1 rounded-md "
                          to="/maruti-suzuki-24/7-service-in-hyderabad"
                        >
                          24/7 Services
                        </Link>
                      </div>
                      <div className=" mx-1 whitespace-nowrap pb-1 flex justify-center">
                        <Link
                          className=" hover:bg-[#0c0b0b] text-white p-3 rounded-md "
                          to="/book-online-maruti-nexa-car-service/"
                        >
                          Book a service
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link
                    className={`py-3 px-3  ${
                      scrollTop > 7
                        ? "hover:bg-[#4d4d4d7a]"
                        : col && scrollTop < 7
                        ? " hover:bg-[#4d4d4d7a]"
                        : "hover:bg-[#0d0d0d] "
                    }  rounded-md  text-base`}
                    to="/nexa-car-offers-in-hyderabad"
                  >
                    Offers
                  </Link>
                </div>
                <button
                  type="button"
                  className={`px-2 rounded-md  lg:hidden`}
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="transition-all hidden lg:flex ">
                  {carLinks.map((car, index) => (
                    // <div
                    //   key={index}
                    //   className='group'
                    //   // onClick={() => setVeh(!veh)}
                    //   // onMouseEnter={() => setVeh(true)}
                    //   // onMouseLeave={() => setVeh(false)}
                    // >
                    <Link
                      key={index}
                      className={`py-3 px-3 group  ${
                        scrollTop > 7
                          ? "hover:bg-[#4d4d4d7a]"
                          : col && scrollTop < 7
                          ? " hover:bg-[#4d4d4d7a]"
                          : "hover:bg-[#0d0d0d] "
                      }  rounded-md text-base`}
                      to={car.link}
                    >
                      {car.name}
                    </Link>

                    //  </div>
                  ))}
                  {/* <Link
                    className="py-4 px-3 hover:bg-[#2a2b697a]  rounded-md "
                    to="/maruti-suzuki-24/7-service-in-hyderabad"
                  >
                    27/4 Service
                  </Link>
                  <Link
                    className="py-4 px-3 hover:bg-[#d849497a]  rounded-md "
                    to="/nexa-car-offers-in-hyderabad"
                  >
                    Offers
                  </Link> */}
                </div>
                <div className="  lg:ml-0 ml-2">
                  <Link to="/">
                    <img
                      className={`h-8 md:h-9 xl:h-10 ${
                        !col && scrollTop < 7 ? "block" : "hidden"
                      }`}
                      src={require("../../assets/logo.webp")}
                      alt="logo"
                    />
                    <img
                      className={`h-8 md:h-9 xl:h-10 ${scrollTop > 7 ? "block" : "hidden"}`}
                      src={require("../../assets/logo.webp")}
                      alt="logo"
                    />
                    <img
                      className={`h-8 md:h-9 xl:h-10 ${
                        col && scrollTop < 7 ? "block" : "hidden"
                      }`}
                      src={require("../../assets/logo_color.webp")}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div
          className=" bg-red-600 flex justify-end h-0.5 md:h-1  shadow-xl shadow-white "
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  col: false,
};

export default Header;
