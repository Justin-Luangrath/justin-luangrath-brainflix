import "./MainVideo.scss";
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoList from "../../components/VideoList/VideoList";

function MainVideo({ videos }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [axiosFailed, setAxiosFailed] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(videos[0].id);
  const { videoId } = useParams();
  if (videoId && videoId !== currentVideoId) {
    setCurrentVideoId(videoId);
  } else if (!videoId && currentVideoId !== videos[0].id) {
    setCurrentVideoId(videos[0].id);
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8080/videos/${currentVideoId}`)
      ?.then((response) => {
        setCurrentVideo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setTimeout(() => {
          console.log("setTimeout");
          setAxiosFailed(true);
        }, 2000);
      });
  }, [currentVideoId]);

  if (isLoading && !axiosFailed) {
    return (
      <div className="loading">
        <h1 className="loading__title">Loading</h1>
        <div className="loading__dots-container">
          <div className="loading__dots"></div>
          <div className="loading__dots"></div>
          <div className="loading__dots"></div>
          <div className="loading__dots"></div>
          <div className="loading__dots"></div>
        </div>
      </div>
    );
  }
  if (isLoading && axiosFailed) {
    return <Navigate to="/Video-not-found" />;
  }

  return (
    <>
      <VideoPlayer currentVideo={currentVideo} />
      <div className="lower__container">
        <div className="lower">
          <div className="lower__video-data">
            <VideoDescription currentVideo={currentVideo} />
            <CommentSection currentVideo={currentVideo} />
          </div>
          <div className="lower__video-list">
            <VideoList currentVideoId={currentVideoId} videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;
