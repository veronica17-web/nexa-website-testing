import React from "react";
import SidePanel from "./SidePanel";
import { AiOutlineUserAdd } from "react-icons/ai";
// import {FiUsers} from "react-icons/fi";
import { useState } from "react";
import TodayApp from "./TodayApp";
import TotalApp from "./TotalApp";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Today's Application");
  const AdminLinks = [
    {
      Head: "ACTION",
      subLinks: [
        {
          name: "Today's Application",
          logo: [<AiOutlineUserAdd />],
        },
        // {
        //   name: "Total Application",
        //   logo: [<FiUsers />],
        // },
      ],
    },
  ];
  return (
    <div className=' font-roboto mx-auto  h-screen w-full flex '>
      <SidePanel
        open={open}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setOpen={setOpen}
        links={AdminLinks}
      />
       <div className='h-[80vh] lg:h-[90vh]  w-full   '>
          {selectedItem === "Today's Application" ? (
            <TodayApp open={open} setOpen={setOpen} />
          )  : (
            selectedItem === "Total Application" && (
              <TotalApp open={open} setOpen={setOpen} />
            )
          )}
          
        </div>
    </div>
  );
};

export default Dashboard;
