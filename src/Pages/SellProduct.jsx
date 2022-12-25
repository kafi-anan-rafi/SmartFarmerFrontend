import Axios from 'axios'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import config from '../config.json';

function SellProduct() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    farmerId: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(config.apiURL + "product/add", {
      Name: product.name,
      Category: product.category,
      Quantity: product.quantity,
      Price: product.price,
      FarmerId: product.farmerId,
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div>
      <div className='content d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className="col-5">
          <h2>Add product</h2>
          <div className="form-group">
            <label className='mt-20' htmlFor="name">Product Name</label>
            <input required type="text" onChange={e => setProduct({ ...product, name: e.target.value })} className="form-control" id="name" name='name' />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select onChange={e => setProduct({ ...product, category: e.target.value })} name="category" id="category">
              <option value="Vegetable">Vegetable</option>
              <option value="Meat">Meat</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input required type="number" onChange={e => setProduct({ ...product, quantity: e.target.value })} className="form-control" id="quantity" name='quantity' />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input required type="number" onChange={e => setProduct({ ...product, price: e.target.value })} className="form-control" id="price" name='price' />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default SellProduct