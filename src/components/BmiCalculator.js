import React, { useState } from 'react';
import Result from './Result';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please enter height and weight of a person.');
      return;
    }

    const heightInMeters = parseFloat(height);
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) {
      alert('Please enter valid height and weight values.');
      return;
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2)); //toPrecision()
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto mt-10 text-xl">
      <div className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="height" className="text-lg">
            Height (in meters):
          </label>
          <input
            type="number"
            id="height"
            className="p-3 border border-gray-500 rounded text-black"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="weight" className="text-lg">
            Weight (in kg):
          </label>
          <input
            type="number"
            id="weight"
            className="p-3 border border-gray-500 rounded text-black"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>
      </div>
      {bmi === null ? null: <Result bmi={bmi} />}
    </div>
  );
};

export default BmiCalculator;
