import React from "react";

const Welfarecomponent = ({ imgSrc, textContent, heading }) => {
  return (
    <div className="w-80 flex flex-col items-center text-center">
      <div className="img">
        <img src={imgSrc} className="w-52" alt="WelfareImg" />
      </div>

      <div>
        <div className="heading font-roboto font-semibold">{heading}</div>
        <div className="p-8 md:p-0 xl:p-0 text-sm mt-2 font-roboto">{textContent}</div>
      </div>
    </div>
  );
};

export default Welfarecomponent;
