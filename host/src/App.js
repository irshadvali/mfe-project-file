import React, { useState } from 'react'
import DashboardApp from './mfeapp/DashboardApp';
import CartApp from './mfeapp/CartApp';
import WalkApp from './mfeapp/WalkApp';
import TutorialApp from './mfeapp/TutorialApp';

function App() {
  const [cartNewData, setCartnewData] = useState('');
  let personObj = { firstName: "John", lastName: "Doe", age: 20, eyeColor: "black" };
  let itemObj = { item: "Mobile", itemName: "iPhone", price: 560000, color: "black" };
  const handleChildDataChange = (newData) => {
    console.log("=====in host from Dashboard==", newData);
  };
  const handleCartDataChnage = (data) => {
    setCartnewData(data)
    console.log("=====in host from cart==", data);
  };
  return (
    <div>
      <p style={{backgroundColor: '#e6e6e6', height:'40px',}}>Host App</p>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }} >
        <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: 1 }} >
          <div style={{ backgroundColor: '#e6e6e6' }}>
            <DashboardApp myDatat={"abcd"} personObj={personObj} title={'From Host'} onChildDataChange={handleChildDataChange} ></DashboardApp>
            <CartApp itemData={itemObj} onCartDataChange={handleCartDataChnage}></CartApp>
            <p>In Side host App : {cartNewData}</p>
            <WalkApp></WalkApp>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: 1 }} >
          <div style={{ backgroundColor: '#f0f0f0' }} >
            <TutorialApp></TutorialApp>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
