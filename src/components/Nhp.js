import React from "react";
import "./Nhp.css";
import data from "./data";

class Nhp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hp1: 0,
      hp2: 0
    };
  }

  render() {
    return (
      <div className="container">
        <h3>HEALTH POINTS</h3>
        <div className="players">
          <div className="player1">
            <p>{data.name1}</p>
            <p>{data.hp1}</p>
            <div id="meter1" className="meter">
              <span style={{ width: this.hp1 }}></span>
            </div>
          </div>
          <div className="player2">
            <p>{data.name2}</p>
            <p>{data.hp2}</p>
            <div id="meter2" className="meter">
              <span style={{ width: this.hp2 }}>></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nhp;