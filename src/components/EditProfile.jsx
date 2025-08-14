import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

  const handleUpdate = async () => {
    // const dispatch = useDispatch();
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-stretch gap-8 p-6">
        {/* Edit Profile Card */}
        <div className="card bg-base-300 w-96 shadow-sm h-full flex flex-col">
          <div className="card-body flex-grow">
            <h2 className="card-title justify-center font-bold text-2xl">
              Edit Profile
            </h2>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">First name</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Photo</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Age</legend>
              <input
                type="number"
                className="input"
                placeholder="Type here"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Gender</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">About</legend>
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </fieldset>

            <div className="card-actions justify-center my-2">
              <button
                className="btn btn-active btn-accent rounded-lg"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>

        {/* Preview User Card */}
        <div className="h-full flex">
          <UserCard
            user={{ firstName, lastName, photoUrl, age, gender, about }}
          />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
