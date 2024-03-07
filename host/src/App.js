import React from 'react'
import DashboardApp from './mfeapp/DashboardApp';
import CartApp from './mfeapp/CartApp';
function App() {
  let personObj = {firstName:"John", lastName:"Doe", age:20, eyeColor:"black"};
  let itemObj = {item:"Mobile", itemName:"iPhone", price:560000, color:"black"};
  const handleChildDataChange = (newData) => {
    console.log("=====in host==", newData);
  };
  return (
    <div>
      <p>Host App</p>
      <DashboardApp myDatat={"abcd"} personObj={personObj} title={'From Host'} onChildDataChange={handleChildDataChange} ></DashboardApp>
      <CartApp itemData={itemObj}></CartApp>
    </div>
  );
}

export default App;
