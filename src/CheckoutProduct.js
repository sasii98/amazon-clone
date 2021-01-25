import React from 'react'

function Checkoutproduct(id,title,image,price,rating) {
    return (
        <div className="checkoutProduct">
        <img src={image} alt=""/>
        <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating"> 
     {
         Array(rating)
         .fill()
         .map((_,i) => (
             <p>⭐</p>
             ))
     }
        </div>
        <button>Remove from basket</button>
    </div>
</div>
    );
}

export default Checkoutproduct
