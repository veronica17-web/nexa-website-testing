import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
// const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const SignupSchema = Yup.object().shape({
  salutation: Yup.string().required("Information is required*"),
  firstName: Yup.string().required("Information is required*"),
  lastName: Yup.string().required("Information is required*"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailReg, "mail is not valid")
    .required("Information is required*"),

  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required("Information is required*"),
  alterPhone: Yup.string().matches(phoneRegex, "Invalid phone number"),
  address: Yup.string().required("Information is required*"),
  lastCompany: Yup.string().required("Information is required*"),
  jobTitle: Yup.string().required("Information is required*"),
  jobLocation: Yup.string().required("Information is required*"),
  totalExp: Yup.string().required("Information is required*"),
  profileSum: Yup.string().required("Information is required*"),
  lastDwarnSalary: Yup.string().required("Information is required*"),
  skills: Yup.string().required("Information is required*"),
  currentCTC: Yup.string().required("Information is required*"),
  expectedCTC: Yup.string().required("Information is required*"),
  qualification: Yup.string().required("Information is required*"),
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
  const [sub, setSub] = useState(false);
  const initialValues = {
    salutation: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alterPhone: "",
    address: "",
    lastCompany: "",
    jobTitle: "",
    jobLocation: "",
    totalExp: "",
    profileSum: "",
    lastDwarnSalary: "",
    skills: "",
    currentCTC: "",
    expectedCTC: "",
    qualification: "",
    resumeLink: "",
  };

  const notify = () =>
    toast.success("Form submitted successfully.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
      <Header col={sub} />
      {sub ? (
        <div className=" pt-24 pb-10 flex flex-col justify-center items-center text-center    min-h-[75vh]">
          <div className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
            WE GOT YOUR APPLICATION.
          </div>
          <div>
            We just got your application. We'll analyze your information and
            come back to you soon. <br />
            In case you're approved on this first step.
            <br />
            You'll be invited to an in-person interview with our team.
          </div>
          <div className="mt-6 mb-4 bg-black w-40 h-1"></div>
          <div className=" ">Best Wishes</div>
          <Link
            to="/"
            className="flex items-center justify-center py-8 text-blue-500"
          >
            <BsArrowRight /> &nbsp;Back to Home
          </Link>
        </div>
      ) : (
        <div>
          <div className="bg-[#15151e] pt-24 pb-10 text-center text-white uppercase text-2xl sm:text-3xl md:text-4xl font-medium">
            POWER UP YOUR AUTO CAREER WITH SABOO RKS
          </div>

          <div className={` my-2 mx-auto container `}>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setLoading(true);
                values = { ...values, ...formValue };
                console.log(values);
                axios
                  .post("https://saboo-careers.onrender.com/careers", values)
                  // .post('http://localhost:3001/register', values)
                  .then((response) => {
                    if (response.data.status === true) {
                      setLoading(false);
                      // alert('Successfully signup');
                      // history('/otpsign');
                      resetForm({ values: initialValues });
                      notify();
                      setSub(true);
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
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-x-6">
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
                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">Alternative Phone </div>
                        <ErrorMessage
                          name="alterPhone"
                          component="div"
                          className="  text-right text-sm text-red-700"
                        />
                      </div>
                      <Field

                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="alterPhone"
                        id="alterPhone"
                        // placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">
                          Address
                        </div>
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="  text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="address"
                        id="address"
                        // placeholder="Company Name"
                      />
                    </div>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-x-6">
                 
                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">
                        Last Company
                        </div>
                        <ErrorMessage
                          name="lastCompany"
                          component="div"
                          className="  text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="lastCompany"
                        id="lastCompany"
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
                        <div className="text-gray-600">Total Experience  <span className="text-xs"> - (Mention zero (“0”) if you’re a fresher.)</span>  </div>
                        <ErrorMessage
                          name="totalExp"
                          component="div"
                          className="  text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="totalExp"
                        id="totalExp"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div className="">
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">Profile Summary</div>
                        <ErrorMessage
                          name="profileSum"
                          component="div"
                          className=" text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        as="textarea"
                        name="profileSum"
                        id="profileSum"
                        // placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">Last Dwarn Salary </div>
                        <ErrorMessage
                          name="lastDwarnSalary"
                          component="div"
                          className="  text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="lastDwarnSalary"
                        id="lastDwarnSalary"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">Skills(Ex.Hr, Sales, Marketing)</div>
                        <ErrorMessage
                          name="skills"
                          component="div"
                          className=" -mt-5 text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="skills"
                        id="skills"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">Current CTC </div>
                        <ErrorMessage
                          name="currentCTC"
                          component="div"
                          className=" -mt-5 text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="currentCTC"
                        id="currentCTC"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">Expected CTC </div>
                        <ErrorMessage
                          name="expectedCTC"
                          component="div"
                          className=" -mt-5 text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="expectedCTC"
                        id="expectedCTC"
                        
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600">Highest Qualification</div>
                        <ErrorMessage
                          name="qualification"
                          component="div"
                          className=" text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className="mb-4 w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="qualification"
                        id="qualification"
                        // placeholder="Company Name"
                      />
                    </div>
                   
                    <div>
                      <div className="flex justify-between mb-1 items-center">
                      <div className="text-gray-600 text-left">
                          Upload resume in your google drive and paste link
                          below <br />
                          <span className="text-xs text-red-500">
                            Note: Update pdf document share setting from
                            Restricted to anyone with the link in google drive{" "}
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
                    {/* <div className="md:col-span-2 xl:col-span-3">
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

                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600 text-left">
                          Do you have a higher education/master’s degree (like
                          MBA, MTech, MS, etc.)?
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
                        <option
                          value=""
                          className="text-sm text-gray-200"
                          disabled
                        >
                          Please Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Field>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600 text-left">
                          If you're employed, since how long (no. of months)
                          have you been working in your current organization?
                          Mention zero ("0") if you're a fresher.
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
                        <option
                          value=""
                          className="text-sm text-gray-200"
                          disabled
                        >
                          Please Select
                        </option>
                        <option value="Engineering/Science">
                          Engineering/Science
                        </option>
                        <option value="Business/Commerce">
                          Business/Commerce
                        </option>
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
                          If you have work experience (incl. internships) which
                          of the areas have you worked in? (eg. engineering,
                          Finance, Market Research, Sales and Marketing, other)
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
        </Field> 
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
                          (Bachelor's/Master's) or when do you expect to
                          complete it if you're still a student?
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

                    <div className=" ">
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
      </div> 
                    <div className="mb-6">
                      <div className="flex justify-between mb-1 items-center">
                        <div className="text-gray-600 text-left">
                          Upload resume in your google drive and paste link
                          below <br />
                          <span className="text-xs text-red-500">
                            Note: Update pdf document share setting from
                            Restricted to anyone with the link in google drive{" "}
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
                    </div> */}
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
        </div>
      )}
    </>
  );
};

export default Career;
