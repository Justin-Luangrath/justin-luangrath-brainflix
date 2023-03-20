import "./Comment.scss";

const Comment = ({
  comment,
  videoId,
  deleteCommentHandler,
  likeCommentHandler,
}) => {
  let { comment: commentText, name, timestamp, id, likes } = comment;
  const formatDate = (timeStamp) => {
    const seconds = Math.floor((new Date() - timeStamp) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " year  ago";
      } else {
        return Math.floor(interval) + " years  ago";
      }
    }

    interval = seconds / 2592000;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " month  ago";
      } else {
        return Math.floor(interval) + " months  ago";
      }
    }

    interval = seconds / 86400;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " day  ago";
      } else {
        return Math.floor(interval) + " days  ago";
      }
    }

    interval = seconds / 3600;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " hour  ago";
      } else {
        return Math.floor(interval) + " hours  ago";
      }
    }
    interval = seconds / 60;
    if (interval > 1) {
      if (interval < 2) {
        return Math.floor(interval) + " minute  ago";
      } else {
        return Math.floor(interval) + " minutes  ago";
      }
    }
    interval = seconds;
    if (interval > 30) {
      return " 30 seconds  ago";
    }

    return "Just now";
  };

  return (
    <div className="comment">
      <div className="comment__img-container">
        <div className="comment__img"></div>
      </div>
      <div className="comment__content">
        <div className="comment__header-container">
          <h4 className="comment__header-text--bold">{name}</h4>
          <p className="comment__header-text--time">{formatDate(timestamp)}</p>
        </div>
        <div className="comment__text-container">
          <p className="comment__content-text">{commentText}</p>
        </div>
        <div className="comment__interaction-container">
          <p className="comment__interaction-text">{`Likes: ${likes}`}</p>
          <button
            className="comment__interaction-button--like"
            onClick={() => likeCommentHandler(videoId, id)}
          >
            👍
          </button>
          <button
            className="comment__interaction-button--delete"
            onClick={() => deleteCommentHandler(videoId, id)}
          >
            🚫
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
