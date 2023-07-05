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
        {/* <div className="grid lg:grid-cols-2 gap-4 pt-7">
        {blogs.map((item, index) => (
          <div className="grid sm:grid-cols-2 gap-4 sm:px-0 px-5" key={index}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <div>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold uppercase "
              >
                {item.title}
              </a>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div> */}
        <div className='grid lg:grid-cols-3 gap-2 justify-center sm:ml-4 p-10'>
          <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <Link to='#'>
              <img
                class='rounded-t-lg'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/4.webp'
                alt=''
              />
            </Link>
            <div class='p-5'>
              <div href='/gallery'>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Grand Launch of Suzuki Jimny at our Nexa Lumbini
                </h5>
              </div>
              <p className='text-xs pb-2 text-gray-500'>26 May 2023</p>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Get ready to be awestruck as you witness the perfect blend of
                innovation, design, and cutting-edge technology.
              </p>
              <br></br>
              <br></br>

              <a
                href='/gallery'
                target='_blank'
                class='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Read More
                <svg
                  aria-hidden='true'
                  class='ml-2 -mr-1 w-4 h-4'
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
          <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div href='#'>
              <img
                class='rounded-t-lg'
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/invicto-blog-thumbnail.webp'
                alt=''
              />
            </div>
            <div class='p-5'>
              <div href='#'>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Maruti Suzuki Invicto To Launch Tomorrow: 5 Things You Need To
                  Know
                </h5>
              </div>
              <p className='text-xs pb-2 text-gray-500'>4 Jul 2023</p>
              <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                The Maruti Suzuki Invicto is finally set to be launched tomorrow
                on our shores.
              </p>
              <br></br>

              <a
                href={
                  'https://www.zigwheels.com/news-features/general-news/maruti-suzuki-invicto-to-launch-tomorrow-5-things-you-need-to-know/50286/'
                }
                target='_blank'
                rel='noopener noreferrer'
                class='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Read More
                <svg
                  aria-hidden='true'
                  class='ml-2 -mr-1 w-4 h-4'
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
          <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div href='#'>
              <img
                class='rounded-t-lg'
                src='https://media.zigcdn.com/media/content/2023/Jun/6481e4f32d325_720x540_720x540.jpg'
                alt=''
              />
            </div>
            <div class='p-5'>
              <div href='#'>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  Invicto to get Panaromic Sunroof
                </h5>
              </div>
              <p className='text-xs pb-2 text-gray-500'>3 Jul 2023</p>
              <p class='mb-3 tracking-normal font-normal text-gray-700 dark:text-gray-400'>
                Ahead of the July 5 unveiling of its Invicto multi-purpose
                vehicle (MPV), Maruti Suzuki has released a fresh teaser
                promoting the car.
              </p>
              <br></br>
              <br></br>
              <a
                href={
                  'https://www.hindustantimes.com/car-bike/its-confirmed-maruti-suzukis-invicto-to-get-panoramic-sunroof-feature-101688330377970.html'
                }
                target='_blank'
                rel='noopener noreferrer'
                class='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Read More
                <svg
                  aria-hidden='true'
                  class='ml-2 -mr-1 w-4 h-4'
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

          {/* <div class='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <Link to='#'>
            <img
              class='rounded-t-lg'
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/blog/Maruti-Suzuki-SCross-Launch.webp'
              alt=''
            />
          </Link>
          <div class='p-5'>
            <div href='#'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
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
              class='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Stay Tuned
              <svg
                aria-hidden='true'
                class='ml-2 -mr-1 w-4 h-4'
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
