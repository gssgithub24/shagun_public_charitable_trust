const ReloadFrame = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[21px_0px] max-w-full text-left text-17xl text-black font-inter">
      <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit md:text-4xl text-black-900  mq450:text-3xl">
        This site can’t be reached
      </h2>
    
      <div className="w-[634px] relative text-3xl font-semibold text-gray-100 flex items-center mq450:text-lg">{`An unexpected error occurred. Please refresh the page and try again. `}</div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-xl text-gray-300 font-roboto">
        <div className="w-[699px] relative font-semibold flex items-center max-w-[110%] shrink-0 mq450:text-base">
          Try :
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[38px] box-border gap-[1px_0px] max-w-full z-[1] mt-[-9px] text-royalblue font-inter">
          <div className="self-stretch flex flex-row items-center justify-center gap-[0px_25px] max-w-full text-gray-200">
          <img
              className="h-3 w-3 relative"
              loading="lazy"
              alt=""
              src="serverimg/ellipse-1.svg"
            />
          <div classname="h-10 md:text-4xl text-lg flex-1 relative font-semibold flex items-center max-w-[calc(100%_-_37px)] mq450:text-base">Checking the connection</div>

           
            <div className="h-10 flex-1 relative font-semibold flex items-center max-w-[calc(100%_-_37px)] mq450:text-base">
              
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[0px_25px] max-w-full">
            <img
              className="h-3 w-3 relative"
              loading="lazy"
              alt=""
              src="serverimg/ellipse-1.svg"
            />
            <div className="h-10 flex-1 relative font-semibold flex items-center max-w-[calc(100%_-_37px)] mq450:text-base">
              Checking the proxy, firewall, and DNS configuration
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[0px_25px] max-w-full">
            <img
              className="h-3 w-3 relative"
              loading="lazy"
              alt=""
              src="serverimg/ellipse-1.svg"
            />
            <div className="h-10 flex-1 relative font-semibold flex items-center max-w-[calc(100%_-_37px)] mq450:text-base">
              Running Connectivity Diagnostics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReloadFrame;
