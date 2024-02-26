import React, { useState } from 'react';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const handleRegisterClick = (e) => {
        let valid = true;
        e.preventDefault();
        //Check whether Name is valid or not
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
      
        //Check Email
        if (!validateEmail(email)) {
            setEmailError('Invalid email address.');
            valid = false;
        } else {
            setEmailError('');
        }
        // Check Password
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            valid = false;
        } else {
            setPasswordError('');
        }
        // Check Phone Number
        if (phoneNumber.length < 10) {
            setPhoneNumberError('Phone number must be at least 10 digits.');
            valid = false;
        } else {
            setPhoneNumberError('');
        }

        if (valid) {
            console.log("Successfully created an account...")
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
    const handleEmail = (e) => {
        setEmail(e.target.value);
        // e.target.setCustomValidity('');
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        // e.target.setCustomValidity('');
    };
    const handleChangePhoneNumber = (e) => {
        const inputValue = e.target.value;
        const sanitizedValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
        if (sanitizedValue.length <= 10) {
            // If the sanitized value's length is 10 or less, update the input value
            e.target.value = sanitizedValue;
            setPhoneNumber(e.target.value);
        }
    };

    const validateEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };


    return (
        <>
            <form action="">
                <div className="h-screen flex flex-col items-center justify-center">
                    <h1 className="md:text-5xl text-3xl font-bold text-black mt-20 mb-4">Create Account</h1>
                    <br />
                    {/* <div className="flex xl:flex-row flex-col justify-between items-center md:w-3/5 w-full">
                        <input
                            className="xl:w-1/2 md:w-full w-[85%] py-1 xl:mr-2 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                            type="text"
                            placeholder="First Name"
                            minLength={2}
                            value={firstName}
                            onChange={handleFirstName}
                            required
                        />
                        <input
                            className="xl:w-1/2 md:w-full w-[85%] py-1 xl:ml-2 mt-6 xl:mt-0 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                            type="text"
                            placeholder="Last Name"
                            minLength={4}
                            value={lastName}
                            onChange={handleLastName}
                            required
                        />
                    </div> */}
                    <div className="flex xl:flex-row flex-col justify-between items-center md:w-3/5 w-full">
                        <div className='w-full ml-[15%] md:ml-0 flex flex-col justify-center'>
                        <input
                            className="xl:w-[100%] md:w-full w-[85%] py-1 xl:mr-2 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                            type="text"
                            placeholder="First Name"
                            minLength={2}
                            value={firstName}
                            onChange={handleFirstName}
                            required
                        />
                        {(firstNameError) && <p className="text-red-500 text-xs mt-0 ">{firstNameError}</p>}
                        {/* ml-6 px-1 mr-auto md:ml-[146px] xl:ml-[252px] */}
                        </div>
                        <div className='w-full ml-[15%] md:ml-0 flex flex-col justify-center'>
                        <input
                            className="xl:w-[100%] md:w-full w-[85%] py-1 xl:ml-2 mt-6 xl:mt-0 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                            type="text"
                            placeholder="Last Name"
                            minLength={4}
                            value={lastName}
                            onChange={handleLastName}
                            required
                        />
                        {(lastNameError) && <p className="text-red-500 text-xs mt-0 xl:ml-2">{lastNameError}</p>}
                        {/* ml-6 px-1 mr-auto md:ml-[146px] xl:ml-[252px] */}
                        </div>
                    </div>
                    {/* {(nameError) && <p className="text-red-500 text-xs mt-0 ml-6 px-1 mr-auto md:ml-[146px] xl:ml-[252px]">{nameError}</p>} */}
                    
                    <input
                        className="md:w-3/5 w-[85%] mt-6 py-1 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmail}
                        required
                    />
                  {emailError && <p className="text-start left-0 text-red-500 text-xs mt-0 mr-auto md:ml-[20%] xl:ml-[20%] ml-[7%]">{emailError}</p>}   
                    <input
                        className="md:w-3/5 w-[85%] mt-6 py-1 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        minLength={8}
                        required
                    />
                  {passwordError && <p className="text-start left-0 text-red-500 text-xs mt-0 mr-auto md:ml-[20%] xl:ml-[20%] ml-[7%]">{passwordError}</p>}
                    
                    <input
                        className="md:w-3/5 w-[85%] mt-6 py-1 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                        type="text"
                        placeholder="Phone No."
                        maxLength={10}
                        value={phoneNumber}
                        onChange={handleChangePhoneNumber}
                        required
                    />
                  {phoneNumberError && <p className="text-start left-0 text-red-500 text-xs mt-0 mr-auto md:ml-[20%] xl:ml-[20%] ml-[7%]">{phoneNumberError}</p>}
                    
                    <a className="mt-4 md:text-right w-3/5 text-center text-sm font-normal hover:text-orange-600" href="#">Already have an account?</a>
                    <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded" onClick={handleRegisterClick}>
                        Continue
                    </button>
                </div>
            </form>
        </>
    );
};
export default SignUp;