import React from "react";
import './App.css';
import Button from '@mui/material/Button';

//Main React App Function
function App() {
  const [data, setData] = React.useState(null);

  //console log of data variable, should return null or an array. 
  console.log(data);
//Function to retrieve data from backend api at http://localhost:5000
  function GetData() {
    if(!data){
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data));
    }
    else{
      setData(null);
    }
  }
//rendering of Application, includes a map function to map the array retreived from api
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project 3 Site</h1>
        <p>Click Button to Load or unload data</p>
      <Button variant="contained" onClick={() => GetData()}>{!data ? "Show Items": "Hide Items"}</Button>
<p>{!data ? "No Data Available" : data.map((item) => 
  <p>Item: {item.item} Price: ${item.price}</p>
)}</p>
      </header>
    </div>
  );
}




export default App;
