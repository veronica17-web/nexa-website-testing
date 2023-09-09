import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
// const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// const pincodeReg = /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/
const countryCodeReg = /^(\+?\d{1,3}|\d{1,4})$/



const SignupSchema = Yup.object().shape({
  salutation: Yup.string().required("Information is required*"),
  firstName: Yup.string().required("Information is required*"),
  lastName: Yup.string().required("Information is required*"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailReg, "mail is not valid")
    .required("Information is required*"),
  countryCode: Yup.string().required("Information is required*").matches(countryCodeReg, "country code is not valid"),
  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required("Information is required*"),
  flat: Yup.string().required("Information is required*"),
  street: Yup.string().required("Information is required*"),
  landmark: Yup.string().required("Information is required*"),
  pincode: Yup.string().required("Information is required*"),
  city: Yup.string().required("Information is required*"),
  state: Yup.string().required("Information is required*"),
  country: Yup.string().required("Information is required*"),
  company: Yup.string().required("Information is required*"),
  jobTitle: Yup.string().required("Information is required*"),
  jobLocation: Yup.string().required("Information is required*"),
  fromDate: Yup.string().required("Information is required*"),
  jobSummary: Yup.string().required("Information is required*"),
  appField1: Yup.string().required("Information is required*"),
  appField2: Yup.string().required("Information is required*"),
  appField3: Yup.string().required("Information is required*"),
  appField4: Yup.string().required("Information is required*"),
  appField5: Yup.string().required("Information is required*"),
  appField6: Yup.string().required("Information is required*"),
  // resume: Yup.string().required("Information is required*"),
  resumeLink: Yup.string().required("Information is required*"),
});

// let state = [
//   "Andaman and Nicobar Islands",
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chandigarh",
//   "Chhattisgarh",
//   "Dadra and Nagar Haveli",
//   "Daman and Diu",
//   "Delhi",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jammu and Kashmir",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Lakshadweep",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Puducherry",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
// ];

