import "./VideoDescription.scss";
import VideoData from "../VideoData/VideoData";

const VideoDescription = (props) => {
  let { currentVideoId, videoDetails } = props;
  let currentVideo = videoDetails.find((video) => video.id === currentVideoId);
  return (
    <div className="video-description">
      <VideoData currentVideo={currentVideo} />
      <p className="video-description__text">{currentVideo.description}</p>
    </div>
  );
};

export default VideoDescription;
