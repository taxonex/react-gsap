import "./profile.css";
import { Link, useParams } from "react-router-dom";
import React, { useState, useRef } from "react";
import { CatsData } from "../data";

function Profile() {
  const CatProNam = useParams();
  const categoryContainerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - categoryContainerRef.current.offsetLeft);
    setScrollLeft(categoryContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - categoryContainerRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    categoryContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const getCatName = (id) => {
    const Found = CatsData.find((product) => product.Name === id.CName);
    if (Found) {
      return Found;
    } else {
      return null;
    }
  };

  const CheckIn = getCatName(CatProNam);

  return (
    <>
      {CheckIn ? (
        <div id="profile">
          <div id="profilehead">
            <span id="profilelogo">
              <img src={CheckIn.imgUrl} alt="" />
            </span>
            <span id="profileheaddetail">
              <h3>{CheckIn.Name}</h3>
              <h5>(Age: {CheckIn.Age})</h5>
              <button>Message</button>
            </span>
          </div>

          <div id="profilesubimg">
            <h3>{CheckIn.Name} Imgaes</h3>
            <div
              id="imagegap"
              ref={categoryContainerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              {Object.values(CheckIn.proimg).map((imgUrl, index) => (
                <img src={imgUrl} alt="" />
              ))}
            </div>
          </div>
          <div id="aboutdetalis">
            <h2>About The {CheckIn.Name} Cat</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              quidem reprehenderit et nam esse obcaecati est voluptate nihil
              molestias, velit distinctio, harum natus ipsa doloribus quaerat
              sed corporis vel culpa quae iusto a. Laborum eos tenetur dolorum?
              Voluptatem impedit doloremque similique velit illo saepe, optio
              placeat laborum voluptas natus inventore eius molestias iste
              voluptate numquam ea et blanditiis distinctio dicta aut
              accusantium? Eaque nisi possimus dignissimos eum excepturi
              laudantium iusto deserunt tempora assumenda. Exercitationem
              ratione sit dolores quam atque cumque corporis et inventore beatae
              omnis, ut possimus corrupti vero molestias nesciunt dolor
              laboriosam nulla delectus, molestiae, ipsa adipisci illo
              consectetur unde. Quas pariatur possimus corrupti voluptates
              exercitationem omnis suscipit facere numquam aperiam ipsam culpa
              obcaecati, ducimus molestiae porro nulla laborum. Commodi ex
              architecto fugiat doloremque voluptatum ipsa totam, aut quos
              consectetur iste ab cupiditate fugit mollitia sed error unde
              temporibus saepe quo autem natus iusto expedita a harum!
              Doloremque, possimus!
            </p>
          </div>
        </div>
      ) : (
        <h1>Oops! This Time is Not Working</h1>
      )}
    </>
  );
}
export default Profile;
