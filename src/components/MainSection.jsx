import LeftSide from "./LeftSide"
import MainContainer from "./MainContainer"

const MainSection = () => {
  return (
    <>
        <div className="container bg-[#d8d8d8] min-h-screen max-w-full px-4 py-12 lg:py-12 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-4">
            <LeftSide/>
            <MainContainer/>
        </div>
    </>
  )
}

export default MainSection