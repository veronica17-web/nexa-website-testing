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
const url =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

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
  resumeLink: Yup.string()
    .required("Information is required*")
    .matches(url, "link is not valid"),
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
                        <div className="">Salutation </div>

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
                        <div className="">First Name* </div>
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
                        <div className="">Last Name* </div>
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
                        <div className="">Email* </div>
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
                        <div className="">Phone* </div>
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
                        <div className="">Alternative Phone </div>
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
                        <div className="">Address</div>
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
                        <div className="">Last Company</div>
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
                        <div className="">Job Title</div>
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
                        <div className="">Job Location</div>
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
                        <div className="">
                          Total Experience{" "}
                          <span className="text-xs">
                            {" "}
                            - (Mention zero (“0”) if you’re a fresher.)
                          </span>{" "}
                        </div>
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
                        <div className="">Profile Summary</div>
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
                        <div className="">Last Dwarn Salary </div>
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
                        <div className="">Skills(Ex.Hr, Sales, Marketing)</div>
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
                        <div className="">Current CTC </div>
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
                        <div className="">Expected CTC </div>
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
                        <div className="">Highest Qualification</div>
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

                    <div className="md:col-span-2 mb-4">
                      <div className="flex justify-between   mb-1 ">
                        <div className=" text-left  md:hidden">Resume Link</div>
                        <div className=" text-left hidden md:block">
                        <span className="font-medium">Resume Link :</span> Upload your resume to Google Drive and paste the link below.
                        </div>

                        <ErrorMessage
                          name="resumeLink"
                          component="div"
                          className=" text-right text-sm text-red-700"
                        />
                      </div>
                      <Field
                        required
                        className=" w-full rounded-lg  border border-gray-300 px-4 py-2 placeholder:text-black focus:outline-none"
                        type="text"
                        name="resumeLink"
                        id="resumeLink"
                        // placeholder="Company Name"
                      />
                      <div>
                        <div className="text-left mt-1 md:hidden">
                          Upload resume in your google drive and paste link
                          below
                        </div>
                        <div className="text-xs text-red-500 text-left mt-0.5">
                          Note: Update pdf document share setting from
                          Restricted to anyone with the link in google drive{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="col-span-3 mb-6 mt-1 w-min rounded-md bg-black  px-6 py-2 font-sans text-lg font-semibold tracking-wide text-white whitespace-nowrap "
                    type="submit"
                    // disabled={isSubmitting}
                  >
                    {loading ? "SUBMITTING" : "SUBMIT APPLICATION"}
                  </button>
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
