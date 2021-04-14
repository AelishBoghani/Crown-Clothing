import Homepage from "./pages/homepage/Homepage";
import "./App.css";
import { Route, Switch,Redirect } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";
import { auth, createUserProfileDocumnet } from "./firebase/firebase";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocumnet(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" render={()=>this.props.currentUser ? (<Redirect to="/"/>):(<SignInSignUp/>)} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps=({user})=>({
  currentUser: user.currentUser
})


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
