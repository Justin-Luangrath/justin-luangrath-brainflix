import { useState } from "react";
import "./VideoControls.scss";
import play from "../../assets/Icons/play.svg";
import pause from "../../assets/Icons/pause.svg";
import scrub from "../../assets/Icons/scrub.svg";
import volumeOff from "../../assets/Icons/volume_off.svg";
import volumeUp from "../../assets/Icons/volume_up.svg";
import fullScreen from "../../assets/Icons/fullscreen.svg";
import closeFullScreen from "../../assets/Icons/close_fullscreen.svg";

const VideoControls = ({ videoRef }) => {
  const [playState, setPlayState] = useState(true);
  const [screenState, setScreenState] = useState(true);
  const [volumeState, setVolumeState] = useState(true);
  const [videoLength, setVideoLength] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  window.setInterval(() => {
    setCurrentTime(videoRef.current?.currentTime);
    setVideoProgress((videoRef.current?.currentTime / videoLength) * 100);
  }, 1000);

  const playStateHandler = () => {
    setPlayState(!playState);
    if (playState) {
      videoRef.current.play();
      setVideoLength(videoRef.current.duration);
    } else {
      videoRef.current.pause();
    }
  };

  const screenStateHandler = () => {
    setScreenState(!screenState);
    videoRef.current.requestFullscreen();
  };

  const volumeStateHandler = () => {
    setVolumeState(!volumeState);
    videoRef.currentmuted = volumeState;
  };
  return (
    <div className="controls">
      <div className="play-container">
        <img
          onClick={playStateHandler}
          src={playState ? play : pause}
          alt="play/pause button"
        />
      </div>
      <div className="scrubber-container">
        <div className="scrubber">
          <div className="scrubber-progress"></div>
        </div>
        <div className="scrubber__text">{`${
          Math.floor(currentTime / 60) +
          ":" +
          ("0" + Math.floor(currentTime % 60)).slice(-2)
        }/ ${
          Math.floor(videoLength / 60) +
          ":" +
          ("0" + Math.floor(videoLength % 60)).slice(-2)
        }`}</div>
      </div>
      <div className="aux-container">
        <img
          onClick={screenStateHandler}
          src={screenState ? fullScreen : closeFullScreen}
          alt="screen size button"
        />
        <img
          onClick={volumeStateHandler}
          src={volumeState ? volumeUp : volumeOff}
          alt="volume on/off button"
        />
      </div>
    </div>
  );
};

export default VideoControls;
