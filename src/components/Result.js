import React from "react";

const Result = ({ bmi }) => {
  return (
    <div className="mt-6 text-3xl">
      <h3 className="font-semibold">Result</h3>
      <div className="bg-gray-100 p-7 rounded-lg mt-2">
        <p className="font-semibold">
          {bmi < 18.5 ? (
            <span className="text-yellow-500">
              {bmi} kg/m2 <span className="text-black p-3"> -- </span> Under
              Weight
            </span>
          ) : bmi < 24.9 ? (
            <span className="text-green-500">
              {bmi} kg/m2<span className="text-black p-3"> -- </span> Normal
              Weight
            </span>
          ) : bmi < 29.9 ? (
            <span className="text-yellow-700">
              {bmi} kg/m2<span className="text-black p-3"> -- </span> Over
              Weight
            </span>
          ) : bmi < 35 ? (
            <span className="text-red-700">
              {bmi} kg/m2<span className="text-black p-3"> -- </span> Obesity
            </span>
          ) : (
            <span className="text-red-900">
              {bmi} kg/m2<span className="text-black p-3"> -- </span> Morbid
              Obesity
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Result;
