import React from "react";
import "./CandidateCard.scss";
import { BiTime } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";

const CandidateCard = ({ time, layout, gender, name, location }) => {
  return (
    <div className="Candidate_card_container">
      <div className="title">{name}</div>
      <div className="meta_info">
        <div className="item">
          <BiCurrentLocation />
          <div className="location">{location}</div>
        </div>
        <div className="item">
          <BiTime />
          <div className="time">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
