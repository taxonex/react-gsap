import React, { useState, useRef } from "react";
import "./navbar.css";
import { DownFall, Swapl, Swapr, Zoomin } from "../../gsap/gsap";
import { CatsData } from "../data";

function Navbar() {
  const [searchOn, setsearchOn] = useState(false);
  const [searchValue, setSearchvalue] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const logo = useRef(null);
  const search = useRef(null);

  const user = useRef(null);
  const hider = useRef(null);
  const manuhome = useRef(null);
  const manuabour = useRef(null);
  const manucontact = useRef(null);

  const searchOpen = () => {
    setsearchOn(true);
  };
  const searchClose = () => {
    setsearchOn(false);
    setSearchTerm("");
    setFilteredData([]);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = CatsData.filter((item) =>
        item.Name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const navSecArr = [logo, search, user, hider];
  Zoomin([manuabour]);
  Swapl([manucontact]);
  Swapr([manuhome]);
  DownFall(navSecArr);
  return (
    <div id="navbar-main">
      <div id="nav-firstprt">
        <span id="logo-cont" ref={logo}>
          {/* <img src="" alt="" /> */}
          <h1>WebX</h1>
        </span>
        <div id="navright">
          <span id="search" className={searchOn ? "active" : ""}>
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <i
              class="fa-solid fa-magnifying-glass searchicon"
              onClick={searchOpen}
              ref={search}
            ></i>
            <i class="fa-solid fa-xmark closeicon" onClick={searchClose}></i>
            <span id="datafetchSearch">
              <ul>
                {filteredData.map((item) => (
                  <a href={`/${item.Name}`}>
                    <li key={item.Name}>
                      <img src={item.imgUrl} alt="" />
                      <p>{item.Name}...</p>
                    </li>
                  </a>
                ))}
              </ul>
            </span>
          </span>

          <span id="user" ref={user}>
            <i class="fa-solid fa-user"></i>
          </span>
          <span id="nav-open" ref={hider}>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </div>
      </div>
      <div id="nav-secontprt">
        <span id="manu-link">
          <a href="" ref={manuhome}>
            Home
          </a>
          <a href="https://myportfolio-rohit.vercel.app" ref={manuabour}>
            About
          </a>
          <a href="/contact" ref={manucontact}>
            Contact
          </a>
        </span>
      </div>
    </div>
  );
}
export default Navbar;
