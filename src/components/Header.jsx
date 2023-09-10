import "../scss/Header.scss";
import { TbArticleFilledFilled } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { BiSolidVideos } from "react-icons/bi";
import { BsBagFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header">
      <div className="heder-left">
        <img
          src="./src/assets/svg/linkdin-Logo.svg"
          alt=""
          width="150px"
          height="150px"
        />
      </div>
      <div className="header-right">
        <div className="header-Option">
          <span className="icon-wraper">
            <TbArticleFilledFilled className="custom-icon" />
          </span>
          <span className="option-Text">Article </span>
        </div>
        <div className="header-Option">
          <span className="icon-wraper">
            <IoIosPeople className="custom-icon" />
          </span>
          <span className="option-Text">People</span>
        </div>
        <div className="header-Option">
          <span className="icon-wraper">
            <BiSolidVideos className="custom-icon" />
          </span>
          <span className="option-Text">Learning</span>
        </div>
        <div className="header-Option">
          <span className="icon-wraper">
            <BsBagFill className="custom-icon" />
          </span>
          <span className="option-Text">Jobs</span>
        </div>
        <div className="heder-Join">
          <span>join Now</span>
        </div>
        <div className="btn-singin">
          <span>
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
