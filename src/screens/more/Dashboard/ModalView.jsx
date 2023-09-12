import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";

const ModalView = ({ visible, onClose, values }) => {
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = 10;
      // const imgX = (pdfWidth - imgHeight * ratio) / 2;
      const imgY = 10;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(`${values.firstName}_${values.lastName}`);
    });
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0   bg-black bg-opacity-20 p-10 "
    >
      <div
        className=" container mx-auto  w-full bg-white p-5 h-[90vh] relative "
        ref={pdfRef}
      >
        {/* <div className=" overflow-hidden m-1  lg:w-2/3 xl:h-2/3 bg-white p-5"> */}
        <div className="text-center font-mono w-full  mb-4 mt-4 flex relative">
          <div className="text-3xl font-medium uppercase text-center w-full">
            {values.firstName} {values.lastName}{" "}
          </div>{" "}
          <div className="whitespace-nowrap absolute top-0 left-0">
            {values.date}
          </div>
        </div>
        <div className="flex gap-4 justify-center ">
          <div>{values.email}</div> <div>{values.phone} </div>
        </div>

        <div className="w-full h-0.5 bg-black my-4 mx-auto "></div>
        <section className="mb-6">
          <div className="flex gap-4">
            <div className="space-y-2">
              <div className="text-gray-500">Salutation :</div>
              <div className="text-gray-500">First Name : </div>
              <div className="text-gray-500">Last Name : </div>
              <div className="text-gray-500">Email : </div>
              <div className="text-gray-500">Phone :</div>
              <div className="text-gray-500">Alternate Phone : </div>
              <div className="text-gray-500 ">Address : </div>
              <div className="text-gray-500">Last Company : </div>
              <div className="text-gray-500">Job Title : </div>
              <div className="text-gray-500">Job Locatin : </div>
              <div className="text-gray-500">Total Experince : </div>
              <div className="text-gray-500">Profile Summary : </div>
              <div className="text-gray-500">Last Dwarn Salary : </div>
              <div className="text-gray-500">Skills : </div>
              <div className="text-gray-500">Current CTC : </div>
              <div className="text-gray-500">Expected CTC : </div>
              <div className="text-gray-500">Highest Qualification : </div>
              <div className="text-gray-500">Resume Link : </div>
            </div>
            <div className="space-y-2">
              <div>{values.salutation} </div>
              <div>{values.firstName} </div>
              <div>{values.lastName} </div>
              <div>{values.email} </div>
              <div>{values.phone} </div>
              <div>{values.alterPhone ? values.alterPhone : "-"} </div>
              <div className=" ">{values.address ? values.address : "-"} </div>
              <div className="">{values.lastCompany} </div>
              <div className="">{values.jobTitle} </div>
              <div className="">{values.jobLocation} </div>
              <div className="">{values.totalExp} </div>
              <div className="">{values.profileSum} </div>
              <div className="">{values.lastDwarnSalary} </div>
              <div className="">{values.skills} </div>
              <div className="">{values.currentCTC} </div>
              <div className="">{values.expectedCTC} </div>
              <div className="">{values.qualification} </div>
              <div className="">
                <a
                  href={values.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  {values.resumeLink}
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mb-6">
        
          <div className="flex gap-4">
            <div className="space-y-2">
              <div className="text-gray-500">flat :</div>
              <div className="text-gray-500">street : </div>
              <div className="text-gray-500">landmark : </div>
              <div className="text-gray-500">pincode : </div>
              <div className="text-gray-500">city :</div>
              <div className="text-gray-500">state : </div>
              <div className="text-gray-500">country : </div>
            </div>
            <div className="space-y-2">
              <div>{values.flat}</div>
              <div>{values.street} </div>
              <div>{values.landmark} </div>
              <div>{values.pincode}</div>
              <div>{values.city}</div>
              <div>{values.state}</div>
              <div>{values.country} </div>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <div className="text-lg my-4 text-center w-full">Work Experince</div>
          <div className="flex gap-4">
            <div className="space-y-2">
              <div className="text-gray-500">jobTitle : </div>
              <div className="text-gray-500">company :</div>
              <div className="text-gray-500">jobLocation : </div>
              <div className="text-gray-500">fromDate : </div>
              <div className="text-gray-500">jobSummary :</div>
            </div>
            <div className="space-y-2">
              <div>{values.jobTitle} </div>
              <div>{values.company}</div>
              <div>{values.jobLocation} </div>
              <div>{values.fromDate} </div>
              <div>{values.jobSummary}</div>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <div className="text-lg my-4 text-center w-full">
            Job Application Fields
          </div>
          <div className="flex gap-4">
            <div className="space-y-2">
              <div className="text-gray-500">
                Do you have a higher education/master’s degree (like MBA, MTech,
                MS, etc.)?{" "}
              </div>
              <div>{values.appField1} </div>
              <div className="text-gray-500">
                If you're employed, since how long (no. of months) have you been
                working in your current organization? Mention zero ("0") if
                you're a fresher.{" "}
              </div>
              <div>{values.appField2} </div>{" "}
              <div className="text-gray-500">
                What was your field of education/bachelor's/master's degree?{" "}
              </div>
              <div>{values.appField3} </div>{" "}
              <div className="text-gray-500">
                If given an offer, how soon can you join ?{" "}
              </div>
              <div>{values.appField4} </div>{" "}
              <div className="text-gray-500">
                If you have work experience (incl. internships) which of the
                areas have you worked in? (eg. engineering, Finance, Market
                Research, Sales and Marketing, other)
              </div>
              <div>{values.appField5} </div>{" "}
              <div className="text-gray-500">
                When did you complete your last education degree
                (Bachelor's/Master's) or when do you expect to complete it if
                you're still a student?{" "}
              </div>
              <div>{values.appField6} </div>{" "}
            </div>
          </div>
        </section>
        <section className="mb-6">
          <div className="text-lg my-4 text-center w-full">Resume</div>
          <div className="flex gap-4">
            <div className="space-y-2">
              <div className="text-gray-500">
                Upload resume in your google drive and paste link below
              </div>
              <div className=" italic text-lg"><a href={values.resumeLink} target="_blank" rel="noopener noreferrer">{values.resumeLink}</a></div>
            </div>
          </div>
        </section> */}
        <div className="absolute top-10 right-20 flex gap-2">
          <div
            className="p-3 rounded-lg hover:bg-gray-200 hover:shadow-md cursor-pointer border w-min  select-none "
            onClick={downloadPDF}
          >
            <AiOutlineDownload className="text-lg mx-auto " />
          </div>
          <div
            className="p-3 rounded-lg hover:border-red-400 cursor-pointer border w-min  select-none bg-gray-200"
            onClick={onClose}
          >
            Close
          </div>
        </div>
        {/* <div className="space-y-2">
          <div className="text-lg ">Biographical Information</div>
          <div className="text-gray-500">
            Salutation :{" "}
            <span className="text-black"></span>
          </div>
          <div className="text-gray-500">First Name :  <span className="text-black">{values.firstName} </span></div>
          <div className="text-gray-500">Last Name :  <span className="text-black">{values.lastName} </span></div>
          <div className="text-gray-500">Email :  <span className="text-black">{values.email} </span></div>
          <div className="text-gray-500">
            Country Code :  <span className="text-black">{values.countryCode} </span>
          </div>
          <div className="text-gray-500">Phone :  <span className="text-black">{values.phone} </span></div>
        </div> */}
      </div>
    </div>
  );
};

export default ModalView;
