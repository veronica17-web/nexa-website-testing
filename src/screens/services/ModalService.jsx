import axios from "axios";
import React from "react";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
// import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
const ModalService = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const [name, setName] = useState();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState();
  // const [model, setModel] = useState();
  const [method, setMethod] = useState("");
  const [loader, setLoader] = useState(false);
  const [model, setModel] = useState("");
  const [message, setMessage] = useState("");

  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }
  function handleSubmit() {
    setLoader(true);
    // First API call
    axios
      .post("https://saboogroups.com/admin/api/contact-us", {
        name: name,
        email: email,
        phone: phone,
        model: model,
        message: message,
      })
      .then((res) => {
        setMethod("POST");
        toast.success("Enquiry sent successfully");
      })
      .catch((err) => {
        setLoader(false);
        toast.error("Something went wrong!");
        console.log(err);
      });
    // Second API call
    axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
     Our Sales consultant will contact you shortly.
     
     Regards
     RKS Motor Pvt. Ltd.
     98488 98488
     www.saboomaruti.in
     www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log("SMS API Response:", res.data);
        // Handle the response from the SMS API if needed
      })
      .catch((err) => {
        console.error("Error sending SMS:", err);
        // Handle errors from the SMS API if needed
      })
      .finally(() => {
        setLoader(false);
      });
  }
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div className="  p-1  ">
        <div className="py-6 -mt-20 mx-1 ">
          <div className="container mx-auto space-y-3 lg:px-5 px-1 sm:px-2 bg-[#1a1a1a] rounded-[2rem]  py-6">
            <div className="text-center  text-2xl lg:text-4xl py-4 font-serif tracking-wide ">
              Book a Service Appointment
            </div>
            <form
              action="https://crm.zoho.in/crm/WebToLeadForm"
              name="WebToLeads54158000000752015"
              method={method}
              acceptCharset="UTF-8"
            >
              <input
                type="text"
                style={{ display: "none" }}
                name="xnQsjsdp"
                value="5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input
                type="text"
                style={{ display: "none" }}
                name="xmIwtLD"
                value="3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92"
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="actionType"
                value="TGVhZHM="
              />
              <input
                type="text"
                style={{ display: "none" }}
                name="returnURL"
                value="https://www.saboonexa.in/thank-you?email=Email"
              />
              <input
                type="text"
                style={{ display: "none" }}
                id="ldeskuid"
                name="ldeskuid"
              />
              <input
                type="text"
                style={{ display: "none" }}
                id="LDTuvid"
                name="LDTuvid"
              />
              <div className="grid  md:grid-cols-2 grid-cols-1 gap-4 lg:gap-10 px-2">
                <div className="flex items-center">
                  <label
                    htmlFor="Last_Name"
                    className="font-serif pr-2 md:text-xl"
                  >
                    Name:
                  </label>
                  <input
                    className="border-b border-white h-10 outline-none  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans bg-[#1a1a1a] "
                    // placeholder='Name'
                    id="Last_Name"
                    name="Last Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex items-center">
                  <label
                    htmlFor="Phone"
                    className="font-serif pr-2 md:text-xl whitespace-nowrap"
                  >
                    Phone:
                  </label>
                  <input
                    className="border-b border-white h-10 outline-none  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans bg-[#1a1a1a] "
                    value={phone}
                    id="Phone"
                    name="Phone"
                    required
                    minLength="10"
                    maxLength="10"
                    onChange={(e) =>
                      setPhone(
                        e.target.value.replace(/[^1-9 ]/g, "") &&
                          e.target.value.replace(/ /g, "")
                      )
                    }
                  />
                  {phone.length > 0 && phone.length < 10 ? (
                    <small className="text-red-500">
                      Phone number must be 10 digits
                    </small>
                  ) : !pattern.test(phone) && phone.length === 10 ? (
                    <small className="text-red-500">
                      Phone number is invalid
                    </small>
                  ) : (
                    ""
                  )}
                </div>

                <div className="flex items-center">
                  <label
                    htmlFor="Email"
                    className="font-serif pr-2 md:text-xl whitespace-nowrap"
                  >
                    Email:
                  </label>
                  <input
                    className="border-b border-white h-10 outline-none  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans bg-[#1a1a1a] "
                    // placeholder='Name'
                    id="Email"
                    name="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  
                </div>
                <div className="flex items-center">
                  <label className="font-serif pr-2 md:text-xl whitespace-nowrap">
                    Service Type:
                  </label>
                  <select
                    id="LEADCF6"
                    name="LEADCF6"
                    onChange={(e) => setModel(e.target.value)}
                    className="block w-full py-2  border-b border-gray-300 bg-[#1a1a1a] shadow-sm focus:outline-none  font-serif"
                  >
                    <option disabled selected></option>
                    <option value="Periodic Services">Periodic Services</option>
                    <option value="Repair & Maintenance">
                      Repair & Maintenance
                    </option>
                    <option value="Body Repair">Body Repair</option>
                    <option value="Car Care Service">Car Care Service</option>
                  </select>
                </div>
                <div className="flex items-center md:col-span-2">
                  <label
                    htmlFor="message"
                    className="font-serif pr-2 md:text-xl whitespace-nowrap"
                  >
                    Message:
                  </label>
                  <input
                    className="border-b border-white h-10 outline-none  w-full placeholder:text-lg  placeholder:text-gray-400 font-sans bg-[#1a1a1a] "
                    // placeholder='Name'
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                {/* <div className='flex items-start'>
                    <input
                      id='disclaimer'
                      name='disclaimer'
                      type='checkbox'
                      className='h-4 w-4 rounded'
                    />
                    <div className='lg:ml-2 text-sm'>
                      <label
                        htmlFor='disclaimer'
                        className='font-medium text-gray-100'
                      >
                        * I accept the <Link to='/terms-and-condition'> terms & conditions.</Link> 
                      </label>
                    </div>
                  </div> */}
                <p className="text-gray-300 text-xs">
                  <span className="text-gray-400 font-bold">Disclaimer</span>:
                  By clicking 'Submit,' you acknowledge that you have agreed to
                  our Terms and Conditions.
                </p>
                <div className="flex justify-center md:col-span-2 gap-4">
                  <button
                    onClick={onClose}
                    class="group relative md:col-span-2 md:hidden  w-full text-md whitespace-nowrap mx-auto shadow-lg overflow-hidden bg-black text-md rounded-2xl font-semibold  mb-4 px-5 py-3 border border-gray-500 cursor-pointer md:text-xl"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    disabled={
                      pattern.test(phone) && phone.length === 10 ? false : true
                    }
                    onClick={handleSubmit}
                    class="group relative md:col-span-2  w-full  whitespace-nowrap mx-auto shadow-lg overflow-hidden bg-black hover:bg-[#494949] text-md rounded-2xl font-semibold  mb-4 px-5 py-3 border border-gray-500 cursor-pointer  md:text-xl"
                  >
                    {loader ? (
                      <div className="flex items-center justify-center">
                        <CgSpinner className="animate-spin  mr-2 text-white " />
                        Submitting
                      </div>
                    ) : (
                      "BOOK NOW"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalService;
