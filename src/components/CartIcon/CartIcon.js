import React from "react";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { togglrCartHidden } from "../../redux/cart/cartAction";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({togglrCartHidden}) => {
  return (
    <div className="cart-icon" onClick={togglrCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps=dispatch=>({
    togglrCartHidden:()=>dispatch(togglrCartHidden())
})

export default connect(null,mapDispatchToProps) (CartIcon);
