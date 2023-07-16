import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";
import logo6 from "../../Assets/logo6.png";
import logo7 from "../../Assets/logo7.png";
import logo8 from "../../Assets/logo8.png";

const Job = () => {
  const data = [
    {
      id: 1,
      img: logo1,
      title: "Web Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "Now",
      company: "Novac Linus Co.",
      location: "Canada",
    },
    {
      id: 2,
      img: logo2,
      title: "Senior Web Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "4h",
      company: "Novac Linus Co.",
      location: "London",
    },
    {
      id: 3,
      img: logo3,
      title: "MERN Satck Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "1d",
      company: "Novac Linus Co.",
      location: "Newyork",
    },
    {
      id: 4,
      img: logo4,
      title: "Web Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "Now",
      company: "Novac Linus Co.",
      location: "Canada",
    },
    {
      id: 5,
      img: logo5,
      title: "Senior Web Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "4h",
      company: "Novac Linus Co.",
      location: "London",
    },
    {
      id: 6,
      img: logo6,
      title: "MERN Satck Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "1d",
      company: "Novac Linus Co.",
      location: "Newyork",
    },
    {
      id: 5,
      img: logo7,
      title: "Senior Web Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "4d",
      company: "Novac Linus Co.",
      location: "London",
    },
    {
      id: 6,
      img: logo8,
      title: "MERN Satck Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      time: "5d",
      company: "Novac Linus Co.",
      location: "Newyork",
    },
  ];

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {data.map(({ id, img, title, company, location, desc, time }) => {
          return (
            <div key={id} className="group group/item singleJob w-[300px] p-[20px] bg-white rounded-[10px] hover:bg-emerald-500 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                 {time}
                </span>
              </span>

              <h6 className="text-[#ccc]">{location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={img} alt="Company logo" className="w-[15%] h-[15%] rounded" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] mt-[20px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-emerald-700  group-hover/item:text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
