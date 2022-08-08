import React from "react";
import { blogs } from "../../constants";

function Blogs() {
  return (
    <div className="container mx-auto py-16 space-y-4">
      <p className="uppercase font-bold text-4xl text-center">Blog</p>
      <p className="uppercase text-center tracking-wider font-bold">
        What's happening at Saboo <span className="text-xl">Nexa</span>
      </p>
      <p className="bg-black h-1 w-60 mx-auto"></p>
      <p className="max-w-[900px] text-gray-600 text-center mx-auto text-lg">
        Stay Tuned to our latest updates with your favourite Hyderabad's Leading
        Nexa Dealer. Saboo Nexa is a place which is created to inspire the new
        world of enhanced driving experience.
      </p>
      <div className="grid lg:grid-cols-2 gap-4 pt-7">
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
      </div>
    </div>
  );
}

export default Blogs;
