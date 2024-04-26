import "./part3.css";
import React,{useRef} from "react";
import { Spinner, DownToUp4 } from "../../gsap/gsap";

function Part3() {
    const spinner=useRef(null);
    const catfood=useRef(null);
    Spinner([spinner])
    DownToUp4(catfood, catfood);
  return (
    <>
      <div id="part3">
        <span id="Holdcont">
          <img
            src="https://ik.imagekit.io/z13qbehday/catsticker.png?updatedAt=1714050751538"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/z13qbehday/catfood.png?updatedAt=1713795834338"
            alt=""
            className="catFOOD"
            ref={catfood}
          />
        </span>
        <span id="check" ref={spinner}>
          <img
            src="https://ik.imagekit.io/z13qbehday/fs2.png?updatedAt=1714055342798"
            alt=""
            className="fishscal1"
          />
          <img
            src="https://ik.imagekit.io/z13qbehday/fs2.png?updatedAt=1714055342798"
            alt=""
            className="fishscal2"
          />
        </span>
      </div>
      <div id="footer">
        <span id="sicon">
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://github.com/taxonex">
            <i class="fa-brands fa-github"></i>
          </a>
        </span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vel illo ullam, cumque consequatur, expedita nulla, odio at vero nihil reiciendis numquam quos asperiores maiores qui in ipsum cum est!</p>
        <span id="linkss">
            <a href="">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </span>
      </div>
    </>
  );
}
export default Part3;
