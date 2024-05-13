import React, { useContext } from "react";
import "./CartItems.css";
import { Link } from 'react-router-dom'
import cross_icon from "../Assets/cart_cross_icon.png";
import empty_bag from "../Assets/empty-bag.jpeg";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className="cartitems">
      {getTotalCartAmount() !== 0 &&
        <div className="cartitems-format-main-wrapper">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div><hr/>
        </div>
      }

      {products.map((e)=>{
        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div className="cartitems-format-main cartitems-format">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className="cartitems-quantity">{cartItems[e.id]}</button>
                      <p>${e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      

      {getTotalCartAmount() === 0 &&
      <div className="cartitems-light">
         <img className="empty-icon" src={empty_bag} alt=""/>
        <h1 style={{textAlign: 'center', fontWeight: 'bold', fontStyle: 'inherit', fontSize: 25}}> Hey, it feels so light! </h1>
        <h2 style={{textAlign: 'center', fontWeight: 'lighter', fontStyle: 'initial', fontSize: 15}}> There is nothing in your bag. Let's add items.</h2>
        <Link to='/'><button>LET'S SHOP!</button></Link>
      </div>
      }


      {getTotalCartAmount() !== 0 &&
      <div className="cartitems-down">
        
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>$2</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()+2}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div> 
        
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default CartItems;