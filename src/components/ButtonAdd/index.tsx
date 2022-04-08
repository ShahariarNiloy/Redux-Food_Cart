import React from "react";
import "./styles.css";
function ButtonAdd({ quantity, handleAddItem, handleRemoveItem }: any) {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div className="positive">
          <i
            className="fa fa-minus"
            aria-hidden="true"
            onClick={handleRemoveItem}
          ></i>
          <span>{quantity} </span>
          <i
            className="fa fa-plus"
            aria-hidden="true"
            onClick={handleAddItem}
          ></i>
        </div>
      ) : (
        <div className="negative" onClick={handleAddItem}>
          <span>ADD</span>
          <i className="fa fa-plus"></i>
        </div>
      )}
    </div>
  );
}

export default ButtonAdd;
