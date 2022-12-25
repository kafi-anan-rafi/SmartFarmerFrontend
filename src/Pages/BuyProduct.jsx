import Axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import config from '../config.json';

function BuyProduct() {
  const [product, setProduct] = useState([
    {
      Id: 1,
      Name: "abc",
      Price: 12,
      Stock: 30,
    },
    {
      Id: 2,
      Name: "abc",
      Price: 2,
      Stock: 30,
    },
    {
      Id: 3,
      Name: "abc",
      Price: 12,
      Stock: 30,
    },
    {
      Id: 4,
      Name: "abc",
      Price: 12,
      Stock: 30,
    },
  ]);

  useEffect(() => {
    Axios.get(config.apiURL + "product")
      .then(res => {
        console.log(res);
        setProduct(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handleButtonClick = (e) => {
    console.log("Button clicked");
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {product.map(p =>
            <tr key={p.Id}>
              <td>{p.Name}</td>
              <td>{p.Price}</td>
              <td>{p.Stock}</td>
              <td>{p.Quantity}</td>
              <td><button onClick={handleButtonClick} className='btn btn-primary btn-sm'>Add to Cart</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default BuyProduct;