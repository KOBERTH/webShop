import { useState } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo-black.webp";
import Input from "../components/Inputs/Input";
import btnStyles from "../components/Theme/button";
import { authUser } from "../api/Post";

export default function Auth () {

  const [login, setLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem('gmail') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    
    const userData = {
      email: email,
      password: password
    };
  
    const data = await authUser(login, userData);
    localStorage.setItem('email', data.user);
    navigate('/');
  };
  

  return (
    <div className="h-full p-4 flex flex-col items-center justify-center gap-8 relative">
      <button className={`${btnStyles.primary} absolute left-2 top-2`} onClick={() => navigate(-1)}>
        <BsArrowBarLeft size={20} />
      </button>
      
      <div className="flex flex-col gap-4">
        <img className="w-full max-w-[400px]" src={logo} alt="logo" />
        <h2>{login ? 'Log in' : 'Register'} your account</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input title="Gmail" name="gmail" type="email" />
          <Input title="Password" name="password" type="password" />
          <button type="submit" className={`${btnStyles.primary} w-full`}>
            {login ? 'Login' : 'Register'}
          </button>
        </form>
        {
          login &&
          <Link to={''}>Forgot pasword?</Link>
        }
      </div>
      <div className="flex items-center gap-4">
        <p>You do not have an account?</p>
        <button className="bg-transparent border border-indigo-600" onClick={() => setLogin(!login)}>{login ? 'Register' : 'Login'}</button>
      </div>
    </div>
  )
}
