import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import handIcon from "../../assets/icons/hand.png";
import endpointIcon from "../../assets/icons/endpoints.png";
import homeIcon from "../../assets/icons/home.png";
import observabilityIcon from "../../assets/icons/observability.png";
import settingsIcon from "../../assets/icons/setting.png";
import arrow from "../../assets/icons/arrow.png";
import menu from "../../assets/icons/menu.png";
import shape from "../../assets/images/shape.png";


const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const location = useLocation();

  return (
    <div>
      {/* Separate handle for opening the off-canvas menu */}
      <div className="md:hidden fixed top-4 right-2 z-50">
        <button onClick={handleToggle} className="text-white">
          <img src={menu} width={20} alt="menu icon" />
        </button>
      </div>

      {/* Off-canvas menu */}
      <div
        className={`sidebar fixed top-0 left-0 h-full z-40 transition-transform transform w-80  ${toggle ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex justify-between items-center p-4 mt-6">
          <div className="flex flex-col ms-8">
            <div className="flex items-center">
              <span className="text-white opacity-60">Hello</span>
              <img src={handIcon} alt="hand icon" className="mr-1" />
            </div>
            <span className="text-white text-xl font-semibold -mt-1.5">there</span>
          </div>
          <button onClick={handleToggle} className="text-white">
            <img src={arrow} alt="close icon" />
          </button>
        </div>
        <hr className="my-4 " />
        <div className="flex flex-col gap-2">
          <Link to="/home" className="flex items-center menu-item p-1">
            <img src={homeIcon} alt="home icon" className="w-11 mr-2" />
            <span className="font-semibold text-white opacity-90">Home</span>
          </Link>

          <div className="flex flex-col cursor-pointer w-full">
            <div
              className={`flex items-center menu-item p-1 ${location.pathname.includes('/endpoints') ? 'active' : ''}`}
              onClick={handleDropdownToggle}
            >
              <img src={endpointIcon} alt="endpoints icon" className="w-11 mr-2" />
              <span className="font-semibold text-white opacity-90">Endpoints</span>
            </div>

            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${dropdownOpen ? "max-h-96" : "max-h-0"}`}>
              <div className="ml-6 border-l relative">
                {["redis", "amazon-s3", "mc-router", "endpoint-x"].map(endpoint => (
                  <div key={endpoint} className="flex items-center">
                    <span className="border-b w-3"></span>
                    <Link
                      to={`/endpoints/${endpoint}`}
                      className={`flex ms-1 px-3 py-2 text-md font-medium text-white opacity-40 cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-100 w-full ${location.pathname === `/endpoints/${endpoint}` ? 'opacity-100 bg-opacity-10 bg-white' : ''}`}
                    >
                      <span>{endpoint.replace("-", " ")}</span>
                    </Link>
                  </div>
                ))}
                <span className="w-4 h-5 hide absolute -left-2" style={{ bottom: "-0.5px" }}></span>
              </div>
            </div>
          </div>

          <Link to="/observability" className="flex items-center menu-item p-1">
            <img src={observabilityIcon} alt="observability icon" className="w-11 mr-2" />
            <span className="font-semibold text-white opacity-90">Observability</span>
          </Link>

          <Link to="/settings" className="flex items-center menu-item p-1">
            <img src={settingsIcon} alt="settings icon" className="w-11 mr-2" />
            <span className="font-semibold text-white opacity-90">Settings</span>
          </Link>
        </div>
      </div>

      {/* Main sidebar for larger screens */}
      <div
        className={`sidebar hidden md:flex min-h-screen px-8 pt-14 flex-col ${toggle ? "w-8 px-0 bg-white" : "w-96"} duration-300`}
      >
        <div className="absolute left-0 cursor-pointer" onClick={handleToggle} style={{ top: "44%" }}>
          <img src={shape} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div className={`flex ms-16 flex-col ${toggle ? "hidden" : ""}`}>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-white opacity-60">Hello</span>
                <img src={handIcon} alt="hand icon" className="mr-1" />
              </div>
              <span className="text-white text-xl font-semibold -mt-1.5">there</span>
            </div>
          </div>
          <div className={`cursor-pointer -mr-3 ${toggle ? 'hidden' : ''}`} onClick={handleToggle}>
            <img src={arrow} alt="" />
          </div>
        </div>

        <hr className="my-10" />

        <div className={`flex flex-col gap-2 ${toggle ? "hidden" : ""}`}>
          <Link to="/" className={` flex items-center menu-item p-1 ${location.pathname === '/' ? 'active' : ''} `}>
            <img src={homeIcon} alt="home icon" className="w-11 mr-2" />
            <span className="font-semibold text-white opacity-90">Home</span>
          </Link>
          <div className="flex flex-col cursor-pointer w-full">
            <div
              className={`flex items-center menu-item p-1 ${location.pathname.includes('/endpoints') ? 'active' : ''}`}
              onClick={handleDropdownToggle}
            >
              <img src={endpointIcon} alt="endpoints icon" className="w-11 mr-2" />
              <span className="font-semibold text-white opacity-90">Endpoints</span>
            </div>

            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out focus:bg-black ${dropdownOpen ? "max-h-96" : "max-h-0"}`}>
              <div className="ml-6 border-l relative">
                {["redis", "amazon-s3", "mc-router", "endpoint-x"].map(endpoint => (
                  <div key={endpoint} className="flex items-center">
                    <span className="border-b w-3"></span>
                    <Link
                      to={`/endpoints/${endpoint}`}
                      className={`flex ms-1 px-3 py-2 text-md font-medium text-white opacity-40 cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-100 w-full ${location.pathname === `/endpoints/${endpoint}` ? 'active-sub-menu' : ''}`}
                    >
                      <span>{endpoint.replace("-", " ")}</span>
                    </Link>
                  </div>
                ))}
                <span className="w-4 h-5 hide absolute -left-2" style={{ bottom: "-0.5px" }}></span>
              </div>
            </div>
          </div>
          <Link to="/observability" className={` flex items-center menu-item p-1 ${location.pathname === '/observability' ? 'active' : ''} `}>
            <img src={observabilityIcon} alt="observability icon" className="w-11 mr-2" />
            <span className="font-semibold text-white opacity-90">Observability</span>
          </Link>
          <Link to="/settings" className={` flex items-center menu-item p-1 ${location.pathname === '/settings' ? 'active' : ''} `}>
            <img src={settingsIcon} alt="settings icon" className="w-11 mr-2" />
            <span className="font-semibold text-white opacity-90">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
