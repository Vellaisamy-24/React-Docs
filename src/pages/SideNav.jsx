import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
const SideNav = ({ isNav }) => {
  const nav = [
    {
      id: 1,
      name: "Intro",
      link: "/",
    },
  ];
  const hooks = [
    {
      id: 1,
      name: "useState",
      link: "/useState",
    },
    {
      id: 2,
      name: "useEffect",
      link: "/useEffect",
    },
    {
      id: 3,
      name: "useContext",
      link: "/useContext",
    },
  ];
  const [hook, setHook] = useState(false);
  return (
    // <div className=" flex flex-col items-center ">
    //   <h1 className="text-light py-2  text-xl">Get Started</h1>
    //   <div className="flex flex-col h-screen justify-between gap-3">
    //     {nav.map((data, index) => (
    //       <Link to={data.link}
    //         key={index}
    //         className="hover:bg-gray-500  px-10 hover:rounded-lg py-3"
    //       >
    //         {data.name}
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div className=" flex flex-col items-center px-5 h-full   pb-20 ">
      <h1 className="text-light py-2  text-xl">Get Started</h1>
      <div className="flex flex-col pb-2 gap-3">
        {nav.map((data, index) => (
          <Link
            to={data.link}
            key={index}
            onClick={isNav}
            className="hover:bg-gray-500  flex-nowrap px-10 hover:rounded-lg py-3"
          >
            {data.name}
          </Link>
        ))}
      </div>
      <button className="cursor-pointer" onClick={(e) => setHook(!hook)}>Hooks</button>
      {hook && (
        <div className="flex flex-col  ">
          {hooks.map((data, index) => (
            <Link
              to={data.link}
              key={index}
              onClick={isNav}
              className="hover:bg-gray-500  flex-nowrap px-10 hover:rounded-lg py-3"
            >
              {data.name}
            </Link>
          ))}
        </div>
      )}

      <div></div>
    </div>
  );
};

export default SideNav;
