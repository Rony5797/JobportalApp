import level1 from "../../Assets/level4.png";
import level2 from "../../Assets/level2.png";
import level3 from "../../Assets/level3.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[60px] w-[60px] flex items-center justify-center">
              <img src={level1} alt="" className="w-[70%] h-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            we believe in making things better for everyone, even if just by a
            little bit!
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[60px] w-[60px] flex items-center justify-center">
              <img src={level2} alt="" className="w-[70%] h-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            we believe in making things better for everyone, even if just by a
            little bit!
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[60px] w-[60px] flex items-center justify-center">
              <img src={level3} alt="" className="w-[70%] h-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            we believe in making things better for everyone, even if just by a
            little bit!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Value;
