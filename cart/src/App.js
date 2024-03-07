import React, {useState} from 'react'
function App({dataFromHostForCart}) {
  const [cartData, setCartData] = useState('');
  console.log("in cartApp===", dataFromHostForCart?.itemData?.itemName)
  const handleChange = (event) => {
    const cartNawData = event.target.value;
    setCartData(cartNawData);
    if (typeof dataFromHostForCart?.onCartDataChange === 'function') {
      dataFromHostForCart?.onCartDataChange(cartNawData);
    }
  };
  return (
    <div className="App">
      <h1>Cart App</h1>
      <p>Data get from Host App : {dataFromHostForCart?.itemData?.itemName}</p>
      <input type="text" value={cartData} onChange={handleChange} />
    </div>
  );
}

export default App;
