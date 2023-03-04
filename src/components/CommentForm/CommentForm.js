import "./CommentForm.scss";

const CommentForm = () => {
  return (
    <>
      <div className="form-container">
        <div className="form__img-container">
          <div className="form__img"></div>
        </div>
        <form className="form">
          <div className="form__search-container">
            <label htmlFor="#comment-field" className="form__sub-title">
              JOIN THE CONVERSATION
            </label>
            <textarea
              id="comment-field"
              type=""
              className="form__text-input form__text-input--comment"
              name="comment"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="form__button">COMMENT</button>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
