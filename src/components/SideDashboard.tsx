import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import { TbGiftCardFilled } from "react-icons/tb";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { GrTrain } from "react-icons/gr";
import { GiRailRoad } from "react-icons/gi";
import { HiOutlineLogin } from "react-icons/hi";

import { Link } from "react-router-dom";
import beepcard from "../assets/beepcard.png";

const AdminDashboard = () => {
  const menus = [
    {
      name: "Home",
      link: "/admin/home",
      icon: IoHome,
      margin: true,
    },
    {
      name: "Admin Management",
      link: "/admin/admin-management",
      icon: RiAdminFill,
      margin: true,
    },
    {
      name: "Beep Card Management",
      link: "/admin/beep-card-management",
      icon: TbGiftCardFilled,
      margin: true,
    },
    {
      name: "Load Beep Card",
      link: "/admin/beep-load",
      icon: RiContactsBookUploadFill,
      margin: true,
    },
    {
      name: "Station List",
      link: "/admin/station-list",
      icon: GrTrain,
      margin: true,
    },
    {
      name: "Station Management",
      link: "/admin/station-management",
      icon: GiRailRoad,
      margin: true,
    },
    {
      name: "Log out",
      link: "/XXX",
      icon: HiOutlineLogin,
      margin: true,
    },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-0">
      {" "}
      {/*default is 6 - danie*/}
      <div
        className={`bg-[#222C55] min-h-screen ${
          open ? "w-72" : "w-17"
        } duration-500
       text-gray-100 px-4`}
      >
        <div className="py-4 flex justify-end">
          <HiMenuAlt2
            size={26}
            className="cursor-pointer"
            color="#ffffff"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="mt-4 flex flex-col gap-5 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"}
               group flex items-center text-lg gap-3.5 font-medium p-2.5 hover:bg-red-900 rounded-md`}
            >
              {/*hover color can be rose-800 or red-900*/}
              <div>{React.createElement(menu?.icon, { size: "26" })} </div>
              <h2
                style={{
                  transitionDelay: `${i + 3}100}ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"}
                absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 
                overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover: duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-gray-700"></div>
    </section>
  );
};

export default AdminDashboard;
