import React from 'react'
import { FaMessage } from "react-icons/fa6";
import InputBox from './InputBox';
const MessageBox = () => {
  return (
    <div className=" font-roboto bg-slate-100 rounded-md border-2 ">
      <div className="bg-orange-500 p-4 text-2xl rounded-t-md font-medium relative">
        Shagun Public Charitable Trust
        {/* <div className='absolute bottom-0 right-3'><FaMessage className='w-60 h-10'/></div> */}
      </div>
        <div><InputBox/></div>
      <div className='text-center cursor-text p-6'>
        This site is protected by reCAPTCHA and the Google <span className='text-orange-800 cursor-pointer'>Privacy Policy</span> and 
        <span className='text-orange-800 cursor-pointer'> Terms of Service</span> apply.
      </div>
    </div>
  );
}

export default MessageBox