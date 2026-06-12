import React, { useState } from "react";
import img from "../assets/vaibhavprofile.jpg";
import "../styles/forminput.css";
import SendIcon from "../assets/send-horizontal.svg?react";
import { createResponse } from "../firebase/response.js";

const ContactPage = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createResponse({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        message: message.trim(),
    });
      // Clear form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };
  return (
    <div className="p-8">
      <div>
        <div className="flex">
          <h2 className="text-6xl px-4 text-white/70 inline-block font-semibold">
            Contact
          </h2>
          <div className="border-b-4 w-full px-4 border-white/30"></div>
        </div>
        <div className="flex md:flex-row flex-col mt-16 items-center md:justify-between md:items-start  ">
          <div className="flex ">
            <img
              src={img}
              alt="profile"
              className="w-42 h-42 rounded-full object-cover"
            />
            <h3 className="pl-6 pt-6 text-3xl text-white/80 font-semibold">
              Vaibhav Prajapati
            </h3>
          </div>
          <div className="md:w-1/2 mt-15 md:mt-0 ">
            <h3 className="text-3xl text-white/80 font-semibold mb-4">
              Send me a message
            </h3>
            <form onSubmit={(e) => {handleSubmit(e)}}>
              <div className="flex">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  name="first-name"
                  className="w-1/2 formInput"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last-name"
                  className="w-1/2 formInput"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="e-mail"
                  className=" formInput "
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  placeholder="Enter Your Message"
                  className=" formInput h-36    "
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gray-800 content-center rounded-xl flex justify-center cursor-pointer  px-8 font-semibold py-4"
                >
                  Send
                  <SendIcon className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
