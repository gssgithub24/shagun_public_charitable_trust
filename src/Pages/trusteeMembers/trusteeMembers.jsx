import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const PROUD_TRUSTEES_PAGE = () => {
  return (
    <div className="font-roboto">
      <div className="">
        <Header color={"black"} />
      </div>
      <div>
        
      </div>
      <h1 className="text-2xl font-bold text-center mt-16 mb-4">
        OUR PROUD TRUSTEES
      </h1>
      <br />
      <div className="flex justify-center flex-wrap">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-gray-200 to-transparent" />
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[23%] rounded overflow-hidden mx-4 my-4 flex flex-col justify-center shadow-2xl">
            <div className="h-64 w-full">
              <img
                className="w-full h-full"
                src="https://static.vecteezy.com/system/resources/previews/000/546/107/original/businessman-in-suit-head-vector-icon.jpg"
                alt="Alt-Balaji"
              />
            </div>
            <div className="px-4 py-2 text-center">
              <div className="font-bold text-sm mb-1">Ganga Sagar Sharma</div>
              <br />
              <p className="text-gray-700 text-sm">Founder</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card {
          margin-bottom: 20px; /* Add some bottom margin to the cards */
        }

        @media (max-width: 767px) {
          .flex-wrap .rounded {
            width: 100%; /* Full width for smaller screens */
            margin: 0 auto; /* Center align the cards */
          }
        }
      `}</style>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default PROUD_TRUSTEES_PAGE;
