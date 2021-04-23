import React from "react";
import "./CartDropDown.scss";
import CustomButton from "../CustomButton/CustomButton";
import { withRouter } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import { setCurrentUser } from "../../redux/user/userActions";
import { selectCurrentUser } from "../../redux/user/userSelector";


const CartDropDown = ({ cartItems, history, toggleCartHidden,currentUser }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart Is Empty</span>
      )}
    </div>
    {
        currentUser ?  (<CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton> ):(<h3>You need to Sign In for Checkout</h3>)
    }
   
   
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  toggleCartHidden: ()=> dispatch(toggleCartHidden())

});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
