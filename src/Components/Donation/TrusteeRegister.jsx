import { useState } from 'react'
import React from 'react'
// import Register from '../../public/Register.png'
function TrusteeRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');


  const handleRegisterClick = (e) => {
    let valid = true;
    e.preventDefault();
    if (firstName.length < 2) {
      setFirstNameError('First name must be at least 2 characters.');
      valid = false;
    } else {
      setFirstNameError('');
    }
    if (lastName.length < 4) {
      setLastNameError('Last name must be at least 4 characters.');
      valid = false;
    } else {
      setLastNameError('');
    }

    if (phoneNumber.length < 10) {
      setPhoneNumberError('Phone number must be at least 10 digits.');
      valid = false;
    } else {
      setPhoneNumberError('');
    }

    if (valid) {
      console.log("Successfully registered...")
    }
  };
  const handleFirstName = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^A-Za-z]/g, ''); // Allow only alphabetic characters
    e.target.value = sanitizedValue; // Update the input value
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^A-Za-z]/g, ''); // Allow only alphabetic characters
    e.target.value = sanitizedValue; // Update the input value
    setLastName(e.target.value)
  }

  const handleChangePhoneNumber = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    if (sanitizedValue.length <= 10) {
      // If the sanitized value's length is 10 or less, update the input value
      e.target.value = sanitizedValue;
      setPhoneNumber(e.target.value);
    }
  };

  return (
    <>
      <div className='bg-[url("../../public/Register.png")] bg-cover bg-no-repeat'>
        <form action="">
          <div className='min-w-full h-screen  flex flex-col justify-center items-center p-3'>
            <div className='md:w-[60%] w-full my-8 border-[1.5px] border-orange-500 md:p-20 p-14 md:px-14 px-5 bg-black bg-opacity-70 inset-0 rounded-2xl shadow-lg shadow-orange-500/50'>
              {/* <div className='flex xl:flex-row flex-col justify-between'>
                <input
                  type='text'
                  className='xl:w-[45%] w-full mt-8 xl:mt-0 p-2 placeholder-white rounded-lg bg-transparent border-[1.5px] border-white text-white outline-none'
                  placeholder='First name'
                  minLength={2}
                  value={firstName}
                  onChange={handleFirstName}
                  required
                />                
                <input
                  type='text'
                  className='xl:w-[45%] w-full mt-8 xl:mt-0 p-2 placeholder-white rounded-lg bg-transparent border-[1.5px] border-white text-white outline-none'
                  placeholder='Last name'
                  minLength={4}
                  value={lastName}
                  onChange={handleLastName}
                  required
                />
            </div> */}
              <div className='flex xl:flex-row flex-col justify-between'>
                <div className='w-full flex flex-col'>
                  <input
                    type='text'
                    className='xl:w-[97.5%] xl:mr-2 w-full mt-8 xl:mt-0 p-2 placeholder-white rounded-lg bg-transparent border-[1.5px] border-white text-white outline-none'
                    placeholder='First name'
                    minLength={2}
                    value={firstName}
                    onChange={handleFirstName}
                    required
                  />
                  {(firstNameError) && <p className="text-red-500 text-xs mt-0">{firstNameError}</p>}
                </div>
                <div className='w-full flex flex-col'>
                  <input
                    type='text'
                    className='xl:w-[97.5%] xl:ml-2 w-full mt-8 xl:mt-0 p-2 placeholder-white rounded-lg bg-transparent border-[1.5px] border-white text-white outline-none'
                    placeholder='Last name'
                    minLength={4}
                    value={lastName}
                    onChange={handleLastName}
                    required
                  />
                  {(lastNameError) && <p className="text-red-500 text-xs mt-0 xl:ml-2">{lastNameError}</p>}
                </div>
              </div>
              {/* {(nameError) && <p className="text-red-500 text-sm mt-0">{nameError}</p>} */}
              <div className='flex flex-col'>
                <input
                  type='email'
                  className=' p-2 placeholder-white rounded-lg my-8 bg-transparent border-[1.5px] border-white text-white outline-none'
                  placeholder='Email ID'
                  onChange={(e) => e.target.value}
                  required
                />

                <div className='flex flex-row'>
                  <select className="mr-1 bg-transparent appearance-none border-[1.5px] border-white rounded-lg p-2 pl-1 pr-5 outline-none text-white">
                    <option value="+91" className=' bg-transparent text-black'>+91</option>
                    <option value="+91" className=' bg-transparent text-black'>+91</option>
                    <option value="+91" className=' bg-transparent text-black'>+91</option>
                  </select>

                  <input
                    type='text'
                    className='w-full ml-1 p-2 placeholder-white rounded-lg bg-transparent border-[1.5px] border-white text-white outline-none'
                    placeholder='Phone Number'
                    value={phoneNumber}
                    maxLength={10} // Set maximum length to 10
                    onChange={handleChangePhoneNumber}
                    required
                  />
                </div>
              </div>
              {phoneNumberError && <p className="text-red-500 text-xs mt-0">{phoneNumberError}</p>}
              <div className='flex justify-center'>
                <button onClick={handleRegisterClick} className='text-white bg-orange-500 mt-7  py-3 px-14 rounded-lg border-[1.5px] border-white hover:bg-orange-600'>Register</button>
              </div>
            </div>
          </div>
        </form >
      </div >
    </>
  )
}

export default TrusteeRegister