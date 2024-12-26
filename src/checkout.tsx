
import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from 'react-currency-format';
import "./checkout.css";
import Subtotal from "./Subtotal";



function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__Ad"
          src="https://selfpublishingadvice.org/wp-content/uploads/2019/05/How-to-Set-Up-an-Amazon-UK-Advertising-Account-1.jpg"
          alt=""
        />
        {basket?.length===0?(
        <div> 
            <h2>Your Shopping Basket is empty</h2>
            <p>
                You have no item in your basket.
                To buy one or more "ADD to basket"next to item
            </p>
            </div>
            ):(
            <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

                {basket.map(item => {
                 console.log(item);
                return(
                 <CheckoutProduct
             id={item.id}
             title={item.title}
             price={item.price}
             rating={item.rating}
             image={item.image}
            
                />
            );
            })} 
            
             
          </div>
            )
            }

          
             
         
        
      </div>
            {basket.length > 0 &&(
                <div className="checkout__right">
                <Subtotal />
                
                </div>
            )}
       
      
    </div>
    
    
  );
  
}

export default Checkout;
