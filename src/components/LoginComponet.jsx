import { useState } from "react";
import { loginUser, siginPopup } from "../api/authAPI";
import { toast } from "react-toastify";
import LayoutHome from "../pages/LayoutHome";
import GoogleButton from "react-google-button";
import image from "../assets/images/someimage.jpg";
import {useNavigate} from "react-router-dom"

const LoginAuth = () => {
  const navigate=useNavigate()
  const [creditionals, setCreditionals] = useState({ email: "", password: "" });
  const [password, setShowpassword] = useState(false);
  const login = async () => {
    try {
      const response = await loginUser(
        creditionals.email,
        creditionals.password
      );
      console.log(response);
      navigate('/feed')
      if (response == true) return toast.success("Logged successfylly");
    } catch (error) {
      console.log(error.message);
      toast.error("Login Fiailed");
    }
  };
  // const rigisterUser = async () => {
  //   try {
  //     const res = await RigisterUser(creditionals.email, creditionals.password);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("filed to login");
  //   }
  // };
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

  const passwordVisibilty = () => {
    setShowpassword(!password);
  };
  // console.log(creditionals)
  const signInUser = async () => {
    try {
      const response = await loginUser(
        creditionals.email,
        creditionals.password
      );
      console.log(response);
      if (response == true) return toast.success("Logged successfylly");
    } catch (error) {
      console.log(error);
      toast.error("Enter creationals correctly");
    }
  };
  return (
    <>
      <LayoutHome />
      <div className="Login-home">
        <div>
          <div className="login-component">
            <div>
              <h1>Welcome to your professional community</h1>
            </div>
          </div>
          <div className="input-text-items">
            <div>
              <span>Enter your Email or Phone</span>
              <input
                type="text"
                value={creditionals.email}
                onChange={(e) => {
                  setCreditionals({ ...creditionals, email: e.target.value });
                }}
              />
            </div>

            <div>
              <span>password</span>
              <input
                type={password ? "text" : "password"}
                value={creditionals.password}
                onChange={(e) => {
                  setCreditionals({
                    ...creditionals,
                    password: e.target.value,
                  });
                }}
              />
              <div onClick={passwordVisibilty}>
                {password ? (
                  <span className="show-password">Hide</span>
                ) : (
                  <span className="show-password">Show</span>
                )}
              </div>
            </div>
            <div className="forgetPassword">
              <span>Forgot password?</span>
            </div>
            <div style={{ "padding-top": "20px" }}>
              <span className="sinin-btn" onClick={signInUser}>
                Sin In
              </span>
            </div>
            <div className="or-text">
              <div className="text-container">
                <span>or</span>
              </div>
            </div>
            <div>
              <GoogleButton className="google-Btn" onClick={sigInWithPopup} />
            </div>
            <div className="new-User-rigister">
              <span onClick={() => navigate('/signup')}>New to LinkedIn? Join now</span>
            </div>
          </div>
        </div>
        <div className="img-src">
          <img src={image} alt="" />
          {/* <img src="https://www.indianholiday.com/blog/most-beautiful-places-in-the-world/" alt="image not displaying" /> */}
        </div>
      </div>

      <button type="button" onClick={login}>
        Login
      </button>
      {/*    <button > Rigister</button>
      <div>
        <button>sign in with google</button>
      </div> */}
    </>
  );
};

export default LoginAuth;