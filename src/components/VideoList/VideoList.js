import "./VideoList.scss";
import { Link } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";

const VideoList = ({ currentVideoId, videos }) => {
  return (
    <div className="video-list">
      <h3 className="video-list__title">NEXT VIDEOS</h3>
      {videos?.map((video) => (
        <Link className="video-list__link" key={video.id} to={`/${video.id}`}>
          <VideoCard
            key={video.id}
            video={video}
            currentVideoId={currentVideoId}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
