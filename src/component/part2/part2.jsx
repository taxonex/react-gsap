import "./part2.css";
import {Part2Data} from "../data"
import React,{useRef} from "react";
import { DownToUp2 } from "../../gsap/gsap";

function Part2(){
  const downTOup=useRef(null);
  const part2=useRef(null);
    
    DownToUp2(part2, downTOup);
    return (
      <div id="p2main">
        <div id="Part2" ref={part2}>
          {Part2Data.map((Data) => (
            <div id="Part2In" ref={downTOup}>
              <img src={Data.img} alt="" />
              <h4>{Data.detail}</h4>
            </div>
          ))}
        </div>
      </div>
    );
}
export default Part2;
