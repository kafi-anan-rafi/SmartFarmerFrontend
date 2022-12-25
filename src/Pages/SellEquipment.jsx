import Axios from 'axios'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import config from '../config.json';

function SellEquipment() {
  const [equipment, setEquipment] = useState({
    name: '',
    address: '',
    quantity: '',
    price: '',
    sellerId: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(config.apiURL + "equipment/add", {
      Name: equipment.name,
      Quantity: equipment.quantity,
      Price: equipment.price,
      Address: equipment.address,
      SellerId: equipment.sellerId,
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
          <h2>Add equipment</h2>
          <div className="form-group">
            <label className='mt-20' htmlFor="name">Equipment Name</label>
            <input required type="text" onChange={e => setEquipment({ ...equipment, name: e.target.value })} className="form-control" id="name" name='name' />
          </div>
          <div className="form-group">
            <label htmlFor="address">Location</label>
            <input required type="text" onChange={e => setEquipment({ ...equipment, address: e.target.value })} className="form-control" id="address" name='address' />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input required type="number" onChange={e => setEquipment({ ...equipment, quantity: e.target.value })} className="form-control" id="quantity" name='quantity' />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input required type="number" onChange={e => setEquipment({ ...equipment, price: e.target.value })} className="form-control" id="price" name='price' />
          </div>
          <button type="submit" className="btn btn-primary">Add Equipment</button>
        </form>
      </div>
    </div>
  )
}

export default SellEquipment