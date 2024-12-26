import React from 'react';
import Product from "./Product";
import "./Home.css";


function Home () {
  return (
    <div className="home">
      <img 
       src="https://cdn.geekwire.com/wp-content/uploads/2023/09/primevideo-seo-logo.jpg"
       className="home__image"
       alt=""
       />
       <div className="home_row">
       <Product
      id="12"
      title="Ladies Watch-AlloyWater Resistance Depth "
      price={12.96}
      rating={5}
      image="https://i.pinimg.com/564x/b9/79/e3/b979e306f46547cd3c2cc54a2043fc6e.jpg"
      />

      <Product 
      id="13"
      title="Ladies Cargo Pants-This Street Loose Cargo Pants Autumn Fashion Casual "
      price={8.96}
      rating={4}
      image="https://i.pinimg.com/564x/84/b8/67/84b867d56b70b999ce190d1ccef1c4c2.jpg"
      />
      <Product 
      id="14"
      title="Women's Sports Black Shorts / Pants Gym Workout With White Waistband 1+1 "
      price={8.96}
      rating={4}
      image="https://i.pinimg.com/564x/1a/13/53/1a13536f3d1c2b5f68046400bceddd86.jpg"
      />
        <Product 
      id="15"
      title="Big Middle School Student Backpack Schoolbag "
      price={21.78}
      rating={4}
      image="https://www.jasminewei.com/cdn/shop/products/8_55a8d2a0-48b0-47eb-bdef-10f4109a2a89_1024x1024@2x.jpg?v=1671181435"
      />
      
    </div>
       <div className="home_row">
       <Product 
      id="16"
      title="Summer Frock-material: lady zara mix organza SIZE CHART WOMEN Size S  "
      price={21.99}
      rating={3}
      image=" https://i.pinimg.com/564x/9c/78/e6/9c78e6d8509d7a7e7b584503b6b7fe92.jpg"
      />

      <Product 
      id="17"
      title="Spectacles-Blue Light Blocking Glasses Classic Clear Lens Anti Eyestrain Computer Glasses Metal Spectacles Frame For Women Men Students"
      price={42.96}
      rating={5}
      image="https://i.pinimg.com/736x/47/33/20/473320470cb59998652f747683fdde1c.jpg"
      />

      <Product 
      id="18"
      title="Lip Moisture-Natural Plant Lip Balm Moisturizing Lipsticks Base Cute Makeup Anti-Cracking Lip Oil Original Korean Cosmetics Skin Care"
      price={3.23}
      rating={4}
      image="https://i.pinimg.com/736x/4b/fe/13/4bfe134bcd6eafa7c23632ecd5dc07be.jpg"
      />
      </div>

      <div className="home_row">
       <Product 
      id="19"
      title="Wireless Ear-Buds- True Wireless Bluetooth Earbuds - Pink #amazonfinds #earbuds #wireless #bluetoothearbuds #amazon "
      price={7.00}
      rating={2}
      image="https://i.pinimg.com/564x/1b/80/32/1b8032ba069040cdec11c0c02fc71743.jpg"
      />

       <Product 
      id="20"
      title="Victoria Secret- Bombshell Eau de Parfum by Victoria's Secret is a Floral Fruity fragrance for women. "
      price={10.00}
      rating={4.5}
      image="https://i.pinimg.com/736x/10/96/bd/1096bd1c866930a0c355a40fbc1bf153.jpg"
      />
        <Product 
      id="21"
      title="Sneakers- Step up your style game with CRLAYDK 2024 Chunky Sneakers! 👟 Elevate your look with these platform "
      price={50.00}
      rating={3.5}
      image="https://i.pinimg.com/736x/29/1f/26/291f26356f73c841b456d79c2ad21823.jpg"
      />
        <Product 
      id="22"
      title="Retinol Anti-Aging Hand Cream – The Original Retinol Brand For Younger Looking Hands –Rich"
      price={9.00}
      rating={4.5}
      image="https://kateminimalist.com/cdn/shop/files/61J4P72K7UL_large.jpg?v=1714721086"
      />

      
      

       </div>
       <div className="home_row">
       <Product 
      id="23"
      title="Meadowfoam Seed Oil. This oil helps to reduce the appearance of stretch marks, fine lines, wrinkles, and scars"
      price={21.99}
      rating={3}
      image="https://i.pinimg.com/564x/09/21/07/092107d9871fee9c33fb856f15341596.jpg"
      />

      <Product 
      id="24"
      title="Lace Parasol,UV Protection,Wedding,Bridal Shower,Quinceniera,Prom,Cocktail Paryn,Lace Umbrella"
      price={42.96}
      rating={5}
      image="https://i.etsystatic.com/26062812/r/il/74affb/2930875410/il_794xN.2930875410_9mrt.jpg"
      />

      <Product 
      id="25"
      title="Mineral Primer is designed for normal to dry skin types and infused with botanicals to prep the skin for a flawless base."
      price={3.23}
      rating={4}
      image="https://i.pinimg.com/736x/b2/f5/36/b2f5368ab1a072521db747b9d3d5bbf8.jpg"
      />
      </div>

      
    </div>
  );
}

export default  Home;
