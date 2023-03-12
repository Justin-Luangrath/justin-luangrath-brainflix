import { Link } from "react-router-dom";
import "./PageNotFound.scss";

function PageNotFound() {
  return (
    <div className="page">
      <div className="page__content">
        <h1 className="page__title">404</h1>
        <h3 className="page__sub-title">attention!!</h3>
        <p className="page__text">
          The page you are requesting is no longer available
        </p>
        <Link className="page__button--link" to="/">
          <button className="page__button">RETURN HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
