import axios from 'axios';
import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';

function OnRoadPrice({ title }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [outlet, setOutlet] = useState('');
  const [method, setMethod] = useState();

  const [loader, setLoader] = useState(false);

  function handleSubmit() {
    setLoader(true);
    axios
      .post('https://saboogroups.com/admin/api/on-road-price', {
        name: name,
        email: email,
        phone: phone,
        model: model,
        outlet: outlet,
      })
      .then((res) => {
        setMethod('POST');
        toast.success('Enquiry sent successfully');
      })
      .catch((err) => {
        setLoader(false);
        toast.error('Something went wrong');
        console.log(err);
      });
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
    <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Maruti-Suzuki-Nexa-lines-background.webp')] py-16">
      <div className='container mx-auto space-y-5 lg:px-0 px-5'>
        <h3 className='text-xl font-semibold text-white uppercase'>
          GET {title} ON-ROAD PRICE IN HYDERABAD
        </h3>

        <form
          action={
            !pattern.test(phone) ? '#' : 'https://crm.zoho.in/crm/WebToLeadForm'
          }
          name='WebToLeads54158000000752015'
          method={method}
          acceptCharset='UTF-8'
          className='space-y-2'
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
                ftype='email'
                id='Email'
                name='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                placeholder='Mobile'
                id='Phone'
                name='Phone'
                value={phone}
                maxLength='10'
                required
                minLength='10'
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/[^1-9]/g, '') &&
                      e.target.value.replace(/ /g, '')
                  )
                }
              />
              {!pattern.test(phone) && phone.length === 10 ? (
                <small className='text-red-500'>phone number is invalid</small>
              ) : (
                ''
              )}
            </div>
            <div>
              <select
                id='LEADCF6'
                name='LEADCF6'
                onChange={(e) => setModel(e.target.value)}
                className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
              >
                <option>Select Model</option>
                <option value='INVICTO'>Invicto</option>
                <option value='Fronx'>Fronx</option>
                <option value='Jimny'>Jimny</option>
                <option value='Grand Vitara'>Grand Vitara</option>
                <option value='Grand Vitara CNG'>Grand Vitara CNG</option>
                <option value='Ciaz'>Ciaz</option>
                <option value='Baleno'>Baleno</option>
                <option value='Baleno CNG'>Baleno CNG</option>
                <option value='Ignis'>Ignis</option>
                <option value='XL6'>XL6</option>
                <option value='XL6 CNG'>XL6 CNG</option>
              </select>
            </div>
            <div>
              <select
                id='LEADCF23'
                name='LEADCF23'
                onChange={(e) => setOutlet(e.target.value)}
                className='block w-full h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
              >
                <option>Select Outlet</option>
                <option value='Nexa Lumbini'>Nexa Lumbini</option>
                <option value='Nexa Kompally'>Nexa Kompally</option>
                <option value='Nexa Jubilee'>Nexa Jubilee</option>
              </select>
            </div>
          </div>
          <div className='flex items-center space-x-1'>
            <input id='comments' name='comments' type='checkbox' required />
            <label htmlFor='comments' className='font-medium text-gray-200'>
              Please agree the following disclaimer
            </label>
          </div>

          <p className='text-gray-200 text-xs'>
            <span className='font-semibold'>Disclaimer :</span> I agree that by
            clicking the ‘Submit’ button below, I am explicitly soliciting a
            call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
            Representatives on my ‘Mobile’
          </p>
          <button
            type='submit'
            onClick={handleSubmit}
            disabled={pattern.test(phone) && phone.length === 10 ? false : true}
            className='h-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
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
        </form>
      </div>
    </div>
  );
}

export default OnRoadPrice;
