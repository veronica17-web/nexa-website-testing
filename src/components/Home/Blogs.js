import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  return (
    <>
      <div className='container mx-auto py-16 space-y-4'>
        <p className='uppercase font-bold text-4xl text-center'>Blog</p>
        <p className='uppercase text-center tracking-wider font-bold'>
          What's happening at Saboo <span className='text-xl'>Nexa</span>
        </p>
        <p className='bg-black h-1 w-60 mx-auto'></p>
        <p className='max-w-[900px] text-gray-600 text-center mx-auto text-lg'>
          Keep yourself updated with the latest news from Hyderabad's top Nexa
          dealer by staying tuned to our frequent updates.
        </p>
        {/* <p>Saboo Nexa is a place which is created to inspire
          the new world of enhanced driving experience.</p> */}
        <br></br>
        <Link
          to='/maruti-nexa-latest-news'
          className='text-center text-blue-900'
        >
          <p>Read More</p>
        </Link>

        <div className='grid lg:grid-cols-3 gap-2 justify-center sm:ml-4 p-10'>
          {/* first thumbnail begin */}
          <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div to=''>
              <img
                className='rounded-t-lg'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/1-upload.webp'
                alt=''
              />
            </div>
            <div className='p-5'>
              <div href='https://www.deccanchronicle.com/business/autos/210623/maruti-suzuki-jimny-hits-hyderabad-roads.html'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Maruti Suzuki Jimny hits Hyderabad roads
                </h5>
              </div>
              <p className='text-xs pb-2 text-gray-500'>21 Jun 2023</p>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                The first batch of the iconic SUV from Maruti Suzuki, the Jimny
                was delivered to customers in Hyderabad here at NEXA Lumbini,
                RKS Motors on Wednesday.
              </p>
              <br></br>
              <br></br>

              <a
                href='https://www.deccanchronicle.com/business/autos/210623/maruti-suzuki-jimny-hits-hyderabad-roads.html'
                target='_blank'
                className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Read More
                <svg
                  aria-hidden='true'
                  className='ml-2 -mr-1 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* second thumbnail begin */}
          <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div href='#'>
              <img
                className='rounded-t-lg'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/2-upload+ama.webp'
                alt=''
              />
            </div>
            <div className='p-5'>
              <div href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Maruti Suzuki delivers Jimny to customers
                </h5>
              </div>
              <p className='text-xs pb-2 text-gray-500'>22 Jun 2023</p>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Maruti Suzuki has delivered Jimny SUV to customers at Nexa
                Lumbini, RKS Motor, Hyderabad on Wednesday.
              </p>
              <br></br>
              <br></br>
              <br></br>

              <a
                href={
                  'https://www.thehansindia.com/business/maruti-suzuki-delivers-jimny-to-customers-804645'
                }
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Read More
                <svg
                  aria-hidden='true'
                  className='ml-2 -mr-1 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* third thumbnail begin */}
          <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div href='#'>
              <img
                className='rounded-t-lg'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/blog/aug+2023/3-upload-aws.webp'
                alt=''
              />
            </div>
            <div className='p-5'>
              <div href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  आरकेएस मोटर्स पर मारुति सुजुकी ने ग्राहकों को सौंपी पहली
                  जिम्नी एसयूवी
                </h5>
              </div>
              <p className='text-xs pb-2 text-gray-500'>21 Jun 2023</p>
              <p className='mb-3 tracking-normal font-normal text-gray-700 dark:text-gray-400'>
                मारुति सुजुकी की एसयूवी जिम्नी की चाभी सौंपते आईटी विभाग के
                प्रधान सचिव जयेश रंजन। साथ में नेक्सा लुम्बिनी, आरकेएस मोटर्स
                अध्यक्ष एवं प्रबंध निदेशक विनय साबू व अन्य।
              </p>
              <br></br>
              <br></br>

              <a
                href={
                  'http://webmilap.com//articlepage.php?articleid=HINDIMIL_HIN_20230622_3_18&width=226px&edition=Hindi%20Milap&curpage=3'
                }
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Read More
                <svg
                  aria-hidden='true'
                  className='ml-2 -mr-1 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <Link to='#'>
            <img
              className='rounded-t-lg'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/blog/Maruti-Suzuki-SCross-Launch.webp'
              alt=''
            />
          </Link>
          <div className='p-5'>
            <div href='#'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Nexa Experience: Some Inspiring Recent Affairs
              </h5>
            </div>
            <p className='text-xs pb-7 text-gray-500'>
              Looking back at all the recently curated premium experiences.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link
              to='/gallery'
              className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Stay Tuned
              <svg
                aria-hidden='true'
                className='ml-2 -mr-1 w-4 h-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </Link>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Blogs;
