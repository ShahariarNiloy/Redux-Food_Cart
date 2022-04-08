import React from "react";
import EmptyCart from "../../components/CartComponent/EmptyCart";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu";
import Footer from "../../components/Footer";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/Cart/cartSelector";
import "./styles.css";

function Cart({ cartCount, cartList, cartTotal }: any) {
  return (
    <div>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your Total $ {cartTotal}</h3>
        </div>
      )}

      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
