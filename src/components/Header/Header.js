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

    {
      name: "Careers",
      to: "/career",
    },
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
  ],
  all: [
    { name: "About Us", to: "/about" },
    { name: "Accessories", to: "/accessories" },
    { name: "Awards", to: "/awards" },
    { name: "Blog", to: "/maruti-nexa-latest-news" },
    { name: "Careers", to: "/career" },
    { name: "CNG", to: "/cng" },
    { name: "Compare", to: "/compare" },
    { name: "Contact", to: "/contact-us" },
    { name: "Corporate", to: "/corporate" },
    { name: "Finance", to: "/maruti-car-finance" },
    { name: "Gallery", to: "/gallery" },
    { name: "Insurance", to: "/maruti-car-insurance" },
    { name: "Showrooms", to: "/maruti-nexa-showroom-outlets-in-hyderabad" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Truevalue", to: "/maruti-nexa-truevalue-outlets-in-hyderabad" },
    { name: "Workshop", to: "/maruti-nexa-workshop-outlets-in-hyderabad" },
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
        <Dialog as="div" className="fixed inset-0 z-40 flex " onClose={setOpen}>
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
            <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto text-black bg-white shadow-xl lg:rounded-r-xl ">
              <div className="flex justify-end px-4 pt-5 pb-2 lg:pb-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 -m-2 rounded-md hover:text-gray-600"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  Close
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              {/* Links */}
              <Tab.Group
                as="div"
                className="mt-2 lg:hidden "
                onClick={() => setOpen(false)}
              >
                {/* <div className='border-b border-gray-200'>
                  <Tab.List className='flex px-4 -mb-px space-x-8'>
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
                <div className="flex flex-wrap justify-center gap-1 ">
                  <Link to="/book-online-maruti-nexa-car-service/">
                    <button className=" bg-red-600 py-1.5 px-1.5  rounded-md text-white">
                      Book a Service
                    </button>
                  </Link>
                  <Link to="/nexa-car-offers-in-hyderabad">
                    <button className=" bg-red-600 py-1.5 px-1.5  rounded-md text-white">
                      Offers
                    </button>
                  </Link>
                  <Link to="/maruti-suzuki-24/7-service-in-hyderabad">
                    <button className=" bg-red-600 py-1.5 px-1.5  rounded-md text-white">
                      24/7 Services
                    </button>
                  </Link>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="px-4 py-6 space-y-10 "
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="relative text-sm font-semibold group"
                          >
                            <Link to={item.href}>
                              <div className="flex justify-center pb-2">
                                <img
                                  src={item.brand_logo}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>

                              <div className="mb-2 overflow-hidden rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
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
              {/* <div
                className="border-gray-200 "
                onClick={() => setOpen(false)}
              >
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root px-2">
                    <Link
                      to={page.to}
                      className="block px-2 py-2 duration-75 rounded-md lg:py-3 hover:bg-black hover:text-white hover:px-4 "
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
                      className="block px-2 py-2 duration-75 rounded-md lg:py-3 hover:bg-black hover:text-white hover:px-4"
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
                      className="block px-2 py-2 duration-75 rounded-md lg:py-3 hover:bg-black hover:text-white hover:px-4"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="" onClick={() => setOpen(false)}>
                {navigation.more.map((page) => (
                  <div key={page.name} className="flow-root px-2">
                    <Link
                      to={page.to}
                      className="block px-2 py-2 duration-75 rounded-md lg:py-3 hover:bg-black hover:text-white hover:px-4"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>*/}
              <div className="" onClick={() => setOpen(false)}>
                {navigation.all.map((page) => (
                  <div key={page.name} className="flow-root px-2">
                    <Link
                      to={page.to}
                      className="px-2 py-2 lg:py-2.5 block  hover:bg-black  hover:text-white rounded-md hover:px-4 duration-75"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="px-2">
                <a
                  href="https://www.spatial.io/s/Saboo-RKS-N-E-X-A-6322f4f7955236000112849b?share=3965153526388753240"
                  className="block px-2 py-2 duration-75 rounded-md lg:py-3 hover:bg-black hover:text-white hover:px-4"
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
        className={`fixed scroll-smooth z-40 backdrop-blur-sm ${
          col && scrollTop < 7 ? "text-black" : "text-white"
        }  ${scrollTop > 7 && "bg-[#0c0c0ce8]  "} w-full `}
      >
        {/* <div
        className={`fixed scroll-smooth  ${navbar?"top-0":"md:top-14 "}  z-20  bg-[#0c0c0ce8]  w-full  shadow-2xl drop-shadow-2xl`}
      > */}
        <header className="container relative mx-auto ">
          {/* <nav aria-label='Top' className='container mx-auto '> */}
          <nav className="">
            <div className="border-gray-200">
              <div className="flex items-center justify-between h-16 px-3 lg:h-20">
                {/* Logo */}

                <div className="items-center hidden lg:flex ">
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
                    <MenuIcon className="w-8 h-8 " aria-hidden="true" />
                  </button>
                  <div className="relative py-3 cursor-pointer group">
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
                      <div className="flex justify-center pt-1 mx-1 whitespace-nowrap">
                        <Link
                          className=" hover:bg-[#0c0b0b] text-white p-3 rounded-md "
                          to="/book-online-maruti-nexa-car-service"
                        >
                          Book a service
                        </Link>
                      </div>
                      <div className="flex justify-center pb-1 ">
                        <Link
                          className=" hover:bg-[#0c0b0b] text-white p-3 w-full mx-1 rounded-md "
                          to="/maruti-suzuki-24/7-service-in-hyderabad"
                        >
                          24/7 Services
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
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                <div className="hidden transition-all lg:flex ">
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
                <div className="ml-2 select-none lg:ml-0">
                  <Link to="/">
                    <img
                      className={`h-8 md:h-9 xl:h-10 ${
                        !col && scrollTop < 7 ? "block" : "hidden"
                      }`}
                      src={require("../../assets/logo.webp")}
                      alt="logo"
                    />
                    <img
                      className={`h-8 md:h-9 xl:h-10 ${
                        scrollTop > 7 ? "block" : "hidden"
                      }`}
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
