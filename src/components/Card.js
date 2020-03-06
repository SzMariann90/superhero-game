import React from "react";
import "./Card.css";
import Macc from "./Macc";
import Nhp from "./Nhp";
import Cards from "./Cards";

function Card() {
  const handleOnclick = event => {
    console.log(event.target, "event");
  };
  return (
    <div className="field">
      <div className="box a">
        {" "}
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box b">
        {" "}
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box c">
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box d">
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box e">5</div>
      <div className="box f">6</div>
      <div className="box g">7</div>
      <div className="box h">
        <Nhp />
      </div>
      {/*  <div className="box j"></div> */}
      <div className="box l" onClick={handleOnclick}>
        <Macc />
      </div>
      <div className="box m">13</div>
      <div className="box n">
        <Cards />
      </div>
      {/* <div className="box o"></div> */}
      {/* 
      <div class="box p">16</div> */}
      <div className="box q">17</div>
      <div className="box r">18</div>
      <div className="box s">19</div>
      <div className="box t">20</div>
      <div className="box u">21</div>
      <div className="box v">
        {" "}
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box w">
        {" "}
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box x">
        {" "}
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box y">
        {" "}
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
    </div>
  );
}

export default Card;
