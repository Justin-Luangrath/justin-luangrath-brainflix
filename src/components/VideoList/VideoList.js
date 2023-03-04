import "./VideoList.scss";
import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import videosData from "../../data/videos.json";

const VideoList = (props) => {
  const [videos, setVideos] = useState(videosData);
  let { currentVideoId, videoSelector } = props;
  return (
    <div className="video-list">
      <h3 className="video-list__title">NEXT VIDEOS</h3>
      {videos?.map((video, index) => (
        <VideoCard
          key={video.id}
          video={video}
          currentVideoId={currentVideoId}
          videoSelector={videoSelector}
        />
      ))}
    </div>
  );
};

export default VideoList;
