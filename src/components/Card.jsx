import React from "react";

function Card(props) {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
      <p className="text-gray-700 mb-4">{props.description}</p>
      <div
        className={`text-sm ${
          props.status === "Complete" ? "text-green-600" : "text-blue-600"
        }`}
      >
        Status: {props.status}
      </div>
    </div>
  );
}

export default Card;
