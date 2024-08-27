import React, { Fragment, useState } from "react";
import Image from "../assets/reactjs.webp";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import SideNav from "./SideNav";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  // const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [nav, setNav] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const sideNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  const navLinks = [
    { name: "Intro", link: "/" },
    { name: "useState", link: "/useState" },
    { name: "useEffect", link: "/useEffect" },
    { name: "useContext", link: "/useContext" },
  ];
  const handleSearch = (e) => {
    // setSearch(e.target.value);
    const value = e.target.value;
    if (value) {
      const filter = navLinks.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestion(filter);
    } else {
      setSuggestion([]);
    }
  };
  const handleSuggestinLink = (link, name) => {
    setQuery(name);
    setSuggestion([]);
    // window.location.href = link;
    navigate(link);
  };
  const handleQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filter = navLinks.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestion(filter);
    } else {
      setSuggestion([]);
    }
    // setQuery(value);
  };
  return (
    <>
      <section className="flex items-center py-4 fixed top-0 z-10 border-b bg-gray-900 border-slate-700 shadow-sm drop-shadow-xl shadow-black/10 ">
        <div className="flex items-center px-4 lg:hidden">
          {!nav && (
            <button onClick={sideNav}>
              <Menu />
            </button>
          )}
          {nav && (
            <button onClick={sideNav}>
              <X className="text-lightGreen" />
            </button>
          )}
        </div>
        <div className="w-1/12 h-auto ">
          <img src={Image} className="rounded-lg lg:w-3/4 w-full " />
        </div>
        <Link to="/" className="cursor-pointer">
          <h1 className="lg:font-semibold font-bold text-xs lg:text-[19px]">
            React Docs
          </h1>
        </Link>
        <div className="flex items-center justify-center flex-col mx-auto">
          <input
            // value={search}
            value={query}
            onChange={(e) => handleQuery(e)}
            className="text-black w-32 sm:w-full p-1 md:p-2 rounded-lg"
            type="text"
          />
          <div className="pr-52 absolute">
            {suggestion.length > 0 && (
              <div className="bg-black/70 text-white w-[200px] h-auto p-5  rounded-lg my-5 absolute ">
                {suggestion.map((data, index) => (
                  <div
                    className="cursor-pointer hover:bg-gray-500 hover:rounded-lg hover:px-1 text-xs  sm:text-[15px] py-1"
                    key={index}
                    onClick={() => handleSuggestinLink(data.link, data.name)}
                  >
                    {data.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {nav && (
        <div className="py-28 lg:hidden flex fixed w-1/2 h-full bg-slate-800">
          <SideNav isNav={closeNav} />
        </div>
      )}
    </>
  );
};

export default Navbar;
