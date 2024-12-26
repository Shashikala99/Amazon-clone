import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";
import { Numbers } from '@mui/icons-material';



type ProductProps = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
};

const Product: React.FC<ProductProps> = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue();





  const addToBasket=()=>{
    // add item to basket
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,
        title,
        price,
        rating,
        image,
       
        
      },
    });
    

  };

  return (

    <div className="product">
      <div className="product_info">
      <p>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {
          
  Array.from({ length: rating }).map((_, index) =>(
        <p key={index}>⭐</p>
          
          ))}
      </div>
      </div>
      <img src={image} alt={title}/>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
