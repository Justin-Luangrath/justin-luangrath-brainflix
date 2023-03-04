import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import { v4 as uuidv4 } from "uuid";

const CommentSection = (props) => {
  let { currentVideoId, videoDetails } = props;
  let currentVideo = videoDetails.find((video) => video.id === currentVideoId);
  return (
    <div className="comment-section">
      <h4>{currentVideo.comments.length + " Comments"}</h4>
      <CommentForm />
      {currentVideo.comments?.map((comment, index) => (
        <Comment key={uuidv4()} video={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
