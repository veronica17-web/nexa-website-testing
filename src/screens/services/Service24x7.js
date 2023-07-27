import React, { useState } from 'react';
import axios from 'axios';

import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { CgSpinner } from 'react-icons/cg';
import { AiFillPlayCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

// import required modules

import { Link } from 'react-router-dom';
import ModalService from './ModalService';

function Service24x7() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState();
  // const [model, setModel] = useState();
  // const [pickup, setPickup] = useState();
  const [method, setMethod] = useState('');

  const [loader, setLoader] = useState(false);
  const [model, setModel] = useState('');
  const [message, setMessage] = useState('');

  const [showMyModal, setShowMyModal] = useState(false);

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
    // First API call
    axios
      .post('https://saboogroups.com/admin/api/contact-us', {
        name: name,
        email: email,
        phone: phone,
        model: model,
        message: message,
      })
      .then((res) => {
        setMethod('POST');
        toast.success('Enquiry sent successfully');
      })
      .catch((err) => {
        setLoader(false);
        toast.error('Something went wrong!');
        console.log(err);
      });

    // Second API call
    axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
     Our Sales consultant will contact you shortly.
     
     Regards
     RKS Motor Pvt. Ltd.
     98488 98488
     www.saboomaruti.in
     www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log('SMS API Response:', res.data);
        // Handle the response from the SMS API if needed
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        // Handle errors from the SMS API if needed
      })
      .finally(() => {
        setLoader(false);
      });
  }

  const handleOnClose = () => setShowMyModal(false);

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
      {/* <Slider /> */}
      {/* <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-Nexa-Service-banner1.png"
        className="w-full"
        alt="Service Banner"
      /> */}
      <div className='bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Lines.png)] text-white bg-black bg-cover bg-no-repeat '>
        <section>
          <div className='hidden justify-around md:flex'>
            <img
              // src={require('../../assets/nexa service banner.jpg')}
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/nexa+service+banner.jpg'
              className='w-full'
              alt='Service Banner'
            />
          </div>
          <div className=' md:hidden'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/nexa+service+banner+mobile.jpg'
              className='w-full'
              alt='Service Banner'
            />
          </div>
        </section>
        <section>
          <div className=' flex-col-reverse md:flex-row lg:justify-center py-20 gap-5 md:flex hidden'>
            <div className='md:w-1/2 flex justify-center lg:justify-end lg:pr-20 mt-10 md'>
              <div>
                <div className='rounded-[4rem]  border border-gray-800 bg-black overflow-hidden md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover  '></div>
                <div className='rounded-[4rem] bg-white overflow-hidden border-[0.5px] border-gray-400 mb-10 md:-mt-[27rem] lg:-mt-[29rem] ml-[3rem] md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover  '>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/About+us.jpg'
                    alt=''
                    srcset=''
                  />
                </div>
              </div>
            </div>

            <div className='md:w-1/2  flex items-center justify-center md:p-4 mb-10'>
              <div className='container md:w-[90%] '>
                <span className='text-xl md:text-4xl font-serif'>
                  About Saboo RKS <span className='font-sans'>24/7</span>
                </span>
                <br />
                <span className='text-5xl md:text-8xl font-serif tracking-wide'>
                  Service
                </span>
                <br />
                <span className='font-serif md:text-xl'>
                  A 24/7 car service refers to a car-related service or
                  transportation option that operates around the clock, 24 hours
                  a day, 7 days a week. These services are designed to provide
                  convenience and accessibility to customers at any time of the
                  day or night, including weekends and holidays.
                </span>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <div className=' px-3 py-4 text-center'>
              <div className='container  '>
                <div className='text-xl  font-serif'>
                  About Saboo RKS <span className='font-sans'>24/7</span>
                </div>

                <div className='text-5xl md:text-8xl font-serif tracking-wide'>
                  Service
                </div>

                <div className='font-serif md:text-xl pt-1'>
                  A 24/7 car service refers to a car-related service or
                  transportation option that operates around the clock, 24 hours
                  a day, 7 days a week. These services are designed to provide
                  convenience and accessibility to customers at any time of the
                  day or night, including weekends and holidays.
                </div>
              </div>
            </div>
            <div className='my-4 flex flex-col items-center'>
              <div className='rounded-[2rem]  border border-gray-800 bg-black overflow-hidden  object-cover h-[40vh] w-[40vh] mr-6 m-1 '></div>
              <div className='rounded-[2rem] bg-white overflow-hidden border-[0.5px] border-gray-400  h-[40vh] w-[40vh] -mt-[43vh]  object-cover ml-8 my-6 '>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/About+us.jpg'
                  alt=''
                  srcset=''
                  className=''
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='w-full mb-8 '>
            <div className='text-center mb-1 md:mb-6'>
              {/* <span className='txt-2xl md:text-5xl font-serif'>
                Our{' '}
                <span className='font-sans text-red-500 font-bold '>24/7 </span>
              </span>
              <span className='text-3xl md:text-8xl font-serif tracking-wide'>Service</span> */}
              <span className='text-2xl md:text-4xl font-serif'>
                Our{' '}
                <span className='font-sans text-3xl md:text-5xl text-red-500 font-bold'>
                  24/7
                </span>
              </span>
              <br />
              <span className='text-5xl md:text-8xl font-serif tracking-wide'>
                Service
              </span>
            </div>

            <div className='hidden  lg:grid md:grid-cols-2 mx-auto gap-6 container w-full '>
              <div
                className='col-span-1 lg:w-full border rounded-[3rem] mx-auto group bg-black flex justify-around items-center hover:bg-[#494949]  p-4 gap-2 cursor-pointer relative'
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                <div className='h-[9rem] w-[9rem] flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-[2rem] px-1'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Periodic+Service.png'
                    alt=''
                    srcset=''
                    className='group-hover:hidden'
                  />
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/period+Black.png'
                    alt=''
                    srcset=''
                    className='group-hover:block hidden'
                  />
                </div>
                <div className='text-3xl font-serif whitespace-nowrap'>
                  Periodic Services
                </div>
                <div className=''>
                  <AiFillPlayCircle className='text-5xl absolute bottom-4 right-8 group-hover:text-white text-[#494949] bg-gray-300 rounded-full group-hover:bg-[#494949]' />
                </div>
              </div>
              <div
                className='col-span-1 lg:w-full border rounded-[3rem] mx-auto group bg-black flex justify-around items-center hover:bg-[#494949]  p-4 gap-2 cursor-pointer relative'
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                <div className='h-[9rem] w-[9rem] flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-[2rem] px-1'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Repair.png'
                    alt=''
                    srcset=''
                    className='group-hover:hidden'
                  />
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/repair+Black.png'
                    alt=''
                    srcset=''
                    className='group-hover:block hidden'
                  />
                </div>
                <div className='text-3xl font-serif whitespace-nowrap'>
                  Repair & Maintenance
                </div>
                <div className=''>
                  <AiFillPlayCircle className='text-5xl absolute bottom-4 right-8 group-hover:text-white text-[#494949] bg-gray-300 rounded-full group-hover:bg-[#494949]' />
                </div>
              </div>
              <div
                className='col-span-1 lg:w-full border rounded-[3rem] mx-auto group bg-black flex justify-around items-center hover:bg-[#494949]  p-4 gap-2 cursor-pointer relative'
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                <div className='h-[9rem] w-[9rem] flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-[2rem] px-1'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Body.png'
                    alt=''
                    srcset=''
                    className='group-hover:hidden'
                  />
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/body+black.png'
                    alt=''
                    srcset=''
                    className='group-hover:block hidden'
                  />
                </div>
                <div className='text-3xl font-serif whitespace-nowrap'>
                  Body Repair
                </div>
                <div className=''>
                  <AiFillPlayCircle className='text-5xl absolute bottom-4 right-8 group-hover:text-white text-[#494949] bg-gray-300 rounded-full group-hover:bg-[#494949]' />
                </div>
              </div>
              <div
                className='col-span-1 lg:w-full border rounded-[3rem] mx-auto group bg-black flex justify-around items-center hover:bg-[#494949]  p-4 gap-2 cursor-pointer relative'
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                <div className='h-[9rem] w-[9rem] flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-[2rem] px-1'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/car+care.png'
                    alt=''
                    srcset=''
                    className='group-hover:hidden'
                  />
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/care+care+black.png'
                    alt=''
                    srcset=''
                    className='group-hover:block hidden'
                  />
                </div>
                <div className='text-3xl font-serif whitespace-nowrap '>
                  Car Care Service
                </div>
                <div className=''>
                  <AiFillPlayCircle className='text-5xl absolute bottom-4 right-8 group-hover:text-white text-[#494949] bg-gray-300 rounded-full group-hover:bg-[#494949]' />
                </div>
              </div>
            </div>
            <div className='lg:hidden'>
              <div
                className='    mx-auto group  items-center   p-4  cursor-pointer'
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                <div className='flex justify-around border p-2 rounded-2xl bg-black hover:bg-[#494949]'>
                  <div className=' flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-xl  p-1 w-1/3 h-[10vh]'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Periodic+Service.png'
                      alt=''
                      srcset=''
                      className='group-hover:hidden p-1'
                    />
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/period+Black.png'
                      alt=''
                      srcset=''
                      className='group-hover:block hidden p-1'
                    />
                  </div>
                  <div className='text-2xl font-serif  my-auto pl-2 w-2/3'>
                    Periodic Services
                  </div>
                </div>
              </div>
              <div
                className='    mx-auto group  items-center   p-4  cursor-pointer'
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                <div className='flex justify-around border p-2 rounded-2xl bg-black hover:bg-[#494949]'>
                  <div className=' flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-xl  p-1 w-1/3 h-[10vh]'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Repair.png'
                      alt=''
                      srcset=''
                      className='group-hover:hidden h-[10vh] p-1'
                    />
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/repair+Black.png'
                      alt=''
                      srcset=''
                      className='group-hover:block hidden  h-[10vh] p-1'
                    />
                  </div>
                  <div className='text-2xl font-serif  my-auto pl-2 w-2/3'>
                    Repair & Maintenance
                  </div>
                </div>
              </div>
              <div
                className='    mx-auto group  items-center   p-4  cursor-pointer'
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                <div className='flex justify-around border p-2 rounded-2xl bg-black hover:bg-[#494949]'>
                  <div className=' flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-xl  p-1 w-1/3 h-[10vh]'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Body.png'
                      alt=''
                      srcset=''
                      className='group-hover:hidden  h-[10vh] p-1'
                    />
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/body+black.png'
                      alt=''
                      srcset=''
                      className='group-hover:block hidden  h-[10vh] p-1'
                    />
                  </div>
                  <div className='text-2xl font-serif  my-auto pl-2 w-2/3'>
                    Body Repair
                  </div>
                </div>
              </div>
              <div
                className='    mx-auto group  items-center   p-4  cursor-pointer'
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                <div className='flex justify-around border p-2 rounded-2xl bg-black hover:bg-[#494949]'>
                  <div className=' flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-xl  p-1 w-1/3'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/car+care.png'
                      alt=''
                      srcset=''
                      className='group-hover:hidden  h-[10vh] p-1'
                    />
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/care+care+black.png'
                      alt=''
                      srcset=''
                      className='group-hover:block hidden  h-[10vh] p-1'
                    />
                  </div>
                  <div className='text-2xl font-serif  my-auto pl-2 w-2/3'>
                    Car Care Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='hidden md:flex flex-col md:flex-row md:justify-center py-24 gap-5  '>
            <div className=' md:w-1/2 flex justify-end items-center p-4 mb-10'>
              <div className=' '>
                <div className='container mx-auto px-10  '>
                  <span className='text-5xl font-serif tracking-wide'>
                    Your comfort matters,
                  </span>
                  <br />
                  <span className='text-5xl font-serif tracking-wide'>
                    As much as your car.
                  </span>
                  <br />
                  <br />
                  <a href='#contact2'>
                    <button className=' bg-black px-4 py-3 mt-4 border rounded-xl text-xl'>
                      BOOK YOUR CAR SERVICE NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-center lg:justify-start md:pl-28 '>
              <div>
                <div className='rounded-[4rem]  border border-gray-800 bg-black overflow-hidden h-[24rem] w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover  '></div>

                <div className='rounded-[4rem] bg-white overflow-hidden border-[0.5px] border-gray-400 mb-10 -mt-[27rem] lg:-mt-[29rem] -ml-[3rem] h-[24rem] w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/your+comfort.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <div className=' px-3 py-4 text-center'>
              <div className='container  '>
                <div className='text-3xl  font-serif'>
                  Your comfort matters,
                </div>

                <div className='text-3xl  font-serif '>
                  As much as your car.
                </div>

                <a href='#contact2'>
                  <button className=' bg-black px-4 py-3 mt-4 border rounded-xl text-md mb-3'>
                    BOOK YOUR CAR SERVICE NOW
                  </button>
                </a>
              </div>
            </div>
            <div className='my-4 flex flex-col items-center'>
              <div className='rounded-[2rem]  border border-gray-800 bg-black overflow-hidden  object-cover h-[40vh] w-[40vh] mr-6 m-1 '></div>
              <div className='rounded-[2rem] bg-white overflow-hidden border-[0.5px] border-gray-400  h-[40vh] w-[40vh] -mt-[43vh]  object-cover ml-8 my-6 '>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/your+comfort.jpg'
                  alt=''
                  srcset=''
                  className=''
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='hidden md:flex flex-col-reverse md:flex-row lg:justify-center pb-20 pt-10 gap-5 mb-10  '>
            <div className='md:w-1/2 flex justify-center lg:justify-end lg:pr-20 '>
              <div>
                <div className='rounded-[4rem]  border border-gray-800 bg-black overflow-hidden md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover  '></div>
                <div className='rounded-[4rem] bg-black overflow-hidden border-[0.5px] border-gray-400 mb-10 -mt-[29rem]  ml-[3rem] md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem]  object-cover  text-xl flex items-center '>
                  <div className='mx-10'>
                    <div className='mt-4 ' style={{ fontSize: '4rem' }}>
                      &#8223;
                    </div>
                    <div className='font-serif '>
                      Sent for servicing and after service doubts too they
                      cleared with efficiency and a lot of patience. I recommend
                      them very much for a trust worthy and efficient service.
                    </div>
                    <div
                      className=' -mt-4 rotate-180 '
                      style={{ fontSize: '4rem' }}
                    >
                      &#8223;
                    </div>
                    <div className='flex justify-center font-serif mt-4 italic text-2xl'>
                      K Sudha
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-1/2  flex items-center justify-center p-4 mb-10'>
              <div className='container md:w-[90%] '>
                <div className='text-6xl font-serif tracking-wide pb-2'>
                  Our Customers Say
                </div>

                <div className='font-serif text-xl'>
                  A 24/7 car service refers to a car-related service or
                  transportation option that operates around the clock, 24 hours
                  a day, 7 days a week.
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <div className=' px-3 py-4 text-center'>
              <div className='container  '>
                <div className='text-4xl  font-serif'>Our Customers Say</div>

                <div className='font-serif text-lg pb-3'>
                  A 24/7 car service refers to a car-related service or
                  transportation option that operates around the clock, 24 hours
                  a day, 7 days a week.
                </div>
              </div>
            </div>
            <div className='my-4 flex flex-col items-center'>
              <div className='rounded-[2rem]  border border-gray-800 bg-black overflow-hidden  object-cover h-[40vh] w-[40vh] mr-6 m-1 '></div>
              {/* <div className='rounded-[2rem] bg-white overflow-hidden border-[0.5px] border-gray-400  h-[40vh] w-[40vh] -mt-[43vh]  object-cover ml-8 my-6 '>
                <img src={comfort} alt='' srcset='' className='' />
              </div> */}
              <div className='rounded-[2rem] bg-black overflow-hidden border-[0.5px] border-gray-100 mb-10 -mt-[43vh]  ml-[1rem] h-[40vh] w-[40vh] object-cover flex items-center '>
                <div className='mx-6'>
                  <div className=' animate-pulse' style={{ fontSize: '2rem' }}>
                    &#8223;
                  </div>
                  <div className='font-serif '>
                    Sent for servicing and after service doubts too they cleared
                    with efficiency and a lot of patience. I recommend them very
                    much for a trust worthy and efficient service.
                  </div>
                  <div
                    className=' rotate-180 animate-pulse'
                    style={{ fontSize: '2rem' }}
                  >
                    &#8223;
                  </div>
                  <div className='flex justify-center font-serif mt-2 italic text-xl'>
                    ~ K Sudha
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <InvictoCarEnquiry2 /> */}

        <section id='contact2'>
          <div className='pb-28  px-2'>
            <div className='container mx-auto space-y-3 lg:px-10 px-5 bg-[#1a1a1a] rounded-[4rem] py-6'>
              <div className='text-center  text-2xl lg:text-4xl py-4 font-serif tracking-wide'>
                Book a Service Appointment
              </div>
              <form
                action='https://crm.zoho.in/crm/WebToLeadForm'
                name='WebToLeads54158000000752015'
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
                  value='3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92'
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
                <div className='space-y-4'>
                  <div className='grid md:grid-cols-2 gap-3'>
                    <div className='flex items-center'>
                      <label
                        htmlFor='Last_Name'
                        className='font-serif pr-2 md:text-xl'
                      >
                        Name:
                      </label>
                      <input
                        className='border-b border-white h-10 outline-none  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans bg-[#1a1a1a] '
                        // placeholder='Name'
                        id='Last_Name'
                        name='Last Name'
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='flex items-center'>
                      <label
                        htmlFor='Email'
                        className='font-serif pr-2 md:text-xl whitespace-nowrap'
                      >
                        Email ID:
                      </label>
                      <input
                        className='border-b border-white h-10 outline-none  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans bg-[#1a1a1a] '
                        // placeholder='Name'
                        id='Email'
                        name='Email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* <div style={{ display: 'none' }}>
                      <label className='block text-sm font-medium text-gray-700'>
                        Service Type
                      </label>
                      <select
                        id='LEADCF6'
                        name='LEADCF6'
                        className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                      >
                        <option>24x7 service</option>
                        <option>Paid Service</option>
                      </select>
                    </div> */}

                    {/* <div className='zcwf_row' style={{ display: 'none' }}>
                          <div className='zcwf_col_lab'>
                            <label htmlFor='LEADCF6'>Car Model</label>
                          </div>
                          <div className='zcwf_col_fld'>
                            <select
                              className='zcwf_col_fld_slt'
                              id='LEADCF6'
                              name='LEADCF6'
                            >
                              <option defaultValue value='SABOO NEXA Popup'>
                                Contact Us Page
                              </option>
                            </select>
                            <div className='zcwf_col_help'></div>
                          </div>
                        </div> */}
                    {/* <div className='flex '>
                      <label className='font-serif pr-2 md:text-xl whitespace-nowrap'>
                        Outlet:
                      </label>
                      <select
                        id='LEADCF23'
                        name='LEADCF23'
                        className='block w-full h-10 px-3 border-b border-gray-300 bg-[#1a1a1a]  shadow-sm focus:outline-none  sm:text-sm'
                      >
                        <option>Select Outlet</option>
                        <option>Jubilee</option>
                        <option>Lumbini</option>
                        <option>Kompally</option>
                        <option>Hafeezpet</option>
                      </select>
                    </div> */}
                    <div className='flex items-center'>
                      <label className='font-serif pr-2 md:text-xl whitespace-nowrap'>
                        Service Type:
                      </label>
                      <select
                        id='LEADCF6'
                        name='LEADCF6'
                        onChange={(e) => setModel(e.target.value)}
                        className='block w-full py-2  border-b border-gray-300 bg-[#1a1a1a] shadow-sm focus:outline-none  font-serif'
                      >
                        <option disabled selected></option>
                        <option value='Periodic Services'>
                          Periodic Services
                        </option>
                        <option value='Repair & Maintenance'>
                          Repair & Maintenance
                        </option>
                        <option value='Body Repair'>Body Repair</option>
                        <option value='Car Care Service'>
                          Car Care Service
                        </option>
                      </select>
                    </div>
                    <div className='flex items-center'>
                      <label
                        htmlFor='Phone'
                        className='font-serif pr-2 md:text-xl whitespace-nowrap'
                      >
                        Phone:
                      </label>
                      <input
                        className='border-b border-white h-10 outline-none  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans bg-[#1a1a1a] '
                        // placeholder='Mobile'
                        value={phone}
                        id='Phone'
                        name='Phone'
                        required
                        minLength='10'
                        maxLength='10'
                        onChange={(e) =>
                          setPhone(
                            e.target.value.replace(/[^1-9 ]/g, '') &&
                              e.target.value.replace(/ /g, '')
                          )
                        }
                      />
                    </div>
                    <div className='flex items-center md:col-span-2 mb-4' >
                      <label className='font-serif pr-2 md:text-xl whitespace-nowrap'>
                        Message:
                      </label>
                      <textarea
                        className='border-b  outline-none px-1  w-full bg-[#1a1a1a]'
                        type='text'
                        id='message'
                        name='message'
                        style={{ minHeight: '10px' }}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  {/* <p className='text-gray-300 text-xs'>
                    <span className='text-gray-400 font-bold'>Disclaimer</span>:
                    I agree that by clicking the ‘Submit’ button below, I am
                    explicitly soliciting a call / message from Saboo Maruti
                    (RKS Motor Pvt. Ltd) or its representatives on my ‘Mobile’
                  </p>
                  <div className='flex items-start'>
                    <input
                      id='disclaimer'
                      name='disclaimer'
                      type='checkbox'
                      className='h-4 w-4 rounded'
                    />
                    <div className='ml-2 text-sm'>
                      <label
                        htmlFor='disclaimer'
                        className='font-medium text-gray-100'
                      >
                        Please Agree with following Disclaimer
                      </label>
                    </div>
                  </div> */}
                  {/* <button
                    className='bg-black text-white rounded py-2.5 px-10'
                    type='submit'
                    disabled={
                      pattern.test(phone) && phone.length === 10 ? false : true
                    }
                    onClick={handleSubmit}
                  >
                    {loader ? (
                      <div className='flex items-center justify-center'>
                        <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                        Loading
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button> */}
                  <button
                    type='submit'
                    disabled={
                      pattern.test(phone) && phone.length === 10 ? false : true
                    }
                    onClick={handleSubmit}
                    class='group relative md:col-span-2  w-min flex   whitespace-nowrap mx-auto shadow-lg overflow-hidden bg-black text-md rounded-2xl font-semibold  mb-4  px-5 py-3 border border-gray-500 cursor-pointer text-xl'
                  >
                    {loader ? (
                      <div className='flex items-center justify-center '>
                        <CgSpinner className='animate-spin   text-white ' />
                        Loading
                      </div>
                    ) : (
                      'BOOK NOW'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className='bg-[#1b1b1b]'>
          <div className='grid lg:grid-cols-2 container mx-auto pt-8 px-1'>
            <div className='col-span-1'>
              <div className='flex '>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/rks+logo3.png'
                  alt=''
                  srcset=''
                  className='w-[35%]'
                />
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Asset+10.png'
                  alt=''
                  srcset=''
                  className='w-[50%]'
                />
              </div>
              <div className='py-2 my-2 font-serif'>
                Emergency Roadside Assistance: Many automobile clubs, insurance
                companies and specialized service providers offer 24/7 roadside
                assistance. This service helps drivers who experience car
                breakdowns, flat tires, dead batteries, or other unexpected
                issues while on the road.
              </div>
              <div className=''>
                <a className='hover:opacity-75' href='tel:+91 9848365247'>
                  <button className='px-4 py-2 bg-black border rounded-md mb-4 '>
                    +(91) 9848 365 247
                  </button>
                </a>
                <br />
                {/* <a
                  className='italic text-indigo-500 hover:opacity-75'
                  href='mailto:24-7SERVICE@SABOO'
                >
                  24-7SERVICE@SABOO
                </a> */}
                <button className='px-4 py-2 bg-black border rounded-md  mb-4'>
                  24-7SERVICE@SABOO
                </button>
              </div>
            </div>
            <div className='col-span-1 font-seri flex gap-4 lg:mx-auto flex-col md:flex-row px-2 justify-around w-full'>
              <div className='font-serif'>
                <div className='mb-2 text-3xl font-serif'>Outlets</div>
                <Link to='/maruti-nexa-showroom-outlets-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500'>
                    Showrooms
                  </div>
                </Link>
                <Link to='/maruti-nexa-workshop-outlets-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500'>
                    Workshops
                  </div>
                </Link>
                <Link to='/maruti-nexa-truevalue-outlets-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500'>
                    True Value
                  </div>
                </Link>
              </div>
              <div className='font-serif'>
                <div className='mb-2 text-3xl font-serif'>Corporate</div>
                <Link to='/about'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    About
                  </div>
                </Link>
                <Link to='/'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Careers
                  </div>
                </Link>
                <Link to='/contact-us'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Contact Us
                  </div>
                </Link>
                <Link to='/book-online-maruti-nexa-car-service'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Book a service
                  </div>
                </Link>
                <Link to='/terms-and-condition'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Terms & Conditions
                  </div>
                </Link>
                <Link to='/'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    FAQ's
                  </div>
                </Link>
                <Link to='/'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Annual Report
                  </div>
                </Link>
                <Link to='/'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    CSR Policy
                  </div>
                </Link>
              </div>
              <div className='font-serif'>
                <div className='mb-2 text-3xl font-serif'>Nexa Cars</div>
                <Link to='/nexa-xl6-on-road-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>XL6</div>
                </Link>
                <Link to='/nexa-ciaz-on-road-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Ciaz
                  </div>
                </Link>
                <Link to='/new-maruti-baleno-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Baleno
                  </div>
                </Link>
                <Link to='/nexa-ignis-on-road-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Ignis
                  </div>
                </Link>
                <Link to='/grand-vitara-on-road-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Grand Vitara
                  </div>
                </Link>
                <Link to='/maruti-fronx-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Fronx
                  </div>
                </Link>
                <Link to='/maruti-jimny-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Jimny
                  </div>
                </Link>
                <Link to='/maruti-invicto-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Invicto
                  </div>
                </Link>
              </div>
            </div>

            <div className=' flex flex-wrap lg:gap-2 md:justify-between text-sm mt-8 pb-2 text-gray-300'>
              <div className='font-serif'>Terms & Conditions</div>
              <div className='font-serif'>
                ©2023 All Rights Reserved by RKS Motor Pvt Ltd.
              </div>
              <div className='font-serif'>Privacy Policy</div>
            </div>
          </div>
        </section>
        <ModalService onClose={handleOnClose} visible={showMyModal} />
      </div>
    </>
  );
}

export default Service24x7;
