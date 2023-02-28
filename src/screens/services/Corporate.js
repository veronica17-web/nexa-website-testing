import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Corporate = () => {
  const notify = () => toast('your email client will be opened');
  const [phone, setPhone] = useState('');
  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }
  return (
    <div>
      <Header />
      <Helmet>
        <title>RKS Motor | Maruti Suzuki Showrooms in Hyderabad</title>
        <meta
          name='title'
          content='RKS Motor | Maruti Suzuki Showrooms in Hyderabad'
        />
        <meta
          name='description'
          content='Saboo Nexa sells hatchbacks, sedans, MUVs and SUVs in Hyderabad through its ARENA and NEXA channels, certified pre-owned cars through TRUE VALUE, and commercial vehicles through its Maruti Suzuki Commercial channel. For more info Visit www.saboonexa.in.'
        />
      </Helmet>
      <ToastContainer />
      <div className='grid grid-cols-1 md:grid-cols-1 gap-4 container mx-auto my-5'>
        <div className='bg-white border shadow-md rounded p-5 mx-5'>
          <p className='font-bold text-xl'>Corporate Form</p>
          <p className='text-sm mb-5'>
            Please fill out the form and we'll get back to you right away !
          </p>

          <br></br>
          <form
            action='https://crm.zoho.in/crm/WebToLeadForm'
            name='WebToLeads54158000000752015'
            method='POST'
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
            <div className='zcwf_row wfrm_fld_dpNn hidden'>
              <div className='zcwf_col_fld'>
                <select
                  className='zcwf_col_fld_slt'
                  id='Lead Source'
                  name='Lead Source'
                >
                  <option selected value='Nexa&#x20;Corporate&#x20;Enquiry'>
                    Nexa Corporate Enquiry
                  </option>
                </select>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-3'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                    Name
                  </label>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                    type='text'
                    id='Last_Name'
                    name='Last Name'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                    Email
                  </label>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                    type='text'
                    id='Email'
                    name='Email'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                    Phone
                  </label>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                    type='text'
                    id='Phone'
                    minLength='10'
                    maxLength='10'
                    required
                    name='Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for='message'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                  >
                    Comments
                  </label>
                  <textarea
                    id='Description'
                    rows='1'
                    name='Description'
                    class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Your message...'
                  ></textarea>
                </div>
              </div>

              <p className='text-gray-700'>
                <span className='text-black font-bold'>Disclaimer</span>: I
                agree that by clicking the ‘Submit’ button below, I am
                explicitly soliciting a call / message from Saboo Maruti (RKS
                Motor Pvt. Ltd) or its representatives on my ‘Mobile’
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
                    className='font-medium text-gray-700'
                  >
                    Please Agree with following Disclaimer
                  </label>
                </div>
              </div>
              <button
                className='bg-black text-white rounded py-2.5 px-10'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <div className="flex justify-center space-4">
          <p>
            Contact No: <span className="font-bold">9948152000</span>
          </p>
          <p>
            Email: <span className="font-bold">lumbini.corp@saboonexa.in</span>
          </p>
        </div> */}
        <div className='flex flex-col pd-2 md:flex-row m-3 justify-center mb-2 space-2'>
          <a
            href='tel:9948152000'
            className='bg-black rounded flex items-center m-2 text-white px-4 py-1.5'
          >
            <FaPhoneAlt className='mr-2' size={15} />
            99481 52000
          </a>
          <a
            href='mailto:lumbini.corp@saboonexa.in'
            className='bg-black rounded flex items-center m-2 text-white px-4 py-1.5'
          >
            <FaEnvelope className='mr-2' size={15} />
            lumbini.corp@saboonexa.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
