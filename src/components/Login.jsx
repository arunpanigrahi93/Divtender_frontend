import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [emailId, setEmailId] = useState("arun@gmail.com");
  const [password, setPassword] = useState("Arun@123");
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong!");
      console.log(err);
    }
  };

  const handleSignUp = async () => {
    try {
      res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, age, gender, emailId, password },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleInvert = () => {
    setIsSigninForm(!isSigninForm);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-300 w-full max-w-md shadow-lg p-6">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl mb-4 text-center justify-center">
            {!isSigninForm ? "Signup" : "Login"}
          </h2>

          {/* All fields centered as a block */}
          <div className="flex flex-col items-center w-full">
            {/* Show extra fields only when Signup */}
            {!isSigninForm && (
              <>
                <fieldset className="fieldset my-2 w-full">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Type here"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset my-2 w-full">
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Type here"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset my-2 w-full">
                  <legend className="fieldset-legend">Age</legend>
                  <input
                    type="number"
                    className="input w-full"
                    placeholder="Type here"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset my-2 w-full">
                  <legend className="fieldset-legend">Gender</legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Type here"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </fieldset>
              </>
            )}

            {/* Email */}
            <fieldset className="fieldset my-2 w-full">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="email"
                className="input w-full"
                placeholder="Type here"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>

            {/* Password */}
            <fieldset className="fieldset my-2 w-full">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input w-full"
                placeholder="Type here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>

          {/* Error Message */}
          <p className="text-red-500 text-center mt-2">{error}</p>

          {/* Submit Button */}
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-active btn-accent rounded-lg w-3/4"
              onClick={isSigninForm ? handleLogin : handleSignUp}
            >
              {!isSigninForm ? "Signup" : "Login"}
            </button>
          </div>

          {/* Switch Mode */}
          <div className="text-center mt-2">
            <p className="text-sm">
              {isSigninForm
                ? "Don’t have an account?"
                : "Already have an account?"}{" "}
              <button
                onClick={handleInvert}
                className="text-accent font-semibold hover:underline"
              >
                {isSigninForm ? "Sign up here" : "Login here"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
