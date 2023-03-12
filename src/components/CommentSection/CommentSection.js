import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

const CommentSection = ({
  currentVideo,
  deleteCommentHandler,
  commentSubmitHandler,
}) => {
  return (
    <div className="comment-section">
      <h4>{currentVideo.comments.length + " Comments"}</h4>
      <CommentForm
        videoId={currentVideo.id}
        commentSubmitHandler={commentSubmitHandler}
      />
      {currentVideo.comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            videoId={currentVideo.id}
            deleteCommentHandler={deleteCommentHandler}
          />
        ))}
    </div>
  );
};

export default CommentSection;
