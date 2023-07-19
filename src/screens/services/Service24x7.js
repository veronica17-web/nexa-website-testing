import React, { useState, Fragment } from 'react';
import axios from 'axios';

import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { CgSpinner } from 'react-icons/cg';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { bookAservice } from '../../constants';
import { Link } from 'react-router-dom';

function Service24x7() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState();
  // const [model, setModel] = useState();
  const [pickup, setPickup] = useState();
  const [method, setMethod] = useState('');

  const [loader, setLoader] = useState(false);

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  function handleSubmit() {
    setLoader(true);
    try {
      axios.post('https://saboogroups.com/admin/api/book-a-service', {
        name: name,
        phone: phone,
        email: email,
        // model: model,
        pickup: pickup,
      });
      setMethod('POST');
      setLoader(false);
    } catch (error) {
      toast.error('Something went wrong!');
      setLoader(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>
          Maruti Nexa Car Service in Hyderabad | Nexa Service Center Near Me
        </title>
        <meta
          name='title'
          content='Maruti Nexa Car Service in Hyderabad | Nexa Service Center Near Me'
        />
        <meta
          name='description'
          content='Book Your Maruti Suzuki Nexa Car Service Online. Nexa Car Service Center Near Me.  Free Pickup & Drop Facility Available, Same Day Delivery, Genuine Spare Parts, Quality Service, Low Maintenance & Instant Assistance on Car Repair.'
        />
        <meta
          name='keywords'
          content='Nexa car service online booking, maruti car service online booking, baleno car service near me, baleno car service center, baleno car service in hyderabad, ignis car service near me, ignis car service center, Scross car service near me, Scross car service center, Scross car service in hyderabad, maruti Scross service near me, maruti Scross service hyderabad, maruti Scross service centers, Scross service hyderabad, nexa Scross service, nexa Scross service near me, nexa Scross service centers hyderabad,Xl6 car service near me, Xl6 car service center, Xl6 car service in hyderabad, maruti Xl6 service near me, maruti Xl6 service hyderabad, maruti Xl6 service centers, Xl6 service hyderabad, nexa Xl6 service, nexa Xl6 service near me, nexa Xl6 service centers hyderabad,ciaz car service near me, ciaz car service center, ciaz car service in hyderabad, maruti ciaz service near me, maruti ciaz service hyderabad, maruti ciaz service centers, ciaz service hyderabad, nexa ciaz service, nexa ciaz service near me, nexa ciaz service centers hyderabad,ignis car service in hyderabad, maruti ignis service near me, maruti ignis service hyderabad, maruti ignis service centers, ignis service hyderabad, nexa ignis service, nexa ignis service near me, nexa ignis service centers hyderabad, maruti baleno service near me, maruti baleno service hyderabad, maruti baleno service centers, baleno service hyderabad, nexa baleno service, nexa baleno service near me, nexa baleno service centers hyderabad'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboonexa.in/book-online-maruti-nexa-car-service/'
        />
        <meta
          property='og:title'
          content='Authorized Nexa Car Service Center Near Me | Maruti Car Service Center'
        />
        <meta
          property='og:description'
          content='Get best offers on your Maruti car service, Free pick up and dropping facility available at Saboo RKS Nexa authorized service centers for more details 9848898488'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Book-service.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/book-online-maruti-nexa-car-service/'
        />
        <meta
          property='twitter:title'
          content='Authorized Nexa Car Service Center Near Me | Maruti Car Service Center'
        />
        <meta
          property='twitter:description'
          content='Get best offers on your Nexa car service, Free pick up and dropping facility available at Saboo Nexa authorized service centers. Visit your nearest Saboo Maruti Suzuki Car Service Center for more details 9848898488.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Book-service.jpg'
        />
      </Helmet>
      <Header />
      <Slider />
      {/* <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-Nexa-Service-banner1.png"
        className="w-full"
        alt="Service Banner"
      /> */}
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Service 24x7
        </p>
      </div>
      <BuyerOptions />
      <ArticlewithImage />
      <FeatureService />

      <div className=''>
        <div className='container mx-auto py-16 px-5 lg:px-0'>
          <section class='bg-white dark:bg-gray-900'>
            <div class=''>
              <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
                Contact Us
              </h2>
              <p class='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
                We are your trusted destination for round-the-clock vehicle
                repairs and maintenance. Our dedicated team of skilled
                technicians is available 24 hours a day, 7 days a week to
                provide exceptional service for all your automotive needs
              </p>
            </div>
          </section>
          <form
            action={
              pattern.test(phone) && phone.length === 10
                ? 'https://crm.zoho.in/crm/WebToLeadForm'
                : '#'
            }
            name='WebToLeads54158000001051288'
            method={method}
            acceptCharset='UTF-8'
          >
            <input
              type='text'
              style={{ display: 'none' }}
              name='xnQsjsdp'
              value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
            />
            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
            <input
              type='text'
              style={{ display: 'none' }}
              name='xmIwtLD'
              value='3e4c511e1bfac462fb9ac158b261b0d3a1f7118a5052416c6735cee16458265f'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              name='actionType'
              value='TGVhZHM='
            />
            <input
              type='text'
              style={{ display: 'none' }}
              name='returnURL'
              value='https://www.saboonexa.in/thank-you?email=Email'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              id='ldeskuid'
              name='ldeskuid'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              id='LDTuvid'
              name='LDTuvid'
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Name <span className='text-red-600'>*</span>
                </label>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  id='Last_Name'
                  name='Last Name'
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  ftype='email'
                  id='Email'
                  name='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Phone <span className='text-red-600'>*</span>
                </label>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  minLength='10'
                  maxLength='10'
                  required
                  id='Mobile'
                  name='Mobile'
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/[^1-9]/g, '') &&
                        e.target.value.replace(/ /g, '')
                    )
                  }
                />
                {!pattern.test(phone) && phone.length === 10 ? (
                  <small className='text-red-500'>
                    phone number is invalid
                  </small>
                ) : (
                  ''
                )}
              </div>
              {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <select
                id="LEADCF6"
                name="LEADCF6"
                onChange={(e) => setModel(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option>Select Model</option>
                <option>S-Cross</option>
                <option>Ciaz</option>
                <option>Baleno</option>
                <option>Ignis</option>
                <option>XL6</option>
              </select>
            </div> */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Select Your Service Center{' '}
                  <span className='text-red-600'>*</span>
                </label>
                <select
                  id='LEADCF22'
                  name='LEADCF22'
                  onChange={(e) => setPickup(e.target.value)}
                  className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option>Select Outlet</option>

                  <option value='Nexa Service - Hafeezpet'>
                    Nexa Hafeezpet
                  </option>
                </select>
              </div>
            </div>
            <div className='flex items-start py-4'>
              <input
                id='disclaimer'
                name='disclaimer'
                type='checkbox'
                className='h-4 w-4 rounded'
                required
              />
              <div className='ml-2 text-sm'>
                <label
                  htmlFor='disclaimer'
                  className='font-medium text-gray-700'
                >
                  <span className='text-black font-bold'>Disclaimer</span>: I
                  agree that by clicking the ‘Submit’ button below, I am
                  explicitly soliciting a call / message from Saboo Maruti (RKS
                  Motor Pvt. Ltd) or its representatives on my ‘Mobile’
                </label>
              </div>
            </div>
            <button
              className='bg-black text-white rounded py-2.5 px-5'
              type='submit'
              disabled={
                pattern.test(phone) && phone.length === 10
                  ? false
                  : true && loader
                  ? true
                  : false
              }
              onClick={handleSubmit}
            >
              {loader ? (
                <div className='flex items-center justify-center'>
                  <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                  Loading
                </div>
              ) : (
                'Book A Service'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const ContactForm = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState();
  // const [model, setModel] = useState();
  const [pickup, setPickup] = useState();
  const [method, setMethod] = useState('');

  const [loader, setLoader] = useState(false);

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  function handleSubmit() {
    setLoader(true);
    try {
      axios.post('https://saboogroups.com/admin/api/book-a-service', {
        name: name,
        phone: phone,
        email: email,
        // model: model,
        pickup: pickup,
      });
      setMethod('POST');
      setLoader(false);
    } catch (error) {
      toast.error('Something went wrong!');
      setLoader(false);
    }
  }
  return (
    <>
      <section class='bg-white dark:bg-gray-900'>
        <div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
            Contact Us
          </h2>
          <p class='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
      </section>
    </>
  );
};

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect='fade'
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper slider-home'
      >
        {bookAservice.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} className='w-full' alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const BuyerOptions = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  return (
    <>
      <div className='container mx-auto py-16'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 lg:px-0 px-5'>
          <button onClick={() => setOpen(true)}>
            <div className='bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/Saboo-Nexa-Car-Test-Drive.webp'
                alt='1'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-gray-700'>
                book an appointment
              </p>
            </div>
          </button>
          <Link to='/maruti-nexa-showroom-outlets-in-hyderabad'>
            <div className='bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/Saboo-Nexa-Showroom-Locate.webp'
                alt='1'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-gray-700'>
                near by showroom
              </p>
            </div>
          </Link>
          <button onClick={() => setOpen(true)}>
            <div className='bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/Saboo-Nexa-Book-Showroom-Visit.webp'
                alt='1'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-gray-700'>
                visit our center
              </p>
            </div>
          </button>
          {/* <Link to='/maruti-car-insurance'>
            <div className='bg-white drop-shadow-lg hover:shadow-lg rounded space-y-3 py-3 w-full max-w-[350px] mx-auto mb-4 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/Saboo-Nexa-Ebook.webp'
                alt='1'
                className='mx-auto h-16'
              />
              <p className='uppercase font-bold text-center text-sm text-gray-700'>
                insurance renewal
              </p>
            </div>
          </Link> */}
        </div>
      </div>
      <EnquiryPopup
        open={open}
        setOpen={setOpen}
        phone={phone}
        setPhone={setPhone}
        title={'book a test drive / showroom visit'}
      />
    </>
  );
};

function EnquiryPopup({ open, phone, setPhone, setOpen, title }) {
  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-10 top-3 right-0 left-0 overflow-y-auto'
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='mt-3 text-left'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg leading-6 text-red-600 text-center uppercase font-semibold'
                  >
                    {title}
                  </Dialog.Title>
                  <div className='mt-2'>
                    <form
                      action='https://crm.zoho.in/crm/WebToLeadForm'
                      name='WebToLeads54158000007156717'
                      method='POST'
                      className='space-y-3'
                      accept-charset='UTF-8'
                    >
                      <input
                        type='text'
                        style={{ display: 'none' }}
                        name='xnQsjsdp'
                        value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
                      />
                      <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                      <input
                        type='text'
                        style={{ display: 'none' }}
                        name='xmIwtLD'
                        value='3e4c511e1bfac462fb9ac158b261b0d3e54ddbaf41eb8a08b30b4fc061369283'
                      />
                      <input
                        type='text'
                        style={{ display: 'none' }}
                        name='actionType'
                        value='TGVhZHM='
                      />
                      <input
                        type='text'
                        style={{ display: 'none' }}
                        name='returnURL'
                        value='https://www.saboonexa.in/thank-you?email=Email'
                      />
                      <input
                        type='text'
                        style={{ display: 'none' }}
                        id='ldeskuid'
                        name='ldeskuid'
                      />
                      <input
                        type='text'
                        style={{ display: 'none' }}
                        id='LDTuvid'
                        name='LDTuvid'
                      />
                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Name
                        </label>
                        <input
                          className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                          type='text'
                          required
                          name='Last Name'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Email
                        </label>
                        <input
                          className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                          type='text'
                          name='Email'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Phone
                        </label>
                        <input
                          className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                          type='text'
                          name='Phone'
                          minLength='10'
                          maxLength='10'
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Model
                        </label>
                        <select
                          name='LEADCF6'
                          className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option>Select Model</option>
                          <option value='INVICTO'>Invicto</option>
                          <option value='Fronx'>Fronx</option>
                          <option value='Jimny'>Jimny</option>
                          <option value='Grand Vitara'>Grand Vitara</option>
                          <option value='Ciaz'>Ciaz</option>
                          <option value='Baleno'>Baleno</option>
                          <option value='Ignis'>Ignis</option>
                          <option value='XL6'>XL6</option>
                        </select>
                      </div>

                      <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                        <button
                          type='submit'
                          className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm'
                        >
                          Submit
                        </button>
                        <button
                          type='button'
                          className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                      </div>
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
}

export const FeatureService = () => {
  return (
    <>
      <section class='bg-white dark:bg-gray-900'>
        <div class='container px-6 py-10 mx-auto'>
          <h1 class='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white'>
            explore our <br></br> 24x7 Services
          </h1>

          <div class='mt-2'>
            <span class='inline-block w-40 h-1 bg-blue-500 rounded-full'></span>
            <span class='inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full'></span>
            <span class='inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full'></span>
          </div>

          <div class='mt-8 xl:mt-12 lg:flex lg:items-center'>
            <div class='grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2'>
              <div class='space-y-3'>
                <span class='inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </span>

                <h1 class='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
                  Emergency roadside assistance
                </h1>

                <p class='text-gray-500 dark:text-gray-300'>
                  This service provides immediate help in case of breakdowns,
                  accidents, flat tires, dead batteries, or other unexpected car
                  issues. It may include services like jump-starting the car,
                  towing, fuel delivery, lockout assistance, and tire
                  replacement.
                </p>
              </div>

              <div class='space-y-3'>
                <span class='inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                    />
                  </svg>
                </span>

                <h1 class='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
                  Vehicle maintenance and repairs
                </h1>

                <p class='text-gray-500 dark:text-gray-300'>
                  24x7 car care services may offer on-call or on-site mechanics
                  who can perform basic repairs, routine maintenance tasks, and
                  diagnostic checks. This can include oil changes, filter
                  replacements, battery checks, brake repairs, and minor fixes.
                </p>
              </div>

              <div class='space-y-3'>
                <span class='inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                    />
                  </svg>
                </span>

                <h1 class='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
                  Mobile car washing and detailing
                </h1>

                <p class='text-gray-500 dark:text-gray-300'>
                  Some car care services provide mobile car wash and detailing
                  services, allowing customers to have their vehicles cleaned
                  and maintained at their preferred location, even during late
                  hours.
                </p>
              </div>

              <div class='space-y-3'>
                <span class='inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                    />
                  </svg>
                </span>

                <h1 class='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
                  24x7 customer support
                </h1>

                <p class='text-gray-500 dark:text-gray-300'>
                  Car care services with a 24x7 operating model often have a
                  dedicated customer support helpline that can assist with
                  inquiries, scheduling appointments, and coordinating services
                  at any time of the day.
                </p>
              </div>
            </div>

            <div class='hidden lg:flex lg:w-1/2 lg:justify-center'>
              <img
                class='w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full'
                src='https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section class='text-gray-600 body-font'>
        <div class='container px-5 py-10 mx-auto'>
          <div class='flex flex-col text-center w-full mb-20'>
            <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Your Reliable 24x7 Car Service Hub
            </h1>
            <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Welcome to Round-the-Clock Auto Care, the ultimate destination for
              all your car service needs. We understand that your vehicle is an
              essential part of your life, and it deserves top-notch care and
              attention, day or night. With our reliable 24x7 car service, we
              guarantee to be there for you whenever you need us.
            </p>
          </div>
          <div class='flex flex-wrap -m-4 text-center'>
            <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='text-red-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  2.7K
                </h2>
                <p class='leading-relaxed'>Service Requests</p>
              </div>
            </div>
            <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='text-red-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  1.3K
                </h2>
                <p class='leading-relaxed'>Customers</p>
              </div>
            </div>
            <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='text-red-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M3 18v-6a9 9 0 0118 0v6'></path>
                  <path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'></path>
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  74
                </h2>
                <p class='leading-relaxed'>Service Requests</p>
              </div>
            </div>
            <div class='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='text-red-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>7</h2>
                <p class='leading-relaxed'>Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

function ArticlewithImage() {
  return (
    <div className='container mx-auto px-5 lg:px-0 md:px-3'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
        <div className='space-y-3'>
          <p className='uppercase font-bold text-4xl'>nexa cars</p>
          <p className='uppercase font-bold text-md tracking-wider'>
            Round-the-Clock Auto Care
          </p>
          <p className='text-lg font-light'>
            Our dedicated team of experienced technicians is available
            round-the-clock to provide expert assistance and ensure your vehicle
            is always in excellent condition. Whether it's a routine maintenance
            check, an unexpected breakdown, or any other car-related issue, our
            professionals are just a call away.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/nexa-all-cars-banner.webp'
            alt='vehicle_banner'
          />
        </div>
      </div>
    </div>
  );
}

export default Service24x7;
