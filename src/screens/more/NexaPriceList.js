import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NexaPriceList = () => {
  const [price, setPrice] = useState('7,46,500');
  const [jimnyprice, setjimnyPrice] = useState('12,74,000');
  const [vitaraprice, setvitaraPrice] = useState('10,70,000');
  const [xl6price, setxl6Price] = useState('11,56,000');
  const [ciazprice, setciazPrice] = useState('9,30,000');
  const [balenoprice, setbalenoPrice] = useState('6,61,000');
  const [ignisprice, setignisPrice] = useState('5,84,000');

  return (
    <div className='header'>
      <nav className=' py-2 md:py-4 bg-black'>
        <div className='container px-2 mx-auto md:flex md:items-center'>
          <div className='flex justify-between items-center'>
          
            <Link to="/">
            
              <img
                className='h-12 w-auto'
                src={require('../../assets/logo.webp')}
                alt='logo'
              />
            </Link>
           
            {/* <button
                className='border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden'
                id='navbar-toggle'
              >
                <i className='fas fa-bars'></i>
              </button> */}
          </div>

          <div
            className='hidden text-white text-lg md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
            id='navbar-collapse'
          >
            
              Price List
            
          </div>
        </div>
      </nav>

      <div className=' py-6 md:py-12'>
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-2'>
            {/* <div>
              <h2 className='text-2xl font-semibold leading-tight'>Arena</h2>
            </div> */}
            <div className='lg-mx-2 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto'>
              <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Model
                      </th>
                      {/* <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Fuel / Transmission
                      </th> */}
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Variant
                      </th>
                      <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                        Ex Showroom Price ₹
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex'>
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://imgd.aeplcdn.com/1280x720/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=75'
                              alt=''
                            />
                          </div> */}
                          <div className='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Fronx</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>$20,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                          <div className='space-y-3 mx-auto md:mx-0'>
                            <select
                              name='model'
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                            >
                              <option value='7,46,500'>SIGMA</option>
                              <option value='8,32,500'>DELTA</option>
                              <option value='8,72,500'>DELTA+</option>
                              <option value='8,87,500'>DELTA AGS</option>
                              <option value='9,27,500'>DELTA+ AGS</option>

                              <option value='9,72,500'>
                                DELTA+ MT (SMART HYBRID)
                              </option>
                              <option value='10,55,500'>
                                ZETA MT (SMART HYBRID){' '}
                              </option>
                              <option value='11,47,500'>
                                ALPHA(M) MT (SMART HYBRID)
                              </option>
                              <option value='11,63,500'>
                                ALPHA(D) MT (SMART HYBRID)
                              </option>
                              <option value='12,05,500'>
                                ZETA AT (SMART HYBRID)
                              </option>
                              <option value='12,97,500'>
                                ALPHA(M) (SMART HYBRID)
                              </option>
                              <option value='13,13,500'>
                                ALPHA(D) AT (SMART HYBRID)
                              </option>
                            </select>
                          </div>
                        </p>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0 opacity-50 rounded-full'
                          ></span>
                          <div className='py-2 lg:text-lg sm:text-sm'>
                            {price}
                          </div>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex'>
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp'
                              alt=''
                            />
                          </div> */}
                          <div className='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Jimny</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={jimnyprice}
                          onChange={(e) => setjimnyPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='12,74,000'>ZETA</option>
                          <option value='13,69,000'>ALPHA(M)</option>
                          <option value='13,85,000'>ALPHA(D)</option>
                          <option value='13,94,000'>ZETA 4AT</option>
                          <option value='14,89,000'>ALPHA(M) 4AT</option>
                          <option value='15,05,000'>ALPHA(D) 4AT</option>
                        </select>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0 opacity-50 rounded-full'
                          ></span>
                          <span className='relative lg:text-lg sm:text-sm'>
                            {jimnyprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex'>
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp'
                              alt=''
                            />
                          </div> */}
                          <div className='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>
                              Grand Vitara
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={vitaraprice}
                          onChange={(e) => setvitaraPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='10,70,000'>SIGMA</option>
                          <option value='12,10,000'>DELTA</option>
                          <option value='13,91,000'>ZETA</option>
                          <option value='15,41,000'>ALPHA</option>
                          <option value='15,57,000'>ALPHA (DT)</option>
                          <option value='13,60,000'>DELTA AT</option>
                          <option value='15,41,000'>ZETA AT</option>
                          <option value='16,91,000'>ALPHA AT</option>
                          <option value='17,07,000'>ALPHA AT (DT)</option>
                          <option value='16,91,000'>ALPHA AWD AG</option>
                          <option value='17,07,000'>ALPHA AWD AG (DT)</option>
                          <option value='18,29,000'>ZETA+ ECVT</option>
                          <option value='18,45,000'>ZETA+ ECVT (DT)</option>
                          <option value='19,79,000'>ALPHA+ ECVT</option>
                          <option value='19,95,000'>ALPHA ECVT (DT)</option>
                          <option value='13,05,000'>DELTA CNG</option>
                          <option value='14,86,000'>ZETA CNG</option>
                        </select>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span className='relative lg:text-lg sm:text-sm'>
                            {vitaraprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex'>
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp'
                              alt=''
                            />
                          </div> */}
                          <div className='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>XL6</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={xl6price}
                          onChange={(e) => setxl6Price(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='11,56,000'>ZETA</option>
                          <option value='12,56,000'>ALPHA</option>
                          <option value='13,16,000'>ALPHA+</option>
                          <option value='13,32,000'>ALPHA+ (D)</option>
                          <option value='12,51,000'>ZETA CNG</option>
                          <option value='13,06,000'>ZETA AT</option>
                          <option value='14,06,000'>ALPHA AT</option>
                          <option value='14,66,000'>ALPHA+ AT</option>
                          <option value='14,82,000'>ALPHA+ AT (D)</option>
                        </select>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span className='relative lg:text-lg sm:text-sm'>
                            {xl6price}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex'>
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp'
                              alt=''
                            />
                          </div> */}
                          <div className='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Ciaz</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={ciazprice}
                          onChange={(e) => setciazPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='9,30,000'>SIGMA</option>
                          <option value='9,90,000'>DELTA</option>
                          <option value='10,30,000'>ZETA</option>
                          <option value='11,09,000'>ALPHA </option>
                          <option value='11,25,000'>ALPHA (D)</option>
                          <option value='11,10,000'>DELTA AT</option>
                          <option value='11,50,000'>ZETA AT</option>
                          <option value='12,29,000'>ALPHA AT</option>
                          <option value='12,45,000'>ALPHA (D) AT</option>
                        </select>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold  leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span className='relative lg:text-lg sm:text-sm'>
                            {ciazprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex'>
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-swift.webp'
                              alt=''
                            />
                          </div> */}
                          <div className='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Baleno</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={balenoprice}
                          onChange={(e) => setbalenoPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='6,61,000'>SIGMA </option>
                          <option value='7,45,000'>DELTA</option>
                          <option value='8,38,000'>ZETA</option>
                          <option value='9,33,000'>ALPHA </option>
                          <option value='8,35,000'>DELTA CNG</option>
                          <option value='9,28,000'>ZETA CNG</option>
                          <option value='8,00,000'>DELTA AT</option>
                          <option value='8,90,000'>ZETA AT</option>
                          <option value='9,88,000'> ALPHA AT</option>
                        </select>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold  leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span className='relative lg:text-lg sm:text-sm'>
                            {balenoprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex'>
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-dzire.webp'
                              alt=''
                            />
                          </div> */}
                          <div className='ml-3'>
                            <div className='lg:text-lg sm:text-sm'>Ignis</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <select
                          name='model'
                          value={ignisprice}
                          onChange={(e) => setignisPrice(e.target.value)}
                          className='block w-full max-w-[200px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                        >
                          <option value='5,84,000'>SIGMA</option>
                          <option value='6,38,000'>DELTA</option>
                          <option value='6,96,000'>ZETA</option>
                          <option value='7,10,000'>ZETA(D)</option>
                          <option value='7,61,000'>ALPHA</option>
                          <option value='7,75,000'>ALPHA(D)</option>
                          <option value='6,93,000'>DELTA AGS (M)</option>
                          <option value='7,51,000'>ZETA AGS (M)</option>
                          <option value='8,16,000'>ALPHA AGS (M)</option>
                          <option value='7,65,000'>ZETA AGS (D)</option>

                          <option value='8,30,000'>ALPHA AGS (D)</option>
                        </select>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold leading-tight'>
                          <span
                            aria-hidden
                            className='absolute inset-0  opacity-50 rounded-full'
                          ></span>
                          <span className='relative lg:text-lg sm:text-sm'>
                            {ignisprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-red-600 font-thin p-2'>
                  Disclaimer: The following price list is provided for
                  informational purposes only and is subject to change without
                  prior notice. Please note that the prices mentioned in this
                  list may vary depending on factors such as location,
                  availability, market conditions, and any applicable taxes or
                  fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NexaPriceList;
