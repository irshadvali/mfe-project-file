import React from "react";
function App({dataFromHostForCart}) {
  console.log("in cartApp===", dataFromHostForCart?.itemData?.itemName)
  return (
    <div className="App">
      <h1>Cart App</h1>
      <p>{dataFromHostForCart?.itemData?.itemName}</p>
    </div>
  );
}

export default App;
