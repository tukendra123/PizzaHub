import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Quick from '../quick/Quick'
import { addToCart } from '../../actions/cartActions'
import './pizza.css'

const Pizza = ({ pizza }) => {

  const [quantity, setQuantity] = useState(1) // 1 is default value
  const [variant, setVariant] = useState("small") // small is default value
  //const [open, setOpen] = useState(false); //false is default

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();


  function addToCartHandler() {
    dispatch(addToCart(pizza, quantity, variant))
  }


  return (
    <div className='p-card' key={pizza._id}>
      <div className="p-card-header">
        <img className='p-image' src={pizza.image} alt={pizza.name} />
        <h2 className="p-title" onClick={handleShow}>{pizza.name}</h2>
      </div>
      <div className="p-card-body">
        <div className="p-left">
          <span className="varients">Varients</span>
          <div className="p-select">
            <select value={variant} onChange={(e) => { setVariant(e.target.value) }}>
              {pizza.varients.map((varient, key) => (
                <option key={key} value={varient}>{varient}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="p-right">
          <span className="variants">Quantity</span>
          <div className="p-select quantity">
            <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
              {[...Array(8).keys()].map((x, key) => (
                <option key={key} value={key + 1}>{key + 1}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="p-card-footer">
        <div className="p-f-left">
          <p className="price">Price:<span>₹{(pizza.prices[0][variant] * [quantity]).toFixed(2)}</span></p>
        </div>
        <div className="p-f-right">
          <button onClick={addToCartHandler} className='btn'>Add</button>
        </div>
      </div>


      {/* for popup or quick view */}

      {show && <Quick handleClose={handleClose} pizza={pizza} />}

    </div>
  )
}

export default Pizza