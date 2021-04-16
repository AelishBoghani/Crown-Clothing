import React from "react";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import {selectCartItemsCount } from '../../redux/cart/cartSelector'
import { toggleCartHidden } from "../../redux/cart/cartAction";
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
    togglrCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});
export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);
