import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className="rounded-md bg-[#e7e7e7] border-2 pl-4 w-3/12 max-md:w-11/12 flex gap-x-4 items-center">
      {/* <div className="text-black h-6 w-6 cursor-pointer">
        <img
          src="/logos/searchbar.png"
          alt="logo"
          className="w-full"
        />
      </div> */}
      {/* <i className="fa-solid fa-magnifying-glass text-black text-xl cursor-pointer"></i> */}
      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black text-xl cursor-pointer' />
      <input
        type="search"
        name="search"
        id="search"
        className="py-2 w-full bg-[#e7e7e7]  focus:outline-none text-slate-700 font-extralight"
      />
    </div>
  );
};

export default Search;
