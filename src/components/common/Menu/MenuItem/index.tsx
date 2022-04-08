import React from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import ButtonAdd from "../../../ButtonAdd";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../../redux/Cart/cartSelector";

import "./styles.css";
import { CartAddItem, CartRemoveItem } from "../../../../redux/Cart/cartAction";

function MenuItem({
  item,
  cartList,
  cartCount,
  cartAddItem,
  cartRemoveItem,
}: any) {
  const { id, img, name, price, info } = item;
  const dispatch = useDispatch();
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item: any) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <div className="item">
      <img src={img} alt="food" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        <ButtonAdd
          quantity={handleQuantity()}
          handleRemoveItem={() => dispatch(CartRemoveItem(item))}
          handleAddItem={() => dispatch(CartAddItem(item))}
        />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

export default connect(mapStateToProps)(MenuItem);
