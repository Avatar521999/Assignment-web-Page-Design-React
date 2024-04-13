import { reports } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from '@fortawesome/free-solid-svg-icons'

const Report = () => {
  return (
    <div className="flex flex-col gap-4 pt-3">
      {reports.map((report) => (
        <div
          key={report.id}
          className="pt-6 border rounded-lg bg-[#f5f5f5] px-4 py-6"
        >
          <div className="flex gap-x-4 items-center">
            {/* <i className="fa-solid fa-earth-americas text-blue-600 text-4xl"></i> */}
            <FontAwesomeIcon icon={faEarth} className="text-blue-600 text-4xl"/>
            <p className="text-sm font-normal">Reports</p>
          </div>
          <p className="pt-3 text-sm font-normal">{report.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Report;
