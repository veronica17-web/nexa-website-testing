import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = {
  categories: [
    {
      id: 'vehicles',
      name: 'Vehicles',
      featured: [
        {
          name: 'Created to Inspire Style and Performance.',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp',
          href: '/maruti-fronx-price-in-hyderabad',
          imageSrc:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/HeaderMenu-167x87.webp',
          imageAlt: 'Suzuki Fronx',
          price: 'Coming Soon',
        },
        {
          name: 'Functional Beauty Crafted for Purity of Function.',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/120x30+black.webp',
          href: '/maruti-jimny-price-in-hyderabad',
          imageSrc:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/167x87-Ar_Vk_Jimny_Side+3-4th+Limbo+Shot_V1.webp',
          imageAlt: 'Suzuki Jimny',
          price: 'Coming Soon',
        },
        {
          name: 'Create Inspire.',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/GV-logo-204x37+webp.webp',
          href: '/grand-vitara-on-road-price-in-hyderabad',
          imageSrc:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/new167x87.webp',
          imageAlt: 'GrandVitara',
          price: ' ₹ 10,45,000*',
        },
        {
          name: 'Created to Inspire Indulgence.',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Logo-XL6.webp',
          href: '/nexa-xl6-on-road-price-in-hyderabad',
          imageSrc:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/Hover_menu_XL6.webp',
          imageAlt: 'XL6',
          price: '₹ 11,29,000*',
        },

        {
          name: 'Created to Inspire Elegance.',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-logo.webp',
          href: '/nexa-ciaz-on-road-price-in-hyderabad',
          imageSrc:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-Car.webp',
          imageAlt: 'Ciaz',
          price: ' ₹ 8,99,500*',
        },
        {
          name: 'Created to Inspire The Bold and Intelligent.',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/newage_baleno_logo.png',
          href: '/new-maruti-baleno-price-in-hyderabad',
          imageSrc:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_agebaleno.png',
          imageAlt: 'Baleno',
          price: '₹ 6,49,000*',
        },
        {
          name: 'Created to Inspire The Toughness in You.',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Maruti-Suzuki-Ignis-logo.webp',
          href: '/nexa-ignis-on-road-price-in-hyderabad',
          imageSrc:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ignis-Car.webp',
          imageAlt: 'Ignis',
          price: '₹ 5,35,000*',
        },
      ],
    },
  ],
  pages: [
    { name: 'Home', to: '/' },
    { name: 'About us', to: '/about' },
  ],
  servicepages: [
    {
      name: 'Insurance',
      to: '/maruti-car-insurance',
    },
    {
      name: 'Finance',
      to: '/maruti-car-finance',
    },
    {
      name: 'Corporate',
      to: '/corporate',
    },
  ],

  outlets: [
    {
      name: 'Showrooms',
      to: '/maruti-nexa-showroom-outlets-in-hyderabad',
    },
    {
      name: 'Workshop',
      to: '/maruti-nexa-workshop-outlets-in-hyderabad',
    },
    {
      name: 'Truevalue',
      to: '/maruti-nexa-truevalue-outlets-in-hyderabad',
    },
  ],
  more: [
    {
      name: 'Testimonials',
      to: '/testimonials',
    },
    {
      name: 'Awards',
      to: '/awards',
    },
    {
      name: 'Gallery',
      to: '/gallery',
    },
    {
      name: 'Accessories',
      to: '/accessories',
    },
    {
      name: 'Compare',
      to: '/compare',
    },
    {
      name: 'Metaverse',
      to: '/compare',
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function MainHeader() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const fixedNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', fixedNavbar);

  return (
    <div className={navbar ? 'bg-black px-0' : 'bg-black px-3'}>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <Tab.Group
                as='div'
                className='mt-2'
                onClick={() => setOpen(false)}
              >
                <div className='border-b border-gray-200'>
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
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className='pt-10 pb-8 px-4 space-y-10'
                    >
                      <div className='grid grid-cols-2 gap-x-4'>
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className='group relative text-sm font-semibold'
                          >
                            <Link to={item.href}>
                              <div className='flex justify-center pb-2'>
                                <img
                                  src={item.brand_logo}
                                  alt={item.imageAlt}
                                  className='object-center object-cover'
                                />
                              </div>

                              <div className='aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 mb-2'>
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className='object-center object-cover'
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
                className='border-t border-gray-200 py-6 px-4 space-y-6'
                onClick={() => setOpen(false)}
              >
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.to}
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
                <Link
                  to='/contact-us'
                  className='-m-2 p-2 block font-medium text-gray-900'
                >
                  Contact
                </Link>
              </div>

              <div
                className='border-t border-gray-200 py-6 px-4 space-y-6'
                onClick={() => setOpen(false)}
              >
                {navigation.servicepages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.to}
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className='border-t border-gray-200 py-6 px-4 space-y-6'
                onClick={() => setOpen(false)}
              >
                {navigation.outlets.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.to}
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className='border-t border-gray-200 py-6 px-4 space-y-6'
                onClick={() => setOpen(false)}
              >
                {navigation.more.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.to}
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Desktop, Tab Menu */}
      <div
        className={
          navbar
            ? 'fixed top-0 z-20 w-full px-0 shadow-2xl drop-shadow-2xl'
            : ''
        }
      >
        <header className='relative bg-black'>
          <nav aria-label='Top' className='container mx-auto '>
            <div className='border-gray-200'>
              <div className='h-16 flex items-center'>
                {/* Logo */}
                <div className='mr-auto flex lg:ml-0 ml-2'>
                  <Link to='/'>
                    <img
                      className='h-12 w-auto'
                      src={require('../../assets/logo.webp')}
                      alt='logo'
                    />
                  </Link>
                </div>

                <button
                  type='button'
                  className='p-2 rounded-md text-gray-200 lg:hidden'
                  onClick={() => setOpen(true)}
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Flyout menus */}
                <Popover.Group className='hidden ml-auto lg:block lg:self-stretch'>
                  <div className='h-full flex space-x-8'>
                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.to}
                        className='flex items-center text-sm font-medium text-gray-200 hover:text-gray-400'
                      >
                        {page.name}
                      </Link>
                    ))}

                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className='flex'>
                        {({ open }) => (
                          <>
                            <div className='relative flex'>
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'border-red-600 text-red-600'
                                    : 'border-transparent text-gray-200 hover:text-gray-400',
                                  'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px outline-none focus:outline-none'
                                )}
                              >
                                {category.name}
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? 'text-red-600' : 'text-gray-200',
                                    'ml-1 h-4 w-4 group-hover:text-gray-200'
                                  )}
                                />
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter='transition ease-out duration-200'
                              enterFrom='opacity-0'
                              enterTo='opacity-100'
                              leave='transition ease-in duration-150'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Popover.Panel className='absolute top-full inset-x-0 text-sm text-gray-500 shadow z-10'>
                                <div
                                  className='absolute inset-0 top-1/2 bg-white '
                                  aria-hidden='true'
                                />

                                <div className='relative bg-white'>
                                  <div className='container mx-auto px-8'>
                                    <div className='grid grid-cols-6 gap-4 gap-x-8 py-6'>
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className='group relative text-base sm:text-sm'
                                        >
                                          <div className='flex justify-center my-4'>
                                            <img
                                              src={item.brand_logo}
                                              alt={item.imageAlt}
                                              className='object-center object-cover h-5'
                                            />
                                          </div>
                                          <div className='aspect-w-1 aspect-h-1 rounded-lg p-5 bg-gray-100 overflow-hidden group-hover:opacity-75'>
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className='object-center object-cover mx-auto'
                                            />
                                          </div>
                                          <Link
                                            to={item.href}
                                            className='mt-6 block font-medium text-gray-900'
                                          >
                                            <span
                                              className='absolute z-10 inset-0'
                                              aria-hidden='true'
                                            />
                                            {item.name}
                                          </Link>
                                          <p
                                            aria-hidden='true'
                                            className='mt-1'
                                          >
                                            <span>
                                              <b> {item.price}</b>
                                            </span>
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    <Popover className='flex'>
                      {({ open }) => (
                        <>
                          <div className='relative flex'>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-red-600 text-red-600'
                                  : 'border-transparent text-gray-200 hover:text-gray-400',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px outline-none focus:outline-none'
                              )}
                            >
                              Services
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-red-600' : 'text-gray-200',
                                  'ml-1 h-4 w-4 group-hover:text-gray-200'
                                )}
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Popover.Panel className='absolute top-full -ml-6 text-sm text-gray-500 shadow rounded overflow-hidden w-full max-w-[130px]'>
                              <div
                                className='absolute inset-0 top-1/2 bg-white'
                                aria-hidden='true'
                              />
                              {navigation.servicepages.map((item, index) => (
                                <Link to={item.to} key={index}>
                                  <p className='relative p-3 hover:bg-gray-100 bg-white z-10'>
                                    {item.name}
                                  </p>
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <Popover className='flex'>
                      {({ open }) => (
                        <>
                          <div className='relative flex'>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-red-600 text-red-600'
                                  : 'border-transparent text-gray-200 hover:text-gray-400',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px outline-none focus:outline-none'
                              )}
                            >
                              Outlets
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-red-600' : 'text-gray-200',
                                  'ml-1 h-4 w-4 group-hover:text-gray-200'
                                )}
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Popover.Panel className='absolute top-full -ml-6 text-sm text-gray-500 shadow rounded overflow-hidden w-full max-w-[120px]'>
                              <div
                                className='absolute inset-0 top-1/2 bg-white'
                                aria-hidden='true'
                              />
                              {navigation.outlets.map((item, index) => (
                                <Link to={item.to} key={index}>
                                  <div className='relative p-3 hover:bg-gray-100 bg-white z-10'>
                                    {item.name}
                                  </div>
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <Popover className='flex'>
                      {({ open }) => (
                        <>
                          <div className='relative flex'>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-red-600 text-red-600'
                                  : 'border-transparent text-gray-200 hover:text-gray-400',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px outline-none focus:outline-none'
                              )}
                            >
                              More
                              <ChevronDownIcon
                                className={classNames(
                                  open ? 'text-red-600' : 'text-gray-200',
                                  'ml-1 h-4 w-4 group-hover:text-gray-200'
                                )}
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <Popover.Panel className='absolute top-full -ml-6 w-full max-w-[120px] text-sm text-gray-500 shadow rounded overflow-hidden'>
                              <div
                                className='absolute inset-0 top-1/2 bg-white'
                                aria-hidden='true'
                              />
                              {navigation.more.map((item, index) => (
                                <Link to={item.to} key={index}>
                                  <p className='relative p-3 hover:bg-gray-100 bg-white z-10'>
                                    {item.name}
                                  </p>
                                </Link>
                              ))}
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <Link
                      to='/contact-us'
                      className='flex items-center text-sm font-medium text-gray-200 hover:text-gray-400'
                    >
                      Contact
                    </Link>

                    <li className='menu-item pt-6'>
                      <a
                        href='https://www.spatial.io/s/Saboo-RKS-N-E-X-A-6322f4f7955236000112849b?share=3965153526388753240'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <span className='text-yellow-300 hover:text-red-600'>
                          Metaverse
                        </span>
                      </a>
                    </li>
                  </div>
                </Popover.Group>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default MainHeader;
