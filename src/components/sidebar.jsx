import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { BsFillMenuAppFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const SideNavbar = () => {
  const [activeItem, setActiveItem] = useState(false);
  const [active, setActive] = useState(0);

  const sidebarInfo = [
    {
      id: 0,
      icon: <FaUserFriends />,
      name: "Add Student",
    },
    {
      id: 1,
      icon: <BsFillMenuAppFill />,
      name: "Manage Students",
    },
    {
      id: 2,
      icon: <FiLogOut />,
      name: "Logout",
    },
  ];

  return (
    <div className="flex gap-[13px]">
      <div className="bg-white text-[#00000099] text-center w-[459px] h-[100vh] pt-[123px] md:w-1/2 lg:w-1/5">
        <div className="flex flex-col gap-[20px]">
          {sidebarInfo.length > 0 &&
            sidebarInfo.map((data) => (
              <ul className="flex flex-col gap-[8px] list-none pl-[8px] text-[16px]  leading-[21px] font-normal">
                <li
                  key={data.id}
                  className={`w-[240px] h-[48px] py-[12px] px-[24px] flex gap-[26px] cursor-pointer rounded-[5px] ${
                    ( active === data.id && setActiveItem )
                      ? "bg-orange-600 text-white font-bold"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveItem(true);
                    setActive(data.id);
                  }}
                >
                  <span className="pt-[4px]">{data.icon}</span>
                  {data.name}
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SideNavbar;
