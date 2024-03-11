import ReloadFrame from "./ReloadFrame";

const Dekstop = () => {
  return (
    <div className="w-full relative bg-white flex flex-row items-end justify-start pt-[184px] px-[114px] pb-[195px] box-border gap-[0px_101px] tracking-[normal] lg:flex-wrap lg:pl-[57px] lg:pr-[57px] lg:box-border mq450:gap-[0px_101px] mq750:gap-[0px_101px] mq750:pl-7 mq750:pr-7 mq750:box-border">
      <div className="w-[634px] flex flex-col items-start justify-start gap-[128px_0px] min-w-[634px] max-w-full lg:flex-1 mq1050:min-w-full mq450:gap-[128px_0px] mq750:gap-[128px_0px]">
        <ReloadFrame />
        <div className="w-[430px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <button className="cursor-pointer py-[13px] pr-[41px] pl-10 bg-darkorange overflow-hidden flex flex-col items-center justify-center border-[0.5px] border-solid border-gray-300 hover:bg-darkslategray-100 hover:box-border hover:border-[0.5px] hover:border-solid hover:border-darkslategray-200">
            <div className="relative text-xl font-medium font-roboto text-white text-center mq450:text-base container mx-auto">
              Reload
            </div>
          </button>
          <button className="cursor-pointer py-[13px] pr-2 pl-[13px] bg-darkorange overflow-hidden flex flex-col items-center justify-center whitespace-nowrap border-[0.5px] border-solid border-gray-400 hover:bg-darkslategray-100 hover:box-border hover:border-[0.5px] hover:border-solid hover:border-darkslategray-300">
            <div className="relative text-xl font-medium font-roboto text-white text-center container mx-auto">
              back to home
            </div>
          </button>
        </div>
      </div>
      <div className="h-[278px] w-[250px] flex-1 flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border min-w-[250px] lg:flex-1">
        <img
          className="w-64 sm:w-16 md:w-32 lg:w-48"
          loading="lazy"
          alt=""
          src="serverimg/SERVER_NOT_RESPONDING-removebg-preview 2.png"
        />
      </div>
    </div>
  );
};

export default Dekstop;
