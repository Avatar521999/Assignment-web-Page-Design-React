import Calender from "./Calender";
import FeaturedCourse from "./FeaturedCourse";

const LeftSide = () => {
  return (
    <>
      <div className="col-start-2 col-span-3">
        <div className="lg:space-y-6 flex flex-col lg:space-x-6 space-y-6 items-start">
          <div className="flex gap-1 items-center text-[#818181]">
            <i className="fa-solid fa-chevron-left text-[0.8rem] mt-1"></i>
            <a href="#" className="text-lg font-medium">
              Back
            </a>
          </div>
          <Calender />
          <FeaturedCourse />
        </div>
      </div>
    </>
  );
};

export default LeftSide;
