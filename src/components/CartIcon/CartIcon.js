import React from "react";
import "./CartIcon.scss";
import { connect } from "react-redux";
import {selectCartItemsCount } from '../../redux/cart/cartSelector'
import { togglrCartHidden } from "../../redux/cart/cartAction";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({togglrCartHidden,itemCount}) => {
  return (
    <div className="cart-icon" onClick={togglrCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps=dispatch=>({
    togglrCartHidden:()=>dispatch(togglrCartHidden())
})
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);
