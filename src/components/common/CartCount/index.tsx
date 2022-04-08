import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/Cart/cartSelector";
import "./style.css";
function CartCount({ cartCount }: any) {
  return (
    <div>
      <Link to={"/cart"}>
        <div className="btnCartCount">
          <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
          <i className="fa fa-shopping-cart"></i>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCount);
