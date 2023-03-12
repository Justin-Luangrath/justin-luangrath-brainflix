import "./VideoDescription.scss";
import VideoData from "../VideoData/VideoData";

const VideoDescription = ({ currentVideo }) => {
  return (
    <div className="video-description">
      <VideoData currentVideo={currentVideo} />
      <p className="video-description__text">{currentVideo.description}</p>
    </div>
  );
};

export default VideoDescription;
