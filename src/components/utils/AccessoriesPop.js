import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import axios from "axios";

function AccessoriesPop({ open, setOpen, item }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [method, setMethod] = useState();
  const [loader, setLoader] = useState(false);

  async function handleSubmit(event) {
    setLoader(true);

    // First API call
   await axios
      .post("https://saboogroups.com/admin/api/enquiry", {
        name: name,
        email: email,
        phone: phone,
        model: model,
        outlet: "",
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
    await axios
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

  async function handleSubmit2(event) {
    setLoader(true);

    // First API call
    axios
      .post("https://saboo-nexa.onrender.com/accessories", {
        name: name,
        email: email,
        phone: phone,
        model: model,
        outlet: "",
      })
      .then((res) => {
        setMethod("POST");
        toast.success("Enquiry sent successfully");
      })
      .catch((err) => {
        setLoader(false);
        toast.error("Something went wrong!");
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;

  item.value = ` ${item.item} ${item.code} - ₹ ${item.price}*`;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 -top-16 md:top-4 right-0 left-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mt-3 text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-xl leading-6  text-center uppercase  "
                  >
                    Order your Accessories
                  </Dialog.Title>
                  <div className="mt-2 text-sm text-center text-blue-500">
                    {" "}
                    {item.item} {item.code} - ₹ {item.price}*
                  </div>
                  <div className="mt-4">
                    <form
                      onSubmit={async (event) => {
                        event.preventDefault(); // Prevent default form submission

                        try {
                          await handleSubmit();
                          await handleSubmit2();
                        } catch (error) {
                          // Handle errors from the API calls
                          return;
                        }

                        // Set the action and submit the form
                        if (pattern.test(phone) && phone.length === 10) {
                          document.forms[0].action =
                            "https://crm.zoho.in/crm/WebToLeadForm";
                          document.forms[0].submit();
                        }
                      }}
                      action={
                        pattern.test(phone) && phone.length === 10
                          ? "https://crm.zoho.in/crm/WebToLeadForm"
                          : "#"
                      }
                      name="WebToLeads54158000007156717"
                      method={method}
                      className="space-y-3"
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
                      <div className="pb-3">
                        <input
                          className="border-b border-black outline-none px-3 py-2 w-full focus:ring-red-500 focus:border-red-500 placeholder:text-gray-600"
                          type="text"
                          required
                          placeholder="Name*"
                          id="Last_Name"
                          name="Last Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="pb-3">
                        <input
                          className="border-b border-black py-2 outline-none px-3 w-full focus:ring-red-500 focus:border-red-500 placeholder:text-gray-600"
                          type="email"
                          name="Email"
                          id="Email"
                          placeholder="Email*"
                          required
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
                      <div className="pb-3">
                        <input
                          className="border-b border-black py-2 placeholder:text-gray-600 outline-none px-3 w-full focus:ring-red-500 focus:border-red-500"
                          type="tel"
                          id="Phone"
                          name="Phone"
                          minLength="10"
                          maxLength="10"
                          placeholder="Phone*"
                          value={phone}
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
                        <select
                          id="LEADCF6"
                          name="LEADCF6"
                          required
                          onChange={(e) => setModel(e.target.value)}
                          className="block w-full text-sm py-3 px-3 border-b border-black shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-gray-600"
                        >
                          <option value="" disabled selected>
                            Category
                          </option>
                          <option value="Accessories">Accessories</option>
                        </select>
                      </div>
                      <div className="pt-4 flex gap-3">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center border border-gray-300 shadow-sm py-2.5 bg-white text-base text-gray-700 hover:border-gray-600 focus:outline-none sm:text-sm rounded-md w-1/2"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="w-1/2 inline-flex justify-center items-center border border-transparent shadow-sm py-2.5 bg-black text-base text-white hover:bg-white hover:border hover:border-black hover:text-black duration-300 sm:text-sm rounded-md"
                        >
                          {loader ? (
                            <div
                              className={`flex items-center justify-center ${
                                loader && "cursor-wait"
                              }`}
                            >
                              SUBMITTING
                            </div>
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                      <div className="mt-6 pb-3 container text-xs text-gray-600">
                        <span className="font-semibold">*Disclaimer:</span> By
                        clicking 'SUBMIT', you have agreed to our Terms and
                        Conditions.
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default AccessoriesPop;
