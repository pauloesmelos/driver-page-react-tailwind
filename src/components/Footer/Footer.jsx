import React from 'react';
import LogoDark from '../../assets/logo_dark.png';

const Footer = () => {
  return (
    <footer className="bg-black flex justify-between items-center w-full px-5 h-[70px] mt-16">
        <div>
            <img src={LogoDark} alt="Logo Driver" title="Logo Driver" />
        </div>
        <div>
            <button className="text-white bg-indigo-700 p-3 rounded-md font-bold hover:bg-white
            hover:text-indigo-700 duration-300">
                Share A Car
            </button>
        </div>
    </footer>
  )
}

export default Footer;