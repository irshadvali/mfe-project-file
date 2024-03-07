import React, {useState} from 'react'
function App({dataFromHost}) {
  console.log("in Dashboard===", dataFromHost.title)
  const [childData, setChildData] = useState('');

  const handleChange = (event) => {
    const newData = event.target.value;
    setChildData(newData);
    if (typeof dataFromHost?.onChildDataChange === 'function') {
      dataFromHost?.onChildDataChange(newData);
    }
  };
  return (
    <div>
      <p>Dashboard</p>
      <input type="text" value={childData} onChange={handleChange} />
    </div>
  );
}

export default App;
