const Calender = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] h-36 rounded-md shadow-sm border border-[#e6e6e6] flex justify-center items-center">
        <div className="flex flex-col w-10/12">
          <p className="text-md font-semibold">NOVEMBER 2024</p>
          <div className="ml-2 flex gap-x-4 max-md:gap-x-8 gap-y-2 flex-wrap text-md mt-2">
            <p className="font-bold text-gray-400">20</p>
            <p className="font-bold text-gray-400">21</p>
            <p className="font-bold text-gray-400">22</p>
            <p className="font-bold text-gray-400">23</p>
            <p className="font-bold">24</p>
            <p className="font-bold">25</p>
            <p className="font-bold">26</p>
            <p className="font-bold">27</p>
            <p className="font-bold">28</p>
            <p className="font-bold">29</p>
            <p className="-translate-x-2 -translate-y-1  font-bold border-2 h-8 w-8 border-orange-500 rounded-full flex items-center justify-center">30</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calender;
