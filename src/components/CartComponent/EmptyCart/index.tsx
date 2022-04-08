import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function EmptyCart() {
  return (
    <div>
      <div className="emptyCart">
        <img
          src={"https://pramopack.com/assets/images/emptycart.png"}
          alt="empty"
        />
        <Link to={"/"}>
          <button>
            <i className="fas fa-long-arrow-alt-left"></i>Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
