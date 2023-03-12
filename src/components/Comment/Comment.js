import { useState, useEffect } from "react";
import axios from "axios";
import "./Comment.scss";

const Comment = ({ comment, videoId, deleteCommentHandler }) => {
  const [formattedTimestamp, setFormattedTimestamp] = useState("");

  const { comment: commentText, name, timestamp, id } = comment;

  useEffect(() => {
    const fetchFormattedTimestamp = async () => {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${videoId}`
        );
        setFormattedTimestamp(response.data.timestamp);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFormattedTimestamp();
  }, [timestamp]);

  return (
    <div className="comment">
      <div className="comment__img-container">
        <div className="comment__img"></div>
      </div>
      <div className="comment__content">
        <div className="comment__header-container">
          <h4 className="comment__header-text--bold">{name}</h4>
          <p className="comment__header-text--time">{timestamp}</p>
        </div>
        <div className="comment__text-container">
          <p className="comment__content-text">{commentText}</p>
        </div>
        <div className="comment__interaction-container">
          <button
            className="comment__interaction-button--delete"
            onClick={() => deleteCommentHandler(videoId, id)}
          >
            ✖️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
