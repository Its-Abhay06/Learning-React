import React from "react";

function Pizza({ pizzaObj }) {
  // rendering multiple return statement basis of some condition
  // if (pizzaObj.soldOut) return null;
  //one way of making sold out pizza appear black is written below
  // const classname = pizzaObj.soldOut ? "pizza sold-out" : "pizza";
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizza spinaci" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? <span>Sold Out</span> : <span>pizzaObj.price</span>} */}
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
