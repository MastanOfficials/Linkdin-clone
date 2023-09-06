import { useState } from "react";
import { RigisterUser,siginPopup } from "../api/userAPI";
import {toast} from "react-toastify";

const LoginAuth = () => {
  const [creditionals, setCreditionals] = useState({ email: "", password: "" });
  const login = async () => {
    try {
      const response = await RigisterUser(
        creditionals.email,
        creditionals.password
      );
      toast.success("successfully Loggedin")
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sigInWithPopup=async()=>{
    try {
      const res= await siginPopup()
    toast.success("successfully logged")
    console.log(res)
    } catch (error) {
      console.log('Login Failed')
      toast.error("login failed")
    }
  }
  // console.log(creditionals)
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your Email or Phone"
          value={creditionals.email}
          onChange={(e) => {
            setCreditionals({ ...creditionals, email: e.target.value });
          }}
        />
      </div>
      <div>
        <input
            type="text"
            placeholder="Enter your password"
            value={creditionals.password}
          onChange={(e) => {
            setCreditionals({ ...creditionals, password: e.target.value });
          }}
        />
      </div>
      <button type="button" onClick={login}>
        Login
      </button>

      <div>
        <button onClick={sigInWithPopup}>sign in with google</button>
      </div>
    </div>
  );
};

export default LoginAuth;
