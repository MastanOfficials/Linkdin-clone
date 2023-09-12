import { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RigisterUser, siginPopup } from "../api/authAPI";
import "../scss/rigisterPage.scss";

const RigisterComponent = () => {
  const navigate=useNavigate()
  const [creditionals, setCreditionals] = useState({ email: "", password: "" });
  const [password, setShowpassword] = useState(false);
  const passwordVisible=()=>{
    setShowpassword(!password)
  }
  const signin = async () => {
    try {
      const response = await RigisterUser(
        creditionals.email,
        creditionals.password
      );
      console.log(response);
      toast.success("Logged successfylly");
      navigate('/feed')
      // if (response == true) return 
    } catch (error) {
      console.log(error);
      toast.error("Login Fiailed");
    }
  };
  const sigInWithPopup = async () => {
    try {
      const res = await siginPopup();
      toast.success("successfully logged");
      console.log(res);
      navigate('/feed')
    } catch (error) {
      console.log("Login Failed");
      toast.error("login failed");
    }
  };
  return (
    <>
      <h2
        style={{
          color: "blue",
          display: "flex",
          justifyContent: "space-around",
          "padding-top": "150px",
          fontSize: "40px",
        }}
      >
        Linkein
        {/* <span>
          <i className="fab fa-linkedin"></i>
        </span> */}
      </h2>
      <div className="container">
        <div className="text">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>
        <div className="your-input">
          <div className="input">
            <input type="text" name="email" id="email" required  value={creditionals.email}
                onChange={(e) => {
                  setCreditionals({ ...creditionals, email: e.target.value });
                }}/>
            <label htmlFor="email">Email or Phone</label>
          </div>
          <div className="input">
            <input type={password ? "password" :"text"}  name="password" id="password" required  value={creditionals.password}
                onChange={(e) => {
                  setCreditionals({ ...creditionals, password: e.target.value });
                }}/>
            <label htmlFor="password">Password</label>
            <span className="span-show-hide" onClick={passwordVisible}>{password ? "show" : "Hide"}</span>
          </div>
        </div>
        <a href="#" className="forgot-password-link">
          Forgot Password?
        </a>
        <button onClick={signin}>Sign in</button>
        <p className="join-link">
          New to linkedin?
          <a href="#" className="join-now">
            Join now
          </a>
        </p>
        <GoogleButton onClick={sigInWithPopup} />
      </div>
    </>
  );
};

export default RigisterComponent;
