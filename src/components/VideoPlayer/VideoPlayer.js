import "./VideoPlayer.scss";

const VideoPlayer = ({ currentVideo }) => {
  return (
    <div className="player__container">
      <video
        className="player"
        controls
        poster={currentVideo.image}
        src="{currentVideo.video}"
      ></video>
    </div>
  );
};
export default VideoPlayer;
