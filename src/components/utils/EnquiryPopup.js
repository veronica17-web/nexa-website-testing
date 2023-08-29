import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';

function EnquiryPopup({ open, phone, setPhone, setOpen, title }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [model, setModel] = useState('');
  const [loader, setLoader] = useState(false);
  const [method, setMethod] = useState();

  function handleSubmit() {
    setLoader(true);

    // First API call
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

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
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
                      action={
                        !pattern.test(phone)
                          ? '#'
                          : 'https://crm.zoho.in/crm/WebToLeadForm'
                      }
                      name='WebToLeads54158000000752015'
                      method={method}
                      // method='POST'
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
                          id='Last_Name'
                          required
                          name='Last Name'
                          onChange={(e) => setName(e.target.value)}
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
                          <small className='text-red-500'>
                            Invalid email address
                          </small>
                        ) : (
                          ''
                        )}
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Phone
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
                          <small className='text-red-500'>
                            Phone number is invalid
                          </small>
                        ) : (
                          ''
                        )}
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Model
                        </label>
                        <select
                          name='LEADCF6'
                          id='LEADCF6'
                          onChange={(e) => setModel(e.target.value)}
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

                      <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse p-10'>
                        <button
                          type='submit'
                          onClick={handleSubmit}
                          disabled={
                            pattern.test(phone) && phone.length === 10
                              ? false
                              : true
                          }
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
                        <button
                          type='button'
                          className='m-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
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

export default EnquiryPopup;
