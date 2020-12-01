import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ source, setActiveDemo, setPlayed }) => {
  return (
    <ReactPlayer
      url={`videos/${source}.mp4`}
      playing={true}
      onEnded={() => {
        setPlayed(0); // reset progress bar
        setActiveDemo('banner');
      }}
      onProgress={({ played }) => {
        setPlayed(played); // communicate progress to parent
      }}
      progressInterval={50} // update progress every 50ms
      width="100%"
      height="100%"
      className="overflow-hidden border-white rounded-md md:border-2"
      playsinline={true} // prevent video from going fullscreen on mobile
    />
  );
};

export default Video;
