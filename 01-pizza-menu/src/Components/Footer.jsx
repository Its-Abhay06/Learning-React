import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // using mutiple return to check whether the resturant is open or not
  //   if (!isOpen) {
  //     return (
  //       <p>
  //         The resturant is currently closed. We're happy to welcome you between{" "}
  //         {openHour}:00 and {closeHour}:00
  //       </p>
  //     );
  //   }
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

export default Footer;
