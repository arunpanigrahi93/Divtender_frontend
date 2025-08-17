import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed); // check slice structure!

  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addFeed(res?.data?.data)); // only plain JSON → safe for Redux
    } catch (err) {
      console.error(err);
      navigate("/login"); // redirect on error
    }
  };

  useEffect(() => {
    fetchFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!feed || feed.length === 0) {
    return <h1 className="text-center">No feed found</h1>;
  }

  return (
    <div className="flex flex-wrap justify-center my-10 gap-6">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
