import React, { useEffect, useRef } from "react";
import "./part1.css";
import { GallaryUpward, DownToUp3 } from "../../gsap/gsap";
import { CatsData } from "../data";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Part1() {
  const spinner = useRef(null);
  const OneToUP = useRef(null);
  GallaryUpward(spinner, 2);
  // DownToUp3(OneToUP, OneToUP);


  return (
    <>
      <div id="part1" ref={spinner}>
        <h1>SeeCats</h1>
        {CatsData.map((catD, index) => (
          // <Link to={`/${catD.Name}`} id="catspro" draggable="false">
          <div
            id="catsInfo"
            className={"catinfo" + catD.Name}
            onClick={() => (window.location.href = `/${catD.Name}`)}
            key={index}
            ref={OneToUP}
          >
            <span id="catimg">
              <img src={catD.imgUrl} alt="" />
            </span>
            <span id="catdetails">
              <h2>{catD.Name}</h2>
              <h5>
                Hello I am {catD.Name} & my age is {catD.Age} old Click and see
                my profile
              </h5>
              <span id="ByThisc">
                <button>Buy</button>
              </span>
            </span>
          </div>
          // </Link>
        ))}
      </div>
    </>
  );
}
export default Part1;
