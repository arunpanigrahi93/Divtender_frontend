import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, photoUrl, about } = user;

  return (
    <div className="card bg-base-300 w-80 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <figure className="h-60 w-full overflow-hidden">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        {/* Name & Age */}
        <h2 className="text-lg font-bold flex items-center justify-between">
          {firstName} {lastName}
          <span className="text-sm font-medium text-gray-500">{age} yrs</span>
        </h2>
        <p className="text-sm text-gray-600 capitalize">{gender}</p>

        {/* About */}
        <p className="mt-2 text-sm text-gray-700 leading-relaxed line-clamp-3">
          {about}
        </p>

        {/* Actions */}
        <div className="card-actions mt-4 justify-between">
          <button className="btn btn-sm btn-secondary px-4">Ignore</button>
          <button className="btn btn-sm btn-accent px-4">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
