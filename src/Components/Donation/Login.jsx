import React,{useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleLoginClick = (e) => {
        let valid = true;
        e.preventDefault();

        //Check Email
        if (!validateEmail(email)) {
            setEmailError('Enter valid Email.');
            valid = false;
        } else {
            setEmailError('');
        }
        // Check Password
        if (!validatePassword(password)) {
            setPasswordError('Enter valid Password.');
            valid = false;
        } else {
            setPasswordError('');
        }
        if (valid) {
            console.log("Successfully created an account...")
        }
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        // e.target.setCustomValidity('');
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        // e.target.setCustomValidity('');
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
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="md:text-5xl text-3xl font-bold text-black mt-20 mb-4">Log into Account</h1>
            <br />
            <input
                className="xl:w-[50%] md:w-2/3 w-[85%] mt-6 py-1 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                required
            />
            {emailError && <p className="text-start left-0 text-red-500 text-xs mt-0 mr-auto xl:ml-[25%] md:ml-[17%] ml-[8%]">{emailError}</p>}
            <input
                className="xl:w-[50%] md:w-2/3 w-[85%] mt-6 py-1 border-b-[1px] font-semibold border-gray-600 placeholder-gray-600 outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                minLength={8}
                required
            />
            {passwordError && <p className="text-start left-0 text-red-500 text-xs mt-0 mr-auto xl:ml-[25%] md:ml-[17%] ml-[8%]">{passwordError}</p>}
            <a className="mt-4 md:text-right w-3/5 text-center md:text-xs text-sm hover:text-orange-600" href="#">Create a new account?</a>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded" onClick={handleLoginClick}>
                Continue
            </button>
        </div>
    );
};
export default Login;