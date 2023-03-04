import "./VideoCard.scss";

const VideoCard = (props) => {
  let { currentVideoId, video, videoSelector } = props;
  return (
    <div
      onClick={(event) => videoSelector(event, video.id)}
      className={`video-card ${
        video.id === currentVideoId ? "video-card--active" : ""
      }`}
    >
      <div className="video-card__container">
        <img
          className="video-card__container-img"
          src={video.image}
          alt="Video thumbnail"
        />
      </div>
      <div className="video-card__content-container">
        <p className="video-card__content-container-title">{video.title}</p>
        <p className="video-card__content-container-channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default VideoCard;
