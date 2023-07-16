import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const Search = () => {
  const [jobItem, setJobItem] = useState("");
  const [companyItem, setCompanyItem] = useState("");
  const [locationItem, setLocationItem] = useState("");

  const jobItemDelete = (value) => {
    switch (value) {
      case "jobItem":
        setJobItem("");
        break;
      case "companyItem":
        setCompanyItem("");
        break;
      case "locationItem":
        setLocationItem("");
        break;
      default:

    }
    
  };

  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              onChange={(e) => setJobItem(e.target.value)}
              type="text"
              value={jobItem}
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here...."
            />
            <AiOutlineCloseCircle
              onClick={() => jobItemDelete("jobItem")}
              className={`text-[30px] ${
                jobItem ? "text-textColor" : "text-lightColor"
              } hover:text-textColor icon`}
            />
          </div>
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              onChange={(e) => setCompanyItem(e.target.value)}
              type="text"
              value={companyItem}
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by company...."
            />
            <AiOutlineCloseCircle
              onClick={() => jobItemDelete("companyItem")}
              className={`text-[30px] ${
                companyItem ? "text-textColor" : "text-lightColor"
              } hover:text-textColor icon`}
            />
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              onChange={(e) => setLocationItem(e.target.value)}
              type="text"
              value={locationItem}
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by location...."
            />
            <AiOutlineCloseCircle
              onClick={() => jobItemDelete("locationItem")}
              className={`text-[30px] ${
                locationItem ? "text-textColor" : "text-lightColor"
              } hover:text-textColor icon`}
            />
          </div>
          <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Start with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
        <span className="text-[#a1a1a1]">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
