import "./VideoData.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

const VideoData = ({ currentVideo }) => {
  // Create state hold current video like data
  const [videoLikes, setVideoLikes] = useState(currentVideo.likes);
  // Function to format timestamp to readable date
  const formatDate = (timeStamp) => {
    let postDate = new Date(timeStamp);
    let day = String(postDate.getDate()).padStart(2, "0");
    let month = String(postDate.getMonth() + 1).padStart(2, "0");
    let year = postDate.getFullYear();
    postDate = day + "/" + month + "/" + year;
    return postDate;
  };
  //useEffect to update the video likes on page load
  useEffect(() => {
    setVideoLikes(currentVideo.likes);
  }, [currentVideo]);
  //Function to handle video likes
  const likeHandler = () => {
    axios
      .put(`http://localhost:8080/videos/${currentVideo.id}`)
      .then((response) => {
        console.log(response.data.likes);
        setVideoLikes(response.data.likes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="video-data">
      <h1 className="video-data__title">{currentVideo.title}</h1>
      <div className="video-data__container">
        <div className="video-data-info">
          <div className="video-data-info__container">
            <p className="video-data-info__text video-data-info__text--bold">
              {`By ${currentVideo.channel}`}
            </p>
          </div>
          <div className="video-data-info__container">
            <p className="video-data-info__text">
              {formatDate(currentVideo.timestamp)}
            </p>
          </div>
        </div>
        <div className="video-data-info">
          <div className="video-data-info__container">
            <img
              className="video-data-info__icon"
              src={viewsIcon}
              alt="views icon"
            />
            <p className="video-data-info__text">{currentVideo.views}</p>
          </div>
          <div className="video-data-info__container">
            <img
              onClick={likeHandler}
              className="video-data-info__icon video-data-info__icon--interactive"
              src={likesIcon}
              alt="likes icon"
            />
            <p className="video-data-info__text">{videoLikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoData;
