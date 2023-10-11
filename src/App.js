import "./App.css";
import BmiCalculator from "./components/BmiCalculator";

function App() {
  return (
    <>
      <h1 className="text-7xl font-bold text-center mt-7">BMI Calculator</h1>
      <div className="container mx-auto pt-3 bg-slate-900 text-white md:w-[36rem] mt-[4rem] sm:w-[18rem]">
        <BmiCalculator />
      </div>
    </>
  );
}

export default App;
