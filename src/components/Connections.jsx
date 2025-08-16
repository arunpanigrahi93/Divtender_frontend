import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      // console.log(res.data.data);
      // if (res.data.data.length === 0) return;

      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0)
    return <h1 className="flex justify-center my-10"> No Connections Found</h1>;

  return (
    <div className="text-center py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Connections</h1>

      <div className="flex flex-col items-center gap-6">
        {connections.map((items, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-5 w-full max-w-xl border border-gray-200"
          >
            {/* Profile Image */}
            <img
              alt="photo"
              className="w-20 h-20 rounded-full object-cover border border-gray-300"
              src={items.photoUrl}
            />

            {/* Info */}
            <div className="ml-5 text-left">
              <h2 className="text-lg font-semibold text-gray-800">
                {items.firstName} {items.lastName}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{items.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
