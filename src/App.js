import React from 'react'
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
function App() {

  const [data,setData] = useState('');


  useEffect(() => {

    const interval=setInterval(()=>{
      
      fetch("http://127.0.0.1:8000/crypto")
     .then((response) => response.json())
     .then((actualData) => { 
      console.log("Fetching the data....")
      setData(actualData)
    })
     .catch((err) => console.log("err ",err));

     },10000)
    
   }, []);

  return (
    <div className="container">
      <h2 className="center m-5">Coin Market Cap Data</h2>

      {
        <Table striped bordered hover variant="light">
          <thead className='m-3'>
            <th>Name</th>
            <th>Price</th>
            <th>OneHour%</th>
            <th>OneDay%</th>
            <th>7Day%</th>
            <th>MarketCap</th>
            <th>volume</th>
            <th>supply</th>
          </thead>
        {data.length > 0 && data.map(rec => (
          <tr key={rec.id}>
          <td >{rec.name}</td>
          <td >{rec.price}</td>
          <td >{rec.onehour}</td>
          <td >{rec.oneday}</td>
          <td >{rec.sevenday}</td>
          <td >{rec.marketcap}</td>
          <td >{rec.volume}</td>
          <td >{rec.supply}</td>
          </tr>
        ))}
      </Table>
      }


    </div>
  );
}

export default App;
