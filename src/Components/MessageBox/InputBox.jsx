import React, { useRef, useState } from "react";
import "./InputBox.css";
import emailjs from "@emailjs/browser";
const InputBox = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    help: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [helpError, setHelpError] = useState("");
  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // validate()
  };
  const validate = () => {
    let valid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (!data.email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailPattern.test(data.email.trim())) {
      setEmailError("Invalid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    // Name validation
    if (!data.name.trim()) {
      setNameError("Name is required");
      valid = false;
    } else if (data.name.trim().length < 2) {
      setNameError("Name must be at least 2 characters long");
      valid = false;
    } else if (data.name.trim().length > 50) {
      setNameError("Name must be less than 50 characters long");
      valid = false;
    } else {
      setNameError("");
    }

    // Help validation
    if (!data.help.trim()) {
      setHelpError("Please provide your query.");
      valid = false;
    } else {
      setHelpError("");
    }

    // Additional validations can be added here for other fields

    if (valid) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    if (validate()) {
    
      emailjs
        .sendForm(
          "service_5kz11dt",
          "template_de76stq",
          form.current,
          "ObhHfe1Df4j6q2SM0"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              alert("Email sent successfully");
            } else {
              alert("There might be some issue");
            }
          },
          (error) => {
            alert("Error :"+error.text);
          }
        );
      
    }
  };
  return (
    <div className="flex flex-col justify-center w-full px-4">
      <form action="" onSubmit={handleSubmit} ref={form}>
        <div className="my-4 ">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm hover:shadow-slate-200 focus:outline-none focus:ring-0 autofill:bg-slate-100 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
              placeholder="Name"
              minLength={4}
              value={data.name}
              name="name"
              onChange={handleChange}
              required
            />
            <label
              htmlFor="name"
              className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Name
            </label>
          </div>
          {nameError && (
            <p className="text-red-500 pl-2 text-xs ">{nameError}</p>
          )}
        </div>
        <div className="my-4 ">
          <div className="relative">
            <input
              type="email"
              id="email"
              className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm autofill:bg-transparent hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500 "
              placeholder="Email"
              value={data.email}
              name="email"
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
          </div>
          {emailError && (
            <p className="text-red-500 pl-2 text-xs ">{emailError}</p>
          )}
        </div>
        <div className="my-4 ">
          <div className="relative">
            <textarea
              id="help"
              className="block w-full px-2.5 py-2.5 text-sm bg-transparent rounded-lg border-2 border-gray-400 text-black hover:shadow-sm autofill:bg-transparent hover:shadow-slate-200 focus:outline-none focus:ring-0 focus:border-orange-600 peer hover:border-orange-600 dark:focus:border-orange-600 peer-hover:shadow-orange-500 peer-focus:shadow-orange-500"
              placeholder="How can I help you ?"
              rows={6}
              style={{ resize: "none" }}
              value={data.help}
              name="help"
              onChange={handleChange}
              required
            />
            <label
              htmlFor="help"
              className="absolute text-sm  text-black  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100  px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[15%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 pointer-events-none "
            >
              How can I help you ?
            </label>
          </div>
          {helpError && (
            <p className="text-red-500 pl-2 text-xs ">{helpError}</p>
          )}
          <div className="flex justify-end mt-4">
            <button
              className="px-2 py-1 bg-gradient-to-br rounded-md text-white from-orange-600 via-orange-400 to-orange-600"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
