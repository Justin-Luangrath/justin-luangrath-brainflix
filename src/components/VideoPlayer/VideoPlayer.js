import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  let { currentVideoId, videoList } = props;
  let video = videoList.find((video) => video.id === currentVideoId);
  return (
    <div className="player__container">
      <video className="player" controls poster={video.image}></video>
    </div>
  );
};

export default VideoPlayer;
