import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../pizzaData";

function Menu() {
  // const pizzas = []; // this is a thruthy statement because empty array is always true. therefore we will use length of array
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        // <React.Fragment key="01"></React.Fragment> we use this when we have to specify the key
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to chooose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

export default Menu;
