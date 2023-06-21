import React, { useState } from 'react';
import Header from '../../components/Header/Header';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Helmet from 'react-helmet';
// import { Autoplay, Navigation, Pagination } from 'swiper';
import OnRoadPrice from '../../components/utils/OnRoadPrice';
import { MdOutlineFileDownload } from 'react-icons/md';
// import Carousel from '../../components/Fronx/Extras/Carousel';
import MobileCarousel from '../../components/Fronx/Extras/MobileCarousel';

const width = window.innerWidth;

const Invicto = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Maruti Suzuki's New Invicto | Saboo NEXA</title>
        <meta name='title' content='Maruti Suzuki New Invicto | Saboo NEXA' />
        <meta
          name='description'
          content='Get the latest on-road price of Maruti Suzuki Fronx in Hyderabad and enjoy a smooth car ownership experience. For more information about Nexa Fronx visit your nearest Saboo Nexa dealership today.'
        />
      </Helmet>
      {width > 425 ? <WebBanner /> : <MobileWebBanner />}

      <InvictoCarEnquiry />
    </>
  );
};

function InvictoCarEnquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');

  const [method, setMethod] = useState();
  const [loader, setLoader] = useState(false);

  function handleSubmit() {
    setLoader(true);
    axios
      .post('https://saboogroups.com/admin/api/enquiry', {
        name: name,
        email: email,
        phone: phone,
        model: model,
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
    setLoader(false);
  }

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }
  return (
    <>
      <div className='py-6 bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Saboo-RKS-Nexa-Price-Banner.webp)]'>
        <div className='container mx-auto space-y-3 lg:px-0 px-5'>
          <h3 className='text-xl font-semibold text-white'>
            Register Now To Know More About Invicto
          </h3>
          <form
            action={
              pattern.test(phone) && phone.length === 10
                ? 'https://crm.zoho.in/crm/WebToLeadForm'
                : '#'
            }
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
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4'>
              <div>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  placeholder='Name'
                  id='Last_Name'
                  name='Last Name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  placeholder='Email'
                  id='Email'
                  name='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  placeholder='Mobile'
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
                {!pattern.test(phone) && phone.length === 10 ? (
                  <small className='text-red-500'>
                    phone number is invalid
                  </small>
                ) : (
                  ''
                )}
              </div>
              <>
                <select
                  id='LEADCF6'
                  name='LEADCF6'
                  onChange={(e) => setModel(e.target.value)}
                  className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                >
                  <option>Select Model</option>
                  <option value='INVICTO'>Invicto</option>
                </select>
              </>
              <>
                <button
                  type='submit'
                  disabled={
                    pattern.test(phone) && phone.length === 10 ? false : true
                  }
                  onClick={handleSubmit}
                  className='w-full h-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  {loader ? (
                    <div className='flex items-center justify-center'>
                      <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                      Loading
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const WebBanner = () => {
  return (
    <div className=''>
    <img
      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Website+Saboo+RKS+Nexa+Invicto+Banner.webp'
      alt=''
    />
    {/* <video class='w-screen' autoplay='autoplay' loop>
      <source
        class='w-30 h-30'
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/video/NEXA+FRONX++05SEC++110123+C2C+MUTE.mp4'
        type='video/mp4'
      />
    </video> */}
  </div>
  );
};

const MobileWebBanner = () => {
  return (
    <div className=''>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Website+Mobile+Saboo+RKS+Nexa+Invicto+Banner.webp'
        alt=''
      />
      {/* <video class='w-screen' autoplay='autoplay' loop>
      <source
        class='w-30 h-30'
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/video/NEXA+FRONX++05SEC++110123+C2C+MUTE.mp4'
        type='video/mp4'
      />
    </video> */}
    </div>
  );
};

export default Invicto;
