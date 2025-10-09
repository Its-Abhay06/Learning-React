import React from "react";
import Logo from "./Components/Logo";
import Form from "./Components/ Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
