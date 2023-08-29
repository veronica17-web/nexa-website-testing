import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';
import Header from '../../components/Header/Header';

function NewProduct() {
  const [phone, setPhone] = useState('');
  const [loader, setLoader] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }
  return (
    <>
      <Header />
      <img
        className='w-full'
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/grand_vitara.webp'
        alt=''
      />
      <div className='container mx-auto py-16 px-5'>
        <p className='text-center text-3xl font-semibold'>Bookings open</p>
        <form
          action='https://crm.zoho.in/crm/WebToLeadForm'
          name='WebToLeads54158000001051349'
          method='POST'
          acceptCharset='UTF-8'
          className='space-y-5'
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
            value='3e4c511e1bfac462fb9ac158b261b0d3df2ae6eb9f9847d50cb87f439855b4e4'
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

          <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-3'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name <span className='text-red-600'>*</span>
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                type='text'
                id='Last_Name'
                name='Last Name'
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                placeholder='Email'
                id='Email'
                name='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.length > 0 && !emailPattern.test(email) ? (
                <small className='text-red-500'>Invalid email address</small>
              ) : (
                ''
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Phone <span className='text-red-600'>*</span>
              </label>
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
              {phone.length > 0 && phone.length < 10 ? (
                <small className='text-red-500'>
                  Phone number must be 10 digits
                </small>
              ) : !pattern.test(phone) && phone.length === 10 ? (
                <small className='text-red-500'>Phone number is invalid</small>
              ) : (
                ''
              )}
            </div>
            <div></div>
          </div>
          <p className='text-gray-700'>
            <span className='text-black font-bold'>Disclaimer</span>: By
            clicking 'Submit,' you acknowledge that you have agreed to our Terms
            and Conditions.
          </p>
          {/* <div className='flex items-start'>
            <input
              id='disclaimer'
              name='disclaimer'
              type='checkbox'
              required
              className='h-4 w-4 rounded'
            />
            <div className='ml-2 text-sm'>
              <label htmlFor='disclaimer' className='font-medium text-gray-700'>
                Please Agree with Following Disclaimer
              </label>
            </div>
          </div> */}
          <button
            className='bg-black text-white rounded py-2.5 px-5'
            type='submit'
            disabled={pattern.test(phone) && phone.length === 10 ? false : true}
          >
            {loader ? (
              <div className='flex items-center justify-center'>
                <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
                Loading
              </div>
            ) : (
              'Book Now'
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default NewProduct;
