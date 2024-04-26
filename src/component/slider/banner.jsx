import "./banner.css";
import React, { useRef } from "react";
import { DYOYO, ScaleDown, DownToUp } from "../../gsap/gsap";

function Banner() {
  const imageUrl =
    "https://ik.imagekit.io/z13qbehday/catfin.png?updatedAt=1713792324420";
  const yoyoDS = useRef(null);
  const scaldown=useRef(null);
  const downToUp=useRef(null);
  DYOYO([yoyoDS]);
  ScaleDown(scaldown,2);
  DownToUp([downToUp]);
  return (
    <div id="banner" ref={scaldown}>
      <img src={imageUrl} alt="" />
      <div id="content">
        <span id="banTitle">
          <h1 ref={downToUp}>hello Kity</h1>
        </span>
        <span id="scrolDown" ref={yoyoDS}>
          <h3>scroll</h3>
          <i class="fa-solid fa-chevron-down"></i>
        </span>
      </div>
    </div>
  );
}
export default Banner;
