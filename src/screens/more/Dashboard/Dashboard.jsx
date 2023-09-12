import React from "react";
// import SidePanel from "./SidePanel";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import {FiUsers} from "react-icons/fi";
import { useState } from "react";
import TodayApp from "./TodayApp";
import { Helmet } from "react-helmet";
// import TotalApp from "./TotalApp";

const Dashboard = () => {

  const [open, setOpen] = useState(true);
  // const [selectedItem, setSelectedItem] = useState("Applications");
  // const AdminLinks = [
  //   {
  //     Head: "ACTION",
  //     subLinks: [
  //       {
  //         name: "Applications",
  //         logo: [<AiOutlineUserAdd />],
  //       },
  //       // {
  //       //   name: "Total Application",
  //       //   logo: [<FiUsers />],
  //       // },
  //     ],
  //   },
  // ];
  return (
    <>
    
    <Helmet>
        <title>Nexa Careers Dashboard</title>
        
       
      </Helmet>
    <div className=' font-roboto mx-auto  h-screen w-full flex '>
      {/* <SidePanel
        open={open}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setOpen={setOpen}
        links={AdminLinks}
      /> */}
       <div className='h-[80vh] lg:h-[90vh]  w-full  px-4 '>
          {/* {selectedItem === "Applications" ? (
            <TodayApp open={open} setOpen={setOpen} />
          )  : (
            selectedItem === "Applications total" && (
              <TotalApp open={open} setOpen={setOpen} />
            )
          )} */}
           <TodayApp open={open} setOpen={setOpen} />
        </div>
    </div>
    </>
  );
};

export default Dashboard;
