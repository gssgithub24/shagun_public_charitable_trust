import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      alert("You have subscribed for upcoming news");
      setEmail("");
      setError("");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="pt-10 md:pl-3 md:pt-0 xl:pt-0">
      <p>Newsletter</p>
      <div className="mt-5 flex flex-col gap-2 text-gray-400">
        <p className="w-56">
          Subscribe us and get latest news & upcoming events.
        </p>
        <input
          placeholder="Email Address"
          value={email}
          onChange={handleInputChange}
          className="bg-transparent px-4 py-2 mt-4 border rounded-lg"
        />
        {error && <p className="text-red-500">{error}</p>}
        <div
          onClick={handleSubmit}
          className="mt-2 flex gap-3 text-base text-orange-400 group cursor-pointer w-[82%]
          items-center hover:bg-gradient-to-bl from-orange-500  to-orange-700 px-4 py-1 rounded-full transition ease-in-out duration-700"
        >
          <FaArrowRight className=" group-hover:translate-x-32 transition ease-in-out duration-700 group-hover:text-white" />
          <p className="uppercase text-sm md:text-base xl:text-base font-roboto group-hover:-translate-x-5 transition ease-in-out duration-700 group-hover:text-white">
            Subscribe Us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
