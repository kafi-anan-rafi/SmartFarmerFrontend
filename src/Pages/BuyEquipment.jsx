import Axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import config from '../config.json';

function BuyEquipment() {
  const [equipment, setEquipment] = useState([
    {
      Id: 1,
      SellerId: 1,
      Address: "abc",
      Price: 12,
      Quantity: 30,
    },
    {
      Id: 2,
      SellerId: 2,
      Address: "abc",
      Price: 2,
      Quantity: 30,
    },
    {
      Id: 3,
      SellerId: 3,
      Address: "abc",
      Price: 12,
      Quantity: 30,
    },
    {
      Id: 4,
      SellerId: 4,
      Address: "abc",
      Price: 12,
      Quantity: 30,
    },
  ]);

  useEffect(() => {
    Axios.get(config.apiURL + "equipment")
      .then(res => {
        console.log(res);
        setEquipment(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleButtonClick = (e) => {
    console.log("Button clicked");
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Address</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {equipment.map(p =>
            <tr key={p.Id}>
              <td>{p.Address}</td>
              <td>{p.Price}</td>
              <td>{p.Quantity}</td>
              <td><button onClick={handleButtonClick} className='btn btn-primary btn-sm'>Add to Cart</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default BuyEquipment;