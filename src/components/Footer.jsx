import { MdLocationPin } from "react-icons/md";
import {FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="flex-end">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between items-center border-4 border-red-300">
            <div>
              <p className='text-2xl capitalize font-semibold text-pink-500'>
                <span className="mr-1 text-accent-400">skin</span> hub
              </p>
            </div>
            <a href="#home" className="text-lg text-accent-400 capitalize font-medium">Home</a>
          </div>
          <div className="flex justify-between items-center border-4 mt-2">
              <p className="max-w-xs text-lg text-accent-400 capitalize font-medium whitespace-nowrap">
                Your one stop shop for glowy skin
              </p>
              <button className=" text-lg text-accent-400 capitalize font-medium inline-flex justify-center items-center">products<FaChevronDown className="ml-2" /></button>
              </div>
          <div className="flex justify-between items-center border-4 border-green-600 mt-2">
          <p className="max-w-xs mt-4 text-md text-accent-400 capitalize font-light flex items-center">
                <MdLocationPin size={25} className="mr-1" /> <span className='capitalize'>jay avenue, lagos nigeria</span>
              </p>
              <a href="#home" className=" text-lg text-accent-400 capitalize font-medium">contacts</a>
          </div>
          <hr className="my-6 border-black sm:mx-auto  lg:my-8" />
          <p className="mt-8 text-lg text-accent-400 capitalize">
            © <span className="mr-1">skin</span> <span className="text-pink-500">hub</span> 2024
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
