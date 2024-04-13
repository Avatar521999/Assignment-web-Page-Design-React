const FeaturedCourse = () => {
  return (
    <div className="bg-[#f5f5f5] border-2 border-[#f5f5f5] shadow-md flex justify-center items-center rounded-md relative overflow-hidden">
      <div className="flex flex-col w-10/12 pt-6">

        <p className="text-sm font-normal pb-6">FEATURED COURSE</p>

        <div>
          <h1 className="font-bold text-lg">Logic</h1>
          <p className="py-2 text-gray-500 text-md font-medium w-9/12">
            Stetch your analytic muscles with truth-tellers, liars, logic,
            robots, and more!
          </p>
        </div>

        {/* right side image */}
        <img
          src="/images/photo for website.png"
          alt="featured component image"
          className="absolute max-md:h-5/12 max-md:w-5/12 max-md:top-1 max-md:-right-16 md:h-6/12 md:w-6/12 lg:h-8/12 max-lg:h-7/12 max-lg:w-7/12 lg:w-8/12 lg:top-5 max-lg:top-2 -right-14"
        />

        <button className="my-5 z-10 py-2 px-3 font-bold border border-[#d8d8d8] rounded-md shadow-md">
          Visit course
        </button>
        
      </div>
    </div>
  );
};

export default FeaturedCourse;
