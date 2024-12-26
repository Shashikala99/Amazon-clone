import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from './StateProvider';



function Header() {
  const[{ basket }, dispatch] = useStateValue();
  console.log(basket);

  return  (
    <nav className="header">
   
      {/*logo on the left*/}

      <Link to="/">                        
      <img 
          className="header_logo" 
           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
           alt="Logo"
           />
      </Link>

      {/*search box*/}

      <div className="header_search">
      <input type ="text" className="header_SearchInput"/>
      <SearchIcon className="header_SearchIcon" />
      </div>

      {/*3 links*/}

      <div className="header_nav">

      {/*1st link*/}

      <Link to ="/login" className="header_link">
      <div className="header_option">
      <span className="header_OptionLineOne">Hello Shaa</span>
      <span className="header_OptionlineTwo">Sign In</span>
      </div>
      </Link>

      {/*2nd link*/}

      <Link to ="/" className="header_link">
      <div className="header_option">
      <span className="header_OptionLineOne">Returns</span>
      <span className="header_OptionlineTwo">& Orders</span>
      </div>
      </Link>

      {/*3rd link*/}

      <Link to ="/" className="header_link">
      <div className="header_option">
      <span className="header_OptionLineOne">Your</span>
      <span className="header_OptionlineTwo">Prime</span>
      </div>
      </Link>

      {/*4th link*/}

      <Link to="/checkout" className="header_link">
      <div className="header_OptionBasket">

        {/*Shopping basket icon*/}
        <ShoppingBasketIcon/>
        <span className="header_OptionLineTwo header_basketCount">{basket?.length}</span>
      </div>
      </Link>
       </div>
     </nav>
  );
}

export default Header;
