import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { blogsData } from '../../constants/blogsData';

const BlogPage = () => {
  return (
    <>
      <Header />
      {/* <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/nexa-all-cars-banner.webp'
        className='max-w-full w-full'
        alt='inusrance banner'
      /> */}
      <div className='shadow sm:px-0 px-4'>
        <p className='mx-auto container py-4'>
          <Link to='/'>Home</Link> / Blog
        </p>
      </div>
      <div className='p-4'>
        <p className='text-center text-red-600 font-bold text-4xl'>
          News and Social Media Articles
        </p>
        <p className='text-center mt-2 mb-14'>
          Stay up to date with the latest activity from your favorite Maruti
          Suzuki Nexa Dealer!
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto px-5 sm:px-0'>
          {blogsData.map((blog) => (
            <div
              className='flex flex-col bg-white border shadow-md rounded-lg overflow-hidden relative max-h-max'
              key={blog.id}
            >
              <img src={blog.img} alt={blog.id} />
              <div className='p-5'>
                <p className='text-blue-700 font-semibold uppercase mb-4 tracking-wide'>
                  {blog.title}
                </p>
                <a
                  href={blog.href}
                  target='_blank'
                  rel='noreferrer'
                  className='font-semibold text-sm'
                >
                  {blog.subTitle}
                </a>
                <p className='my-3 text-sm text-gray-600 mb-10'>{blog.desc}</p>
                <div className='absolute bottom-3 right-8 mb-4'>
                  <a
                    href={blog.href}
                    rel='noreferrer noopener'
                    target='_blank'
                    className='border-b-2 border-black-500 text-black-500 pb-1'
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
