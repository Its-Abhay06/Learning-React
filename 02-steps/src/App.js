import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  // const [name] = useState({ name: "Abhay" }); manually changing state by destructuring object not a good practice
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // setStep(step > 1 ? step - 1 : step); // always use callback function but can directly declare if there is no reference to the initial state. For eg. line no 21 name.name = "tripathi"
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // setStep(step < 3 ? step + 1 : step); always use callback function
    // name.name = "tripathi"; manually changing state
    if (step < 3) setStep((s) => s + 1);
  }

  function handleClose() {
    // setIsOpen(!isOpen);  use callback
    setIsOpen((open) => !open);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {name.name} manually changing state */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
