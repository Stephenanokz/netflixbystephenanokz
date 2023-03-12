import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.state.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video src={movie.video} className="video" autoPlay controls></video>
    </div>
  );
};

export default Watch;
