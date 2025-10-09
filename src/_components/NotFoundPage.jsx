import { Link } from "react-router-dom";
import "../css/NotFoundPage.css";
const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <p>It seems you've drifted off course. Let's get you back home!</p>
        <Link to="/" className="home-button">
          GO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
