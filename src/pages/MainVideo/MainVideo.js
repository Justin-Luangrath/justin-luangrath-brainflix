import "./MainVideo.scss";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoList from "../../components/VideoList/VideoList";

function MainVideo({ videos, api_key }) {
  const [deleteComment, setDeleteComment] = useState(true);
  const [submitComment, setSubmitComment] = useState(true);
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
      .get(
        `https://project-2-api.herokuapp.com/videos/${currentVideoId}?api_key=${api_key}`
      )
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
  }, [currentVideoId, deleteComment, submitComment]);

  const deleteCommentHandler = (videoId, id) => {
    axios
      .delete(
        `https://project-2-api.herokuapp.com/videos/${videoId}/comments/${id}?api_key=${api_key}`
      )
      .then((response) => {
        setDeleteComment(!deleteComment);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const commentSubmitHandler = (event, videoId, userName, commentText) => {
    event.preventDefault();
    const isFormValid = () => {
      if (commentText === "") {
        return false;
      }
      return true;
    };

    if (isFormValid()) {
      axios
        .post(
          `https://project-2-api.herokuapp.com/videos/${videoId}/comments?api_key=${api_key}`,
          { name: userName, comment: commentText }
        )
        .then((response) => {
          setSubmitComment(!submitComment);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

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
            <CommentSection
              currentVideo={currentVideo}
              deleteCommentHandler={deleteCommentHandler}
              commentSubmitHandler={commentSubmitHandler}
            />
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
