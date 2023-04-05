import React from "react";

const LiveScreen = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=1&controls=0"
        title="🔴 Al Jazeera English | Live"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
};

export default LiveScreen;
