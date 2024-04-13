import Search from "./Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBoltLightning } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <header className="bg-[#f5f5f5] flex flex-wrap max-lg:justify-evenly max-md:flex-col py-1 text-white items-center gap-6 shadow-sm max-lg:pb-6">
      {/* logo and name */}
      <div className="flex gap-4 justify-center items-center py-2 ml-6">
        <div className="h-16 w-16">
          <img src="/logos/logoforwebsite.png" alt="logo" />
        </div>
        <p className="font-semibold text-3xl text-[#313131]">BRILLIANT</p>
      </div>

      {/* navigation link */}
      <ul className="flex gap-x-10 justify-center items-center font-mono text-lg  text-gray-500 px-6 py-2 tracking-[0.2rem]">
        <li>
          <a href="#" className="hover:text-gray-700 font-medium">
            HOME
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700 font-medium">
            COURSES
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700 font-semibold">
            TODAY
          </a>
        </li>
      </ul>

      {/* search field */}
      <Search />
      <div className="flex items-center gap-6">
        {/* go premium button */}
        <div>
          <button className="text-green-600 text-md font-semibold tracking-widest border-2 border-green-600 px-8 py-2 rounded-md hover:bg-green-600 hover:text-white transition duration-500 ease-in-out">
            GO PREMIUM
          </button>
        </div>

        {/* number and icon */}
        <div className="flex justify-center items-center gap-2">
          <p className="text-black text-xl font-bold">0</p>
          {/* <i className="fa-solid fa-bolt-lightning text-gray-300"></i> */}
          <FontAwesomeIcon icon={faBoltLightning} className='text-gray-300 text-xl cursor-pointer' />
        </div>

        {/* hamburger icon */}
        <div>
          {/* <i className="fa-solid fa-bars"></i> */}
          <FontAwesomeIcon icon={faBars} className='text-black text-xl cursor-pointer' />
        </div>
      </div>
    </header>
  );
};

export default Nav;