const Career = ({ formValue }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const initialValues =  {
    salutation: "",
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phone: "",
    flat: "",
    street: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    company: "",
    jobTitle: "",
    jobLocation: "",
    fromDate: "",
    jobSummary: "",
    appField1: "",
    appField2: "",
    appField3: "",
    appField4: "",
    appField5: "",
    appField6: "",
    // resume: "",
    resumeLink: "",
  }

  const notify = () =>
  toast.success(
    'Form submitted successfully.',
    {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    }
  );

  return (
    <>
      <Helmet>
        <title>Explore job vacancies in SabooRks in Hyderabad</title>
        <meta
          name="title"
          content="Maruti Suzuki Terms and Conditions | Saboo Nexa"
        />
        <meta
          name="description"
          content="Are you looking to build a rewarding and fulfilling career? [Saboo RKS] offers exciting opportunities for individuals who are passionate, motivated, and eager to grow with us. Join our team and embark on a journey where your skills and aspirations are valued, and where you can make a meaningful impact."
        />
        {/* <meta
          name="keywords"
          content="Nexa Ciaz car price, Offers on Nexa Ciaz, Maruti Ciaz mileage, Ciaz Specifications, Nexa ciaz petrol price, Maruti ciaz on road price, Maruti ciaz variants, ciaz images, ciaz mileage, Nexa ciaz price in hyderabad, Maruti ciaz price in hyderabad, ciaz price in hyderabad, ciaz onroad price in hyderabad, offers on ciaz, ciaz offers 2022, new ciaz price, new ciaz price in hyderabad, new ciaz 2022 price, new ciaz 2022 onroad price, ciaz petrol price in hyderabad, ciaz 2022 petrol price in hyderabad"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
        />
        <meta
          property="og:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-new-maruti-ciaz/"
        />
        <meta
          property="twitter:title"
          content="Nexa Ciaz Car on Road Price & Offers in Hyderabad| Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Nexa Ciaz 2022 car price starts at 8.87 lakh, mileage of 26.8 km/l. Get Nexa Ciaz specifications & features. Best offers on Ciaz car, low EMI, low down-payment. Call now 9848898488"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Ciaz.jpg"
        /> */}
      </Helmet>
      <Header />
      <div className="bg-[#15151e] pt-24 pb-10 text-center text-white uppercase text-2xl sm:text-3xl md:text-4xl font-medium">
        Page in testing won't submit anywhere
      </div>

      <div className={` my-2 mx-auto container `}>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting,resetForm }) => {
            setLoading(true);
            values = { ...values, ...formValue };
            console.log(values);
            axios
              .post(
                "https://saboo-careers.onrender.com/careers",
                values
              )
              // .post('http://localhost:3001/register', values)
              .then((response) => {
                if (response.data.status === true) {
                  setLoading(false);
                  // alert('Successfully signup');
                  // history('/otpsign');
                  resetForm({ values: initialValues });
                  notify()
                } else {
                  setError(error.message);
                  setLoading(false);
                }
                setSubmitting(false);
              })
              .catch((error) => {
                setError(error.message);
                setLoading(false);
                alert(`${error.response.data.message}`);
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="  rounded-3xl    bg-white p-6  text-center  ">
              {/* <div className='flex justify-center'>
              <Link to='/'>
                <img src={logo} alt='logo' className='mx-auto mb-8   h-20' />
              </Link>
            </div> */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-x-6">
                <div className="mb-2  md:col-span-2 xl:col-span-3 text-left text-xl">
                  Biographical
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Salutation </div>

                    <ErrorMessage
                      name="salutation"
                      component="div"
                      className=" -mt-5 text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    as="select"
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    name="salutation"
                    id="salutation"
                  >
                    <option
                      value=""
                      className="text-sm text-gray-500"
                      disabled
                    ></option>
                    <option value="Mr">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </Field>
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">First Name* </div>
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="firstName"
                    id="firstName"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Last Name* </div>
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="  text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="lastName"
                    id="lastName"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Email* </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="  text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="email"
                    id="email"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Country Code* </div>
                    <ErrorMessage
                      name="countryCode"
                      component="div"
                      className="  text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="countryCode"
                    id="countryCode"
                    // placeholder="Company Name"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Phone* </div>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="  text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="phone"
                    id="phone"
                    // placeholder="Company Name"
                  />
                </div>

                <div className="mb-2 mt-4 md:col-span-2 xl:col-span-3 text-left text-xl">
                  Current Address
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">
                      Current Flat/House/Wing/Number
                    </div>
                    <ErrorMessage
                      name="flat"
                      component="div"
                      className="  text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="flat"
                    id="flat"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">
                      Current Street/Locality/Area{" "}
                    </div>
                    <ErrorMessage
                      name="street"
                      component="div"
                      className="  text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="street"
                    id="street"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Current Landmark </div>
                    <ErrorMessage
                      name="landmark"
                      component="div"
                      className="  text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="landmark"
                    id="landmark"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Current Pincode </div>
                    <ErrorMessage
                      name="pincode"
                      component="div"
                      className="  text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="pincode"
                    id="pincode"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Current City </div>
                    <ErrorMessage
                      name="city"
                      component="div"
                      className=" -mt-5 text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="city"
                    id="city"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Current State </div>
                    <ErrorMessage
                      name="state"
                      component="div"
                      className=" -mt-5 text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="state"
                    id="state"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Current Country </div>
                    <ErrorMessage
                      name="country"
                      component="div"
                      className=" -mt-5 text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="country"
                    id="country"
                    // placeholder="Company Name"
                  />
                </div>

                <div className="mb-2 mt-4 md:col-span-2 xl:col-span-3 text-left text-xl">
                  Work Experince
                </div>

                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Company</div>
                    <ErrorMessage
                      name="company"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="company"
                    id="company"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Job Title</div>
                    <ErrorMessage
                      name="jobTitle"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Job Location</div>
                    <ErrorMessage
                      name="jobLocation"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="jobLocation"
                    id="jobLocation"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">From Date</div>
                    <ErrorMessage
                      name="fromDate"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="date"
                    name="fromDate"
                    id="fromDate"
                    // placeholder="Company Name"
                  />
                </div>
                <div className="md:col-span-2 xl:col-span-3">
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600">Job Summary</div>
                    <ErrorMessage
                      name="jobSummary"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    as="textarea"
                    name="jobSummary"
                    id="jobSummary"
                    // placeholder="Company Name"
                  />
                </div>
                <div className="mb-2 md:col-span-2 xl:col-span-3 mt-4 text-left text-xl">
                  Job Application Fields
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600 text-left">
                      Do you have a higher education/master’s degree (like MBA,
                      MTech, MS, etc.)?
                    </div>
                    <ErrorMessage
                      name="appField1"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    as="select"
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    name="appField1"
                    id="appField1"
                  >
                    <option value="" className="text-sm text-gray-200" disabled>
                      Please Select
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Field>
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600 text-left">
                      If you're employed, since how long (no. of months) have
                      you been working in your current organization? Mention
                      zero ("0") if you're a fresher.
                    </div>
                    <ErrorMessage
                      name="appField2"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="appField2"
                    id="appField2"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600 text-left">
                      What was your field of education/bachelor's/master's
                      degree?
                    </div>
                    <ErrorMessage
                      name="appField3"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    as="select"
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    name="appField3"
                    id="appField3"
                  >
                    <option value="" className="text-sm text-gray-200" disabled>
                      Please Select
                    </option>
                    <option value="Engineering/Science">
                      Engineering/Science
                    </option>
                    <option value="Business/Commerce">Business/Commerce</option>
                    <option value="Economics/Mathematics">
                      Economics/Mathematics
                    </option>
                  </Field>
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600 text-left">
                      If given an offer, how soon can you join ?
                    </div>
                    <ErrorMessage
                      name="appField4"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="date"
                    name="appField4"
                    id="appField4"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600 text-left">
                      If you have work experience (incl. internships) which of
                      the  areas have you worked in? (eg. engineering, Finance, Market Research, Sales and Marketing, other)
                    </div>
                    <ErrorMessage
                      name="appField5"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  {/* <Field
                    required
                    as="select"
                    className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    name="appField5"
                    id="appField5"
                    isMulti={true} // Add the 'multiple' attribute here
                  >
                    <option
                      value=""
                      className="text-sm text-gray-500"
                      disabled
                    ></option>
                    <option value="Mr">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </Field> */}
                   <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="appField5"
                    id="appField5"
                    // placeholder="Company Name"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600 text-left">
                      When did you complete your last education degree
                      (Bachelor's/Master's) or when do you expect to complete it
                      if you're still a student?
                    </div>
                    <ErrorMessage
                      name="appField6"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="date"
                    name="appField6"
                    id="appField6"
                    // placeholder="Company Name"
                  />
                </div>
                <div className="mb-2 mt-4 md:col-span-2 xl:col-span-3 text-left text-xl">
                  Resume
                </div>
                {/* <div className=" ">
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600 text-sm">
                      (PDF only, max 1MB)
                    </div>
                    <ErrorMessage
                      name="resume"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    type="file"
                    className="mb-1 block w-full border rounded-lg px-2 py-1 text-lg leading-relaxed text-slate-500 file:mr-4 file:rounded-full  file:border-0  file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-black hover:file:bg-violet-100 focus:border-black  "
                    name="resume" // Provide a valid name for the file input
                    id="resume" // Provide a valid ID for the file input
                    placeholder="Resume"
                    required
                    accept=".pdf" // Allow only PDF files
                    onChange={(event) => {
                      const selectedFile = event.target.files[0];
                      const fileSize = selectedFile.size / 1024; // Size in KB

                      if (selectedFile && fileSize <= 1024) {
                        // Valid file size (1MB or less)
                        // You can also handle the file here, e.g., store it in state or display a message.
                      } else {
                        // File size exceeds 1MB or invalid file type
                        event.target.value = ""; // Clear the file input
                        // Display an error message or take appropriate action.
                      }
                    }}
                  />
                </div> */}
                <div className="mb-6">
                  <div className="flex justify-between mb-1 items-center">
                    <div className="text-gray-600 text-left">
                      Upload resume in your google drive and paste link below{" "}
                      <br />
                      <span className="text-xs text-red-500">
                        Note: Update pdf document share setting from Restricted
                        to anyone with the link in google drive{" "}
                      </span>
                    </div>
                    <ErrorMessage
                      name="resumeLink"
                      component="div"
                      className=" text-right text-sm text-red-700"
                    />
                  </div>
                  <Field
                    required
                    className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                    type="text"
                    name="resumeLink"
                    id="resumeLink"
                    // placeholder="Company Name"
                  />
                </div>
              </div>
              <button
                className="col-span-3 mb-6 mt-1 w-min rounded-md bg-black  px-6 py-2 font-sans text-lg font-semibold tracking-wide text-white whitespace-nowrap "
                type="submit"
                // disabled={isSubmitting}
              >
                {loading ? "SUBMITTING" : "SUBMIT APPLICATION"}
              </button>

              {/* <Link to="/login">
                Already have an account -{" "}
                <span to="/signup" className="font-medium text-[#5c67f5]">
                  Sign in
                </span>
              </Link>

              <div className="-mb-3 mt-4 text-[12px] ">
                © 2023 ProcureN. All rights reserved{" "}
              </div> */}
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </>
  );
};

export default Career;
