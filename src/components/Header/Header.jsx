import { Navbar } from "flowbite-react";
import Logo from '../../assets/Logo.png'
import "../../index.css";
import {useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar fluid rounded className="lg:mx-6 min-sm:mx-6">
      <Navbar.Brand className="cursor-pointer" onClick={() => navigate('/')} >
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">MERN Blog</span>
      </Navbar.Brand>
        <div className="flex md:order-2">
       <button onClick={()=> navigate('/Login')} className="bg-black text-white font-semibold px-2 py-1 mr-2 rounded border hover:text-black hover:bg-white hover:border hover:border-black hover:duration-500">Login</button>
       <button onClick={()=> navigate('/Register')} className="font-semibold border mr-2 border-black px-2 rounded hover:bg-black hover:text-white hover:duration-500">Register</button>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  );
};

export default Header;
