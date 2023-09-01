import React, { useState } from "react";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState();
  const [loader, setLoader] = useState(false);

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

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact us for Sales, Feedback or Complaint | SabooNexa</title>
        <meta
          name="title"
          content="Contact us for Sales, Feedback or Complaint | SabooNexa"
        />
        <meta
          name="description"
          content="Contact your nearest Saboo Nexa showroom for any Maruti Suzuki Nexa Vehicle Enquiry. For queries about any of the NEXA cars feedback or complaints contact us on 9848898488. Write to us at info@saboomaruti.in."
        />
        <meta
          name="keywords"
          content="Nexa car Sales, Nexa authorised dealer"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/contact-us/"
        />
        <meta
          property="og:title"
          content="Contact us for Sales, Feedback or Complaint | SabooNexa"
        />
        <meta
          property="og:description"
          content="Contact your nearest Saboo Nexa showroom for any Maruti Suzuki Nexa Vehicle Enquiry. For queries about any of the NEXA cars feedback or complaints contact us on 9848898488. Write to us at info@saboomaruti.in."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Contact-us.webp"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/contact-us/"
        />
        <meta
          property="twitter:title"
          content="Contact us for Sales, Feedback or Complaint | SabooNexa"
        />
        <meta
          property="twitter:description"
          content="Contact your nearest Saboo Nexa showroom for any Maruti Suzuki Nexa Vehicle Enquiry. For queries about any of the NEXA cars feedback or complaints contact us on 9848898488. Write to us at info@saboomaruti.in."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Contact-us.webp"
        />
      </Helmet>
      <Header />
      <div className="bg-[#15151e] pb-16 pt-24">
        <p className="text-center text-white uppercase text-2xl sm:text-3xl md:text-4xl font-medium">
          Contact us
        </p>
      </div>

      <div className="max-w-7xl mx-auto pt-10 pb-20 px-5 md:px-0">
        <div className="col-span-3 px-3">
          {/* Car Enquiry */}

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
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    className="border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500"
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    onChange={(e) => setEmail(e.target.value)}
                  >
                    Email
                  </label>
                  <div>
                    <input
                      className="border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your email"
                      id="Email"
                      name="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {email.length > 0 && !emailPattern.test(email) ? (
                      <small className="text-red-500">
                        Invalid email address
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div style={{ display: "none" }}>
                  <label className="block text-sm font-medium text-gray-700">
                    Service Type
                  </label>
                  <select
                    id="LEADCF6"
                    name="LEADCF6"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  >
                    <option>24x7 service</option>
                    <option>Paid Service</option>
                  </select>
                </div>

                {/* <div className='zcwf_row' style={{ display: 'none' }}>
                          <div className='zcwf_col_lab'>
                            <label htmlFor='LEADCF6'>Car Model</label>
                          </div>
                          <div className='zcwf_col_fld'>
                            <select
                              className='zcwf_col_fld_slt'
                              id='LEADCF6'
                              name='LEADCF6'
                            >
                              <option defaultValue value='SABOO NEXA Popup'>
                                Contact Us Page
                              </option>
                            </select>
                            <div className='zcwf_col_help'></div>
                          </div>
                        </div> */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Outlet
                  </label>
                  <select
                    id="LEADCF23"
                    name="LEADCF23"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  >
                    <option>Select Outlet</option>
                    <option>Jubilee</option>
                    <option>Lumbini</option>
                    <option>Kompally</option>
                    <option>Hafeezpet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Model
                  </label>
                  <select
                    id="LEADCF6"
                    name="LEADCF6"
                    onChange={(e) => setModel(e.target.value)}
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  >
                    <option>Select Model</option>
                    <option value="INVICTO">Invicto</option>
                    <option value="Fronx">Fronx</option>
                    <option value="Jimny">Jimny</option>
                    <option value="Grand Vitara">Grand Vitara</option>
                    <option value="Ciaz">Ciaz</option>
                    <option value="Baleno">Baleno</option>
                    <option value="Ignis">Ignis</option>
                    <option value="XL6">XL6</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    className="border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your phone number"
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

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Comments
                  </label>
                  <textarea
                    className="border min-h-10 py-1 outline-none px-1 rounded-md w-full focus:ring-red-500 focus:border-red-500"
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <p className="text-gray-700">
                <span className="text-black font-bold">Disclaimer</span>: By
                clicking 'Submit,' you acknowledge that you have agreed to our
                Terms and Conditions.
              </p>
              {/* <div className='flex items-start'>
                        <input
                          id='disclaimer'
                          name='disclaimer'
                          type='checkbox'
                          className='h-4 w-4 rounded'
                        />
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            Please Agree with following Disclaimer
                          </label>
                        </div>
                      </div> */}
              <button
                className="bg-black text-white rounded py-2.5 px-10"
                type="submit"
                disabled={
                  pattern.test(phone) && phone.length === 10 ? false : true
                }
                onClick={handleSubmit}
              >
                {loader ? (
                  <div className="flex items-center justify-center">
                    <CgSpinner className="animate-spin h-5 mr-2 text-white w-5" />
                    Loading
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>

         {/* Service Booking */}
         {/* <Tab.Panel>
                  <form
                    action='https://crm.zoho.in/crm/WebToLeadForm'
                    name='WebToLeads54158000001051288'
                    method='POST'
                    acceptCharset='UTF-8'
                  >
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='xnQsjsdp'
                      value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
                    />
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='xmIwtLD'
                      value='3e4c511e1bfac462fb9ac158b261b0d3a1f7118a5052416c6735cee16458265f'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='actionType'
                      value='TGVhZHM='
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='returnURL'
                      value='https://www.saboonexa.in/thank-you?email=Email'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      id='ldeskuid'
                      name='ldeskuid'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      id='LDTuvid'
                      name='LDTuvid'
                    />
                    <div className='space-y-4'>
                      <p className='uppercase font-bold text-md'>
                        personal details :
                      </p>
                      <div className='grid md:grid-cols-2 gap-3'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Name
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            placeholder='Enter your name'
                            type='text'
                            id='Last_Name'
                            name='Last Name'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Email
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            placeholder='Email'
                            id='Email'
                            name='Email'
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {email.length > 0 && !emailPattern.test(email) ? (
                            <small className='text-red-500'>
                              Invalid email address
                            </small>
                          ) : (
                            ''
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Phone
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            placeholder='Enter your phone number'
                            value={phone}
                            id='Phone'
                            name='Phone'
                            required
                            minLength='10'
                            maxLength='10'
                            onChange={(e) =>
                              setPhone(
                                e.target.value.replace(/[^1-9 ]/g, '') &&
                                  e.target.value.replace(/ /g, '')
                              )
                            }
                          />
                          {phone.length > 0 && phone.length < 10 ? (
                            <small className='text-red-500'>
                              Phone number must be 10 digits
                            </small>
                          ) : !pattern.test(phone) && phone.length === 10 ? (
                            <small className='text-red-500'>
                              Phone number is invalid
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                        <div></div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Customer Address
                          </label>
                          <textarea
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            type='text'
                            name='COMMENT'
                            id='car-enquiry-COMMENT'
                          ></textarea>
                        </div>
                      </div>

                      <p className='uppercase font-bold text-md'>
                        Vehicle details :
                      </p>
                      <div className='grid md:grid-cols-3 gap-3'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Model
                          </label>
                          <select
                            id='LEADCF6'
                            name='LEADCF6'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                          >
                            <option>Select Model</option>
                            <option value='INVICTO'>Invicto</option>
                            <option value='Fronx'>Fronx</option>
                            <option value='Jimny'>Jimny</option>
                            <option value='Grand Vitara'>Grand Vitara</option>
                            <option value='Ciaz'>Ciaz</option>
                            <option value='Baleno'>Baleno</option>
                            <option value='Ignis'>Ignis</option>
                            <option value='XL6'>XL6</option>
                          </select>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Pickup Required
                          </label>
                          <select
                            id='LEADCF22'
                            name='LEADCF22'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                          >
                            <option>Select Pickup</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Service Type
                          </label>
                          <select
                            id='LEADCF6'
                            name='LEADCF6'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                          >
                            <option>Select Service</option>
                            <option>Free Service</option>
                            <option>Paid Service</option>
                          </select>
                        </div>
                      </div>

                      <p className='text-gray-700'>
                        <span className='text-black font-bold'>Disclaimer</span>
                        : By clicking 'Submit,' you acknowledge that you have
                        agreed to our Terms and Conditions.
                      </p>
                      {/* <div className='flex items-start'>
                        <input
                          id='disclaimer'
                          name='disclaimer'
                          type='checkbox'
                          className='h-4 w-4 rounded'
                        />
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            Please Agree with following Disclaimer
                          </label>
                        </div>
                      </div> 
                      <button
                        className='bg-black text-white rounded py-2.5 px-10'
                        type='submit'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Tab.Panel>

                {/* Complaints 
                <Tab.Panel>
                  <form
                    action='https://crm.zoho.in/crm/WebToLeadForm'
                    name='WebToLeads54158000000752015'
                    method='POST'
                    acceptCharset='UTF-8'
                  >
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='xnQsjsdp'
                      value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
                    />
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='xmIwtLD'
                      value='3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='actionType'
                      value='TGVhZHM='
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='returnURL'
                      value='https://www.saboonexa.in/thank-you?email=Email'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      id='ldeskuid'
                      name='ldeskuid'
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      id='LDTuvid'
                      name='LDTuvid'
                    />
                    <div className='space-y-4'>
                      <div className='grid md:grid-cols-2 gap-3'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Name
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            type='text'
                            id='Last_Name'
                            name='Last Name'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Email
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            placeholder='Email'
                            id='Email'
                            name='Email'
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {email.length > 0 && !emailPattern.test(email) ? (
                            <small className='text-red-500'>
                              Invalid email address
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Outlet
                          </label>
                          <select
                            id='LEADCF23'
                            name='LEADCF23'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                          >
                            <option>Select Outlet</option>
                            <option>Jubilee</option>
                            <option>Lumbini</option>
                            <option>Kompally</option>
                          </select>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Model
                          </label>
                          <select
                            id='LEADCF6'
                            name='LEADCF6'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                          >
                            <option>Select Model</option>
                            <option>S-Cross</option>
                            <option>Ciaz</option>
                            <option>Baleno</option>
                            <option>Ignis</option>
                            <option>XL6</option>
                          </select>
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Phone
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            placeholder='Enter your mobile number'
                            value={phone}
                            id='Phone'
                            name='Phone'
                            required
                            minLength='10'
                            maxLength='10'
                            onChange={(e) =>
                              setPhone(
                                e.target.value.replace(/[^1-9 ]/g, '') &&
                                  e.target.value.replace(/ /g, '')
                              )
                            }
                          />
                          {phone.length > 0 && phone.length < 10 ? (
                            <small className='text-red-500'>
                              Phone number must be 10 digits
                            </small>
                          ) : !pattern.test(phone) && phone.length === 10 ? (
                            <small className='text-red-500'>
                              Phone number is invalid
                            </small>
                          ) : (
                            ''
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Comments
                          </label>
                          <textarea
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            type='text'
                            id='Description'
                            name='Description'
                          ></textarea>
                        </div>
                      </div>

                      <p className='text-gray-700'>
                        <span className='text-black font-bold'>Disclaimer</span>
                        : By clicking 'Submit,' you acknowledge that you have
                        agreed to our Terms and Conditions.
                      </p>
                      {/* <div className='flex items-start'>
                        <input
                          id='disclaimer'
                          name='disclaimer'
                          type='checkbox'
                          className='h-4 w-4 rounded'
                        />
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            Please Agree with following Disclaimer
                          </label>
                        </div>
                      </div> 
                      <button
                        className='bg-black text-white rounded py-2.5 px-10'
                        type='submit'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Tab.Panel>

                {/* Feedback 
                <Tab.Panel>
                  <form
                    action='https://crm.zoho.in/crm/WebToLeadForm'
                    name='WebToLeads54158000009595427'
                    method='POST'
                    acceptCharset='UTF-8'
                  >
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='xnQsjsdp'
                      value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
                    ></input>
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='xmIwtLD'
                      value='3e4c511e1bfac462fb9ac158b261b0d39c8d0928434d0301542c33e4d29c0a4d'
                    ></input>
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='actionType'
                      value='TGVhZHM='
                    />
                    <input
                      type='text'
                      style={{ display: 'none' }}
                      name='returnURL'
                      value='https://www.saboonexa.in/thank-you?email=Email'
                    />

                    <div className='space-y-4'>
                      <div className='grid md:grid-cols-2 gap-3'>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Name
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            type='text'
                            id='Last Name'
                            name='Last Name'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Email
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            placeholder='Email'
                            id='Email'
                            name='Email'
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {email.length > 0 && !emailPattern.test(email) ? (
                            <small className='text-red-500'>
                              Invalid email address
                            </small>
                          ) : (
                            ''
                          )}
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Phone
                          </label>
                          <input
                            className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                            placeholder='Enter your mobile number'
                            value={phone}
                            id='Phone'
                            name='Phone'
                            required
                            minLength='10'
                            maxLength='10'
                            onChange={(e) =>
                              setPhone(
                                e.target.value.replace(/[^1-9 ]/g, '') &&
                                  e.target.value.replace(/ /g, '')
                              )
                            }
                          />
                          {phone.length > 0 && phone.length < 10 ? (
                            <small className='text-red-500'>
                              Phone number must be 10 digits
                            </small>
                          ) : !pattern.test(phone) && phone.length === 10 ? (
                            <small className='text-red-500'>
                              Phone number is invalid
                            </small>
                          ) : (
                            ''
                          )}
                        </div>

                        <div>
                          <label className='block text-sm font-medium text-gray-700'>
                            Outlet
                          </label>
                          <select
                            id='LEADCF23'
                            name='LEADCF23'
                            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                          >
                            <option>Select Outlet</option>
                            <option>Jubilee</option>
                            <option>Lumbini</option>
                            <option>Kompally</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Comments
                        </label>
                        <textarea
                          className='border h-10 outline-none px-3 rounded-md w-full focus:ring-red-500 focus:border-red-500'
                          type='text'
                          id='Description'
                          name='Description'
                        ></textarea>
                      </div>

                      {/* Rating 
                      <div className='flex items-center space-x-3'>
                        <div className='space-x-1'>
                          <input
                            type='radio'
                            id='poor'
                            value='1'
                            name='Rating'
                          />
                          <label htmlFor='poor'>Poor</label>
                        </div>

                        <div className='space-x-1'>
                          <input
                            type='radio'
                            id='average'
                            name='Rating'
                            value='2'
                          />
                          <label htmlFor='average'>Average</label>
                        </div>
                        <div className='space-x-1'>
                          <input
                            type='radio'
                            name='Rating'
                            value='3'
                            id='good'
                          />
                          <label htmlFor='good'>Good</label>
                        </div>
                        <div className='space-x-1'>
                          <input
                            type='radio'
                            id='best'
                            value='4'
                            name='Rating'
                          />
                          <label htmlFor='best'>Best</label>
                        </div>
                        <div className='space-x-1'>
                          <input
                            type='radio'
                            id='excellent'
                            name='Rating'
                            value='5'
                          />
                          <label htmlFor='excellent'>Excellent</label>
                        </div>
                      </div>

                      <p className='text-gray-700'>
                        <span className='text-black font-bold'>Disclaimer</span>
                        : By clicking 'Submit,' you acknowledge that you have
                        agreed to our Terms and Conditions.
                      </p>

                      <button
                        className='bg-black text-white rounded py-2.5 px-10'
                        type='submit'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Tab.Panel> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
