import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const navigate=useNavigate();
  if (!localStorage.length){
    return (
      <div className="flex w-screen h-screen bg-emerald-100 justify-center items-center">
        <div className='md:w-2/3 md:h-6/7 w-screen h-screen bg-green-300 md:rounded-2xl relative overflow-hidden md:animate-scale'>
          <Header />
          <LoginForm />
        </div>
      </div>
    )
  }else{
    useEffect(()=>{
      navigate('/todos');
    },[]);
  }
}

export default Login