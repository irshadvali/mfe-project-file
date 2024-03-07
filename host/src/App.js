import React, {useState} from 'react'
import DashboardApp from './mfeapp/DashboardApp';
import CartApp from './mfeapp/CartApp';
function App() {
  const [cartNewData, setCartnewData]= useState('');
  let personObj = {firstName:"John", lastName:"Doe", age:20, eyeColor:"black"};
  let itemObj = {item:"Mobile", itemName:"iPhone", price:560000, color:"black"};
  const handleChildDataChange = (newData) => {
    console.log("=====in host from Dashboard==", newData);
  };
  const handleCartDataChnage = (data) => {
    setCartnewData(data)
    console.log("=====in host from cart==", data);
  };
  return (
    <div>
      <p>Host App</p>
      <DashboardApp myDatat={"abcd"} personObj={personObj} title={'From Host'} onChildDataChange={handleChildDataChange} ></DashboardApp>
      <CartApp itemData={itemObj} onCartDataChange={handleCartDataChnage}></CartApp>
      <p>In Side host App : {cartNewData}</p>
    </div>
  );
}

export default App;
