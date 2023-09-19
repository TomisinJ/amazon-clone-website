import React from 'react';
// import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

function Subtotal() {
  return (
    <div className='subtotal'>
      <p>Subtotal(2 items): <strong>£123.89</strong></p>
      <small className='subtotal__gift'><input type='checkbox'/>This order contains a gift</small>
      <button className='subtotal__button'>Proceed to checkout</button>
    </div>

  )
}

export default Subtotal
