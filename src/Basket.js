import React from 'react';
import './Basket.css';
import Subtotal from './Subtotal';

function Basket() {
  return (
    <div className='basket'>
      <div className='basket__left'>
        <img 
        className='basket__ad'
        src='https://m.media-amazon.com/images/G/02/Lynx/MktgAssets/MapleAssets/577-HL-LX-Maple-770x70-1._CB592592926_.jpg'
        alt=''
        />
        <div>
          <h2 className='basket__title'>Your shopping basket</h2>
        </div>

      </div>
      <div className='basket__right'>
        <Subtotal/>
        {/* Basket item */}
        {/* Basket item */}
        {/* Basket item */}
        {/* Basket item */}
      </div>

    </div>
  )
}

export default Basket
