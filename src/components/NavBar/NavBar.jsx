import React from 'react';
import Logo from '../../assets/logo.png';
import 
{ AiOutlineSearch, 
    AiOutlineMenu, 
    AiOutlineClose, 
    AiOutlineUser } from 'react-icons/ai';

const NavBar = () => {
  const styleContainerMobile = "fixed h-screen w-full top-0 left-0 bg-white z-50";
  const styleListMobile = "fixed bg-white w-full h-screen z-20 flex flex-col justify-center items-center"
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(state => !state);
  }

  return (
    <header className={`w-full h-[70px] p-3 max-w-[1200px] mx-auto ${open ? styleContainerMobile : ""}`}>
        <nav className="flex justify-between">
            <img src={Logo} alt="logo" title="logo" />
            { 
                open ? 
                <AiOutlineClose 
                onClick={handleClick} 
                className="text-3xl cursor-pointer absolute right-0 z-[100] hover:text-[#593cfb]" /> : 
                <AiOutlineMenu 
                onClick={handleClick} 
                className="text-3xl cursor-pointer absolute right-0 hover:text-[#593cfb] sm:hidden" />
            }
            <ul className={`left-0 top-0 duration-500 ${open ? styleListMobile : "fixed ml-[-100%]"}`}>
                <li className="px-2 py-5">
                    <a className="text-4xl font-bold hover:text-[#593cfb]" href="#">Learn More</a>
                </li>
                <li className="px-2 py-5">
                    <a className="text-4xl font-bold hover:text-[#593cfb]" href="#">Log in</a>
                </li>
                <li className="px-2 py-5">
                    <a className="text-4xl font-bold hover:text-[#593cfb]" href="#">Sign up</a>
                </li>
                <li className="px-2 py-5">
                    <AiOutlineSearch className="text-4xl hover:text-[#593cfb] cursor-pointer" />
                </li>
                <li className="px-2 py-5">
                    <AiOutlineUser className="text-4xl hover:text-[#593cfb] cursor-pointer" />
                </li>
            </ul>
            <ul className="hidden sm:flex sm:gap-8 sm:items-center text-lg font-bold duration-300">
                <li>
                    <a className="hover:text-[#593cfb] duration-300" href="#">Learn More</a>
                </li>
                <li>
                    <a className="hover:text-[#593cfb] duration-300" href="#">Log in</a>
                </li>
                <li>
                    <a className="hover:text-[#593cfb] duration-300" href="#">Sign up</a>
                </li>
                <li>
                    <AiOutlineSearch 
                    className="text-2xl hover:text-[#593cfb] cursor-pointer duration-500" />
                </li>
                <li>
                    <AiOutlineUser 
                    className="text-2xl hover:text-[#593cfb] cursor-pointer duration-500" />
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar;