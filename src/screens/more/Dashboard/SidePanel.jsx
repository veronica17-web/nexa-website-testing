// import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo_color.webp';
import logo2 from '../../../assets/logo_color.webp';
import {  useNavigate } from 'react-router-dom';

import { AiOutlineLogout } from 'react-icons/ai';

const SidePanel = ({ open, setOpen, selectedItem, setSelectedItem, links }) => {
  // const [screenSize, setScreenSize] = useState(undefined);
  let history = useNavigate();

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener('resize', handleResize);
  //   handleResize();
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // useEffect(() => {
  //   screenSize <= 1600 ? setOpen(false) : setOpen(true);
  // }, [screenSize, setOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('customerID');
    localStorage.removeItem('role');
    history('/');
  };

  // const handleSelect = (value) => {
  //   setSelectedItem(value);
  //   setOpen(!open);
  // };

  const handleClick = (item) => {
    // console.log(item);
    // setInputValue(item.name);
    setSelectedItem(item.name);
  };

  return (
    <div className='flex   h-screen '>
      {/*  */}
      <div
        className={` border-r shadow-lg flex flex-col justify-between  ${
          open ? 'min-w-max' : 'w-20'
        }   mr-2  rounded-r-md bg-white  transition   `}
      >
        
          <div>
            <div className='mb-6 py-4 cursor-pointer'  onClick={()=>setSelectedItem(links[0].subLinks[0].name)}>
        
                {open ? (
                  <img src={logo} alt='logo' className='mx-auto  h-10  ' />
                ) : (
                  <img src={logo2} alt='logo' className=' h-8  px-4 ' />
                )}
          
            </div>
            <div className=''>
              <div>
                <ul>
                  {links.map((items, index) => (
                    <div key={index}>
                      <li
                        className={`mt-6 border-t border-gray-400 p-4 font-medium   `}
                      >
                        <span className={`${open ? 'visible' : 'hidden'}`}>
                          {items.Head}
                        </span>
                      </li>
                      <ul>
                        {items.subLinks.map((x, subIndex) => (
                          <li
                            key={subIndex}
                            className={`text-md cursor-pointer group relative mx-2 mb-2 flex items-center rounded-xl py-2 xl:py-3 pl-2 pr-2 font-mono duration-75 lg:mb-4 ${
                              selectedItem === x.name
                                ? 'bg-black text-white   '
                                : ' hover:bg-black hover:text-white'
                            }`}
                            onClick={() => handleClick(x)}
                          >
                            <div className={`mx-2 text-2xl ${open ? 'hidden' : 'visible'} `}>{x.logo[0]}</div>
                            {/* {!open && (
                              <span class='absolute   -mb-8  translate-y-full whitespace-nowrap rounded-md bg-indigo-800 px-1 text-sm opacity-0 transition-opacity  group-hover:opacity-100'>
                                {x.name}
                              </span>
                            )} */}
                            <div
                              className={`${
                                open ? 'visible' : 'hidden'
                              } text-md mx-2`}
                            >
                              {x.name}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`mx-2 mb-6 flex cursor-pointer gap-2 rounded-xl border  py-2 pl-4  pr-2 font-mono   duration-75 hover:border-black `}
            onClick={handleLogout}
          >
            <AiOutlineLogout className={`${open ? 'hidden' : 'visible'} text-2xl`} />
            {/* <span > Logout</span> */}
            <span className={`${open ? 'visible' : 'hidden'}`}> Logout</span>
          </div>
        </div>
      </div>
  
  );
};

export default SidePanel;
