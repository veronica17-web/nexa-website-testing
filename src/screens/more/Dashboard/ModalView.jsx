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
          <div className="text-xl lg:text-3xl font-medium uppercase text-center w-full">
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
          <table className="table-auto w-full">
            <tbody>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap ">
                  Salutation:
                </td>
                <td className="py-1 px-1">{values.salutation}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">First Name:</td>
                <td className="py-1 px-1">{values.firstName}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">Last Name:</td>
                <td className="py-1 px-1">{values.lastName}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">Email:</td>
                <td className="py-1 px-1">{values.email}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">Phone:</td>
                <td className="py-1 px-1">{values.phone}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Alternate Phone:
                </td>
                <td className="py-1 px-1">
                  {values.alterPhone ? values.alterPhone : "-"}
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">Address:</td>
                <td className="py-1 px-1">
                  {values.address ? values.address : "-"}
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Last Company:
                </td>
                <td className="py-1 px-1">{values.lastCompany}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">Job Title:</td>
                <td className="py-1 px-1">{values.jobTitle}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Job Location:
                </td>
                <td className="py-1 px-1">{values.jobLocation}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Total Experience:
                </td>
                <td className="py-1 px-1">{values.totalExp}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Profile Summary:
                </td>
                <td className="py-1 px-1">{values.profileSum}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Last Drawn Salary:
                </td>
                <td className="py-1 px-1">{values.lastDwarnSalary}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">Skills:</td>
                <td className="py-1 px-1">{values.skills}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Current CTC:
                </td>
                <td className="py-1 px-1">{values.currentCTC}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Expected CTC:
                </td>
                <td className="py-1 px-1">{values.expectedCTC}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Highest Qualification:
                </td>
                <td className="py-1 px-1">{values.qualification}</td>
              </tr>
              <tr className="border-b">
                <td className="text-gray-700 whitespace-nowrap">
                  Resume Link:
                </td>
                <td>
                  <a
                    href={values.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black py-2 px-1"
                  >
                    {values.resumeLink}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="absolute top-5 right-5 lg:top-10 lg:right-20 flex gap-2">
          <div
            className="p-1 lg:p-3 rounded-lg bg-gray-200 hover:shadow-lg hover:shadow-black cursor-pointer border w-min  select-none  "
            onClick={downloadPDF}
          >
            <AiOutlineDownload className="lg:text-lg mx-auto " />
          </div>
          <div
            className="p-1 lg:p-3 rounded-lg hover:border-red-400 cursor-pointer border w-min  select-none hover:bg-gray-200"
            onClick={onClose}
          >
            Close
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
