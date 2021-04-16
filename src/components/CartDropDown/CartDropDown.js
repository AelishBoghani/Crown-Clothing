import React from "react";
import "./CartDropDown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from '../cartItem/CartItem'
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cartSelector'
const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems:selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropDown);
