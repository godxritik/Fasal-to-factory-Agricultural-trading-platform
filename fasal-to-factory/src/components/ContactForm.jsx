import React, { useState } from "react";
import emailjs from "emailjs-com";
import plantLogo from "../assets/images/plantLogo.svg"
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import Footer from "./Footer";

// import icon from "../assets/images/favicon.png"


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


const [successStatus,setSuccessStatus] = useState(false);
const [failedStatus, setFailedStatus] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ywx1h4v",   // EmailJS Service ID
        "template_d9jg43n",  // EmailJS Template ID
        formData,
        "AIu7RGpCM3euSmMDM"       //  EmailJS Public Key
      )
      .then(
        (response) => {
          setSuccessStatus(true);
          setTimeout(()=>setSuccessStatus(false),5000);
        },
        (error) => {
         setFailedStatus(true);
         setTimeout(() => setFailedStatus(false),5000);
        }
      );
  };

  return (
    <div id="" className="flex flex-col  items-center  min-h-screen ">
      <div className="flex w-full gap-3 items-center justify-start  rounded-t-xl bg-[#3F7D58]  px-4 py-2">
        <img className="w-[40px]" src={plantLogo} alt="" />
        <a className="text-lg  text-white" href="/" >Fasal 2 factory</a>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-gray-200  my-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="w-full px-2 py-1 border border-slate-400 outline-none rounded-md text-md text-[#3F7D58] focus:border-2 focus:border-[#3F7D58] transition-all duration-300 my-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="w-full px-2 py-1 border border-slate-400 outline-none rounded-md text-md text-[#3F7D58] focus:border-2 focus:border-[#3F7D58] transition-all duration-300 my-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              required
              className="w-full px-2 py-1 border border-slate-400 outline-none rounded-md text-md text-[#3F7D58] focus:border-2 focus:border-[#3F7D58] transition-all duration-300 my-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white border-2 border-[#3F7D58] font-medium  text-[#3F7D58] py-2 rounded-lg hover:bg-[#3F7D58] hover:text-white transition-all duration-300"
          >
            Send Email
          </button>
        </form>
      </div>

    <SuccessMessage title={"Success"} message={"Email sent to admin"} show={successStatus}/>
    <ErrorMessage title={"Failed"} message={"unkonown error occurred"} show={failedStatus}/>
    


    </div>
  );
};

export default ContactForm;
