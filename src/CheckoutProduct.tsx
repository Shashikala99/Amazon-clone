
import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider"


interface CheckoutProductProps {
    id: string;
    title: string;
    price: number;
    rating: number;
    image: string;
    
    
  }


function CheckoutProduct({id,  title, image, price ,rating}:CheckoutProductProps) {
  const[{basket},dispatch]=useStateValue();
console.log(id, title, image, price ,rating);

  const removeFromBasket=()=>{

    dispatch({type:'REMOVE_FROM_BASKET',
    id:id,
        });

  }
  
  return (
    
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
           
        </p>
        <div className="checkoutProduct__rating">
            {Array(rating)

            .fill("string",0,5)
            .map((_,index)=>(
            <p key={index}>⭐</p>

))} 

        </div>
        
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
