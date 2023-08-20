import React from "react";
import userImage from "../Components/user image.jpeg";
import "../App.css";
import { SlOptions } from "react-icons/sl";
import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

function AppCard() {
  return (
    <div className="main">
      <div className="container">
        <div className="row header mt-5">
          <img id="user" src={userImage} alt="" />
          <div className="col ">
            <h4>Allen Finn</h4>
            <p>2d 45min</p>
          </div>
          <div className="col">
            <SlOptions id="option" />
          </div>
          <p>my image</p>
          <img id="border" src={userImage} alt="" />
          <div className="main-btn">
            <button id="appbtn" type="submit" className="btn btn-dark">
              Like <BiLike id="btn-icon" />
            </button>
            <button id="appbtn" type="submit" className="btn btn-dark">
              Comment <AiOutlineComment id="btn-icon" />
            </button>
            <button id="appbtn" type="submit" className="btn btn-dark">
              Share <FaShare id="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCard;
