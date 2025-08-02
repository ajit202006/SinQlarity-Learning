import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const email_ref = useRef();
    const create_ref = useRef();

    function validateUser() {
        let flag = false
        if (email_ref.current.value.length < 5) {
            alert("Email should have more than 5 characters");
        } else if (create_ref.current.value.length < 8) {
            alert("Password should be at least 8 characters long");
        } else {
            flag = true;
        }
        return flag;
    }
    function clearForm() {
        email_ref.current.value = null;
        create_ref.current.value = null;
    }
    async function submitHandler(event) {
        event.preventDefault();
        if (!validateUser()) {
            return;
        };
        let inputData = { "email": email_ref.current.value, "password": create_ref.current.value };
        const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            body: JSON.stringify(inputData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const loginInfo = await response.json();
        if (loginInfo.status==="Success"){
            alert("Login sucessfull.");
        }else{
            alert(`${loginInfo.message} ${loginInfo.advice}`);
        }
        clearForm();
    }


    return (
        <form className="flex flex-col items-center w-screen h-screen relative overflow-hidden justify-center gap-4 bg-green-300 md:w-3/5 md:h-3/4 md:rounded-2xl text-green-600 
        *:w-2/3 *:grid [&_p]:text-[18px] [&_p]:flex [&_p]:items-center [&_p]:gap-3 [&_p]:ml-2
        [&_input]:bg-green-600 [&_input]:not-last:w-full [&_input]:text-white [&_input]:border-2 [&_input]:border-green-600 [&_input]:outline-none [&_input]:rounded-full [&_input]:focus:bg-green-100  [&_input]:focus:text-green-500 [&_input]:h-10 [&_input]:p-2"
            onKeyDown={(e) => { e.key === "Enter" && submitHandler(e) }} onSubmit={(e) => submitHandler(e)}>
            <h1 className="min-w-full text-center absolute top-10 h-auto text-4xl font-bold">Login</h1>
            <label htmlFor="e-mail">
                <p><IoMail />E-Mail:</p>
                <input type="email" id="e-mail" placeholder="Enter your e-mail.." ref={email_ref} autoComplete="off" />
            </label>
            <label htmlFor="create-pass" className="relative">
                <p><FaLock />Password :</p>
                <input type={showPassword ? "text" : "password"} id="create-pass" placeholder="Enter your password.." ref={create_ref} />
                <div className="absolute right-2 bottom-1/5">
                    {showPassword ? <FaRegEye onClick={() => setShowPassword(!showPassword)} /> : <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} />}
                </div>
            </label>
            <label htmlFor="submit">
                <input className="w-1/3 mt-6 m-auto" type="submit" id="submit" />
            </label>
            <p>Don't have an account ?<Link className="underline hover:text-green-800" to={'/register'} >Register now</Link></p>

        </form>
    )
}

export default LoginForm;
