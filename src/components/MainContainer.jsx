import { useState } from "react";
import Report from "./Report";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire} from '@fortawesome/free-solid-svg-icons'

const MainContainer = () => {
  const [explain, setExplain] = useState(false)

  const handleExplain = () => {
    setExplain((prev) => !prev)
  }

//   console.log(explain)

  return (
    <div className="col-start-6 col-span-6">
      <div className=" bg-[#f5f5f5] rounded-sm">
        <div className="flex flex-col justify-start w-8/12 mx-auto pt-8 min-h-screen">
          <p className="tracking-wide text-[10px] font-normal">
            MATH AND LOGIC
          </p>
          <p className="text-sm font-semibold pt-3">Series 1 of 3</p>
          <h1 className="text-2xl font-bold text-gray-900 pt-1 font-sans">
            Who Won the Race?
          </h1>

          <p className="paragraph">
            How much information do you need to find the finish order of a
            three-person race? It turns out,
            <span className="font-semibold"> not much at all.</span>
          </p>

          <div className="mt-4 w-11/12 mx-auto">
            <img
              src="/images/demo_1.jpg"
              alt="demo image 1"
              className="w-full"
            />
          </div>

          <p className="paragraph">
            Suppose that in a race among Amelia, Boris, and Carlos, we only know
            one fact - that Boris finished before Carlos. What are the possible
            orders for the entire race? Keep reading to see some reasoning we
            can use, or jump ahead to todays challenge for a tricker problem.
          </p>

          <p className="paragraph">
            We can start by thinking about a single unknown factor in the
            problem: &#34;Where did Amelia finish?&#34; To see this logic
            demonstrated, use the arrow below the figure:
          </p>

          <div className="mt-4 w-11/12 mx-auto">
            <img
              src="/images/demo_2.jpg"
              alt="demo image 2"
              className="w-full"
            />
          </div>

          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            necessitatibus, veniam pariatur animi unde recusandae earum quidem
            velit laborum debitis inventore totam, facere aliquam distinctio
            eaque magni rerum dolorum aspernatur?
          </p>

          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolores tempora suscipit dicta ratione excepturi?
          </p>

          <p className="paragraph w-10/12 mx-auto border border-gray-400 bg-gray-100 p-2 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            eos!
          </p>

          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            obcaecati dolorem beatae?
          </p>

          <div className="mt-4 w-11/12 mx-auto">
            <img
              src="/images/demo_3.jpg"
              alt="demo image 3"
              className="w-full"
            />
          </div>

          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            maxime velit repudiandae nesciunt.
          </p>

          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            dolores ad, ut et adipisci harum at impedit recusandae illo, nihil,
            quas magni delectus?
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4 font-sans text-center pb-3 border-b border-gray-300">
            Today&apos;s Challenge
          </h2>

          {/* challenge div*/}
          <div className="w-11/12 mx-auto">
            <p className="cp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              est.
            </p>

            <p className="cp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              nostrum rerum, voluptates sit:
            </p>

            <ol className="cp w-10/12 mx-auto border border-gray-400 bg-gray-100 py-3 px-6 mt-4 list-decimal">
              <li className="text-lg font-normal">
                Dara finish before Ameila.
              </li>
              <li className="text-lg font-normal">Boris wasn&apos;t third.</li>
              <li className="text-lg font-normal">
                There were two runners between Amelia and Carlos.
              </li>
            </ol>

            <p className="cp">Who won the race?</p>

            <div className="mt-4 w-11/12 mx-auto">
              <img
                src="/images/demo_4.jpg"
                alt="demo image 4"
                className="w-full"
              />

              <div className="flex gap-4 items-center pt-6">
                <p className="text-lg font-semibold">Difficulty:</p>
                <div className="space-x-2">
                  {/* <i className="fa-solid fa-fire text-yellow-400 text-2xl"></i>
                  <i className="fa-solid fa-fire text-2xl text-gray-400"></i>
                  <i className="fa-solid fa-fire text-2xl text-gray-400"></i>
                  <i className="fa-solid fa-fire text-2xl text-gray-400"></i>
                  <i className="fa-solid fa-fire text-2xl text-gray-400"></i> */}
                  <FontAwesomeIcon icon={faFire} className="text-2xl max-sm:text-lg text-yellow-400 "/>
                  <FontAwesomeIcon icon={faFire} className="text-2xl max-sm:text-lg text-gray-400"/>
                  <FontAwesomeIcon icon={faFire} className="text-2xl max-sm:text-lg text-gray-400"/>
                  <FontAwesomeIcon icon={faFire} className="text-2xl max-sm:text-lg text-gray-400"/>
                  <FontAwesomeIcon icon={faFire} className="text-2xl max-sm:text-lg text-gray-400"/>
                </div>
              </div>

              <ol className="text-md pt-3 space-y-4 font-semibold w-full mx-auto text-gray-400 py-3 pl-4 mt-4">
                <li className="">Amelia</li>
                <li>Boris</li>
                <li className="border-2 border-yellow-300 px-4 py-2 rounded-full -translate-x-4 flex items-center">
                  Carlos
                </li>
                <li>Dara</li>
              </ol>

              <p className="text-md pt-3 font-semibold mx-auto text-gray-400 py-3 pl-4">
                There&apos;s not enough information to determine who won.
              </p>
            </div>

            <p className="text-center text-sm text-gray-400 pt-6 pb-3 cursor-pointer" onClick={handleExplain}>
              view explanation
            </p>
          </div>
        </div>
      </div>

      {/* view explanation block */}
      <div className={`${explain ? "block" : "hidden"}`}>
        <div className="bg-[#cccccc] p-6">
          <h1 className="text-xl font-bold">You viewed the explanation</h1>
        </div>

        <div className="mx-auto w-10/12 pt-6">
          <p className="font-bold text-lg">Reports</p>

          {/* report card start */}
          <Report />
          {/* report card end */}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
