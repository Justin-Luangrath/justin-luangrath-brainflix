import { Link } from "react-router-dom";
import "./PageNotFound.scss";

function PageNotFound() {
  return (
    <div className="page">
      <div className="page__content">
        <h1 className="page__title">404</h1>
        <h3 className="page__sub-title">oh no!!</h3>
        <p className="page__text">
          You've either miss spelt the URL or the page you are requesting is no
          loger here
        </p>
        <Link className="page__button--link" to="/">
          <button className="page__button">RETURN HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
