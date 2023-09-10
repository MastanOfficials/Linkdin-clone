import "../scss/feedHeader.scss";
import linkdinImage from "../assets/images/linkedin.png";
const FeedHeader = () => {
  return (
    <>
      <div className="feed-Header">
        <ul>
          <li>
            <img src={linkdinImage} alt="" />
          </li>
          <li>
            <input type="text" placeholder="search"/>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-home"></i> <span>Home </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-users"></i> <span>My Network</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-briefcase"></i>
              <span> Jobs</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comments"></i> <span>Messaging</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-bell"></i> <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user"></i> <span>Me</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FeedHeader;
