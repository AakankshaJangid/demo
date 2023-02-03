import React from "react";
import { FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white text-[#584a4abd] w-full flex justify-between items-center align-middle ">
      <h1 className="w-[142px] h-[54px] text-[36px] leading-[46px] font-bold font-poppins mt-[18px] pl-[67px]">
        LOGO.
      </h1>
      <div className="w-[320px] h-[48px] flex gap-[16px] items-center justify-center px-[12px] border-[3px] text-center rounded-sm mt-[24px] mr-[80px]">
        <span className="pt-[5px] ">
          <FaUserFriends />
        </span>
        username@resoulteai.in
      </div>
    </div>
  );
};

export default Navbar;
