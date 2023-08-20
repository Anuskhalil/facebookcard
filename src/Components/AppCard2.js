import React from "react";
import "../App.css";
import { SlOptions } from "react-icons/sl";
import { TiTick } from "react-icons/ti";
import { BiLike } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

function AppCard2(props) {
  return (
    <div className="main">
      <div className="container">
        <div className="row header mt-5">
          <img id="user" src={props.image} alt="" />
          <div className="col ">
            <h4>
              {props.name} <TiTick id="tick" />
            </h4>
            <p>{props.para}</p>
          </div>
          <div className="col">
            <SlOptions id="option" />
          </div>
          <p>{props.longPara}</p>
          <img id="border" src={props.image} alt="" />
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

export default AppCard2;
