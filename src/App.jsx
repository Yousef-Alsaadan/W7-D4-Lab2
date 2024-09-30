import { useState } from "react";
import "./App.css";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiRange, setBmiRange] = useState({ min: 0, max: 0 });

  const calculateBmi = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    } else {
      alert("Please enter valid height and weight");
    }
  };

  let imgSrc = null;
  if (bmi < 18.5) {
    imgSrc = img1;
  } else if (bmi > 18.5 && bmi < 24.9) {
    imgSrc = img2;
  } else if (bmi > 25 && bmi < 29.9) {
    imgSrc = img3;
  } else if (bmi > 30 && bmi < 34.9) {
    imgSrc = img4;
  } else if (bmi > 35) {
    imgSrc = img5;
  }

  const BmiRange = () => {
    const min = (18.5 * ((height / 100) * (height / 100))).toFixed(2);
    const max = (24.9 * ((height / 100) * (height / 100))).toFixed(2);
    setBmiRange({ min: min, max: max });
  };

  function asd() {
    calculateBmi();
    BmiRange();
  }

  return (
    <>
      <div className="bg-[#FFEED4] h-screen w-full">
        <div className="max-w-[1200px] mx-auto p-4 flex justify-evenly">
          <div className="flex flex-col gap-8 items-center my-8">
            <h1 className="text-center font-semibold text-3xl">
              BMI Calculator
            </h1>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your height?</span>
                <span className="label-text-alt">cm</span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your weight?</span>
                <span className="label-text-alt">kg</span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>

            <button className="btn btn-wide" onClick={() => asd()}>
              Calculate
            </button>
            <div className="flex justify-evenly">
              <h1>The BMI is:</h1>
              <p>{bmi}</p>
            </div>

            <div className="flex justify-evenly">
              <h1>Healthy BMI range:</h1>
              <p>
                {bmiRange.min} - {bmiRange.max}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center my-8">
            <img src={imgSrc} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
