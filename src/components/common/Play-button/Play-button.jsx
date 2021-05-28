import React from 'react';
import play_icon from "../../../assets/img/play_icon.svg";

const PlayButton = () => {
  return (
    <div>
      <div className="play-button">
        <img src={play_icon} alt="play button"/>
      </div>
    </div>
  );
};

export default PlayButton;