import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
 import { getBasketTotal } from "./reducer";

function Subtotal() {
   const [{ basket }, dispatch] = useStateValue();

  /*console.log(basket);*/
  console.log('Basket:', basket);
  console.log('Basket Total:', getBasketTotal(basket));

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value:string) => (
          <>
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__Gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button >Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;