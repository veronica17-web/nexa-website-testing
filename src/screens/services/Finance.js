import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { CgSpinner } from 'react-icons/cg';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Finance() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState();
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
    axios
      .post('https://saboogroups.com/admin/api/finance', {
        name: name,
        phone: phone,
        email: email,
      })
      .then((res) => {
        setMethod('POST');
        setLoader(false);
      })
      .catch((err) => {
        toast.error('Something went wrong!');
        setLoader(false);
        console.log(err);
      });
  }

  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');

  function calculateEMI() {
    const principal = parseFloat(loanAmount);
    const calculateInterest = parseFloat(interestRate) / 100 / 12;
    const calculatePayments = parseFloat(loanTerm) * 12;

    //calculate the monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = parseFloat(monthly).toFixed(2);

    //calculate interest
    const totalInterest = (monthly * calculatePayments - principal).toFixed(2);
    const totalPayment = (monthly * calculatePayments).toFixed(2);

    document.getElementById('month').innerHTML = parseFloat(monthlyPayment);
    document.getElementById('interest').innerHTML = totalInterest;
    document.getElementById('total').innerHTML = totalPayment;
  }

  return (
    <>
      <Header />
      <Helmet>
        <title>Maruti Suzuki Car Finance with Low Interest | Saboo Nexa</title>
        <meta
          name='title'
          content='Maruti Suzuki Car Finance with Low Interest | Saboo Nexa'
        />
        <meta
          name='description'
          content='Maruti Finance provides the best finance deals on New & Pre-Owned Car Loans. Get Quick Car Loan, Special offers, Quick Approval, Low-Interest Rates & Low EMI.'
        />
        <meta name='keywords' content='Maruti Suzuki Nexa Car Finance' />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboonexa.in/maruti-finance/'
        />
        <meta
          property='og:title'
          content='Maruti Suzuki Nexa Car Finance with Low Interest | Saboo Nexa'
        />
        <meta
          property='og:description'
          content='Maruti Suzuki Nexa Finance provides the best finance deals on New & Pre-Owned Car Loans. Get Quick Car Loan, Special offers, Quick Approval, Low-Interest Rates & Low EMI.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Finance.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/maruti-finance/'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki Nexa Car Finance with Low Interest | Saboo Nexa'
        />
        <meta
          property='twitter:description'
          content='Maruti Suzuki Nexa Finance provides the best finance deals on New & Pre-Owned Car Loans. Get Quick Car Loan, Special offers, Quick Approval, Low-Interest Rates & Low EMI.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Finance.jpg'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Finance.webp'
        className='max-w-full w-full'
        alt='finance banner'
      />
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Finance
        </p>
      </div>
      <div className='container mx-auto py-16'>
        <div className='grid md:grid-cols-2 gap-4 px-5'>
          {/* new grid column opens */}
          <form
            action={
              pattern.test(phone) && phone.length === 10
                ? 'https://crm.zoho.in/crm/WebToLeadForm'
                : '#'
            }
            name='WebToLeads54158000001051349'
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
            <div className='space-y-4'>
              <p className='uppercase font-bold text-md'>contact details :</p>
              <div className='grid md:grid-cols-2 gap-3'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Name <span className='text-red-600'>*</span>
                  </label>
                  <input
                    className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                    type='text'
                    id='Last_Name'
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
                    type='text'
                    id='Email'
                    name='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Phone <span className='text-red-600'>*</span>
                </label>
                <input
                  className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                  type='text'
                  id='Phone'
                  name='Phone'
                  value={phone}
                  required
                  minLength='10'
                  maxLength='10'
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
                  required
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
                className='bg-black text-white rounded py-2.5 px-5'
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
                  'Get Your Loan Now'
                )}
              </button>
            </div>
          </form>

          {/* new grid column opens */}
          <div>
            <p className='text-2xl font-bold mb-7'>EMI Calculator</p>
            <div className='flex items-center justify-between mt-2'>
              <p>Curreny :</p>
              <select
                disabled
                name='currency'
                className='block py-2 w-full max-w-[75%] px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
              >
                <option>Select Curreny</option>
                <option selected>₹ INR</option>
                <option>$ USD</option>
              </select>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <p>Loan Amount :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500'
                type='text'
                placeholder='100000'
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className='flex items-center justify-between mt-2'>
              <p>Interest Rate :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500'
                type='text'
                placeholder='12%'
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between mt-2'>
              <p>Years :</p>
              <input
                className='border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500'
                type='text'
                placeholder='5 years'
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
            <div className='flex justify-center mt-3'>
              <button
                className='bg-black text-white rounded py-2.5 px-5'
                type='submit'
                onClick={calculateEMI}
              >
                Submit
              </button>
            </div>

            <table className='table-auto border-collapse border border-slate-400 uppercase w-full container mx-auto my-8 text-left text-sm'>
              <thead className='bg-gray-800 text-white'>
                <tr>
                  <th className='border border-slate-300 font-normal px-3 py-1.5'>
                    EMI per month
                  </th>
                  <th className='border border-slate-300 font-normal px-3 py-1.5'>
                    Interest
                  </th>

                  <th className='border border-slate-300 font-normal px-3 py-1.5'>
                    Payment (Principal + Interest)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className='border border-slate-300 px-3 py-1.5'
                    id='month'
                  ></td>
                  <td
                    className='border border-slate-300 px-3 py-1.5'
                    id='interest'
                  ></td>
                  <td
                    className='border border-slate-300 px-3 py-1.5'
                    id='total'
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finance;
