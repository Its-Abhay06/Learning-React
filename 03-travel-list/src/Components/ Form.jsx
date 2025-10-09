import React from "react";
function handleSubmit(e) {
  e.preventDefault();
}

const Form = () => {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>

      <select name="count" id="">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <input type="text" placeholder="items..." />

      <button>ADD</button>
    </form>
  );
};

export default Form;
