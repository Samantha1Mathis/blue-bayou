import React from "react";
import { Button } from "react-bootstrap";
import "../styles/components/orderSummary.css";

function OrderSummary(props) {
  let {
    order,
    showTax,
    editable,
    onClearCartButtonClicked,
    onItemQuantityChange,
  } = props;

  const taxRate = 0.0725;

  let initTotal = 0;
  for (let item of order) {
    initTotal += parseFloat(item.price.substr(1)) * item.quantity;
  }
  // Round values to 2 decimal places.

  let taxAmt = Math.round(initTotal * taxRate * 100) / 100;
  let total = Math.round((initTotal + taxAmt) * 100) / 100;

  const makeDollarString = (amt) => {
    let amtString = amt.toString();
    if (amtString.split(".").length === 1) {
      amtString += ".00";
    } else {
      let cents = amtString.split(".")[1];
      if (cents.length === 1) {
        amtString += "0";
      }
    }
    return "$" + amtString;
  };

  return (
    <div className="order-summary-container">
      {order &&
        order.map((item, index) => {
          return (
            <div
              className="order-summary-item-container"
              key={`order-item-${index}`}
            >
              <div className="order-summary-item-name">
                {editable && (
                  <>
                    <input
                      className="edit-quantity"
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={item.quantity}
                      onInput={(event) => onItemQuantityChange(event, index)}
                    />
                    <span> x {item.name}</span>
                  </>
                )}
                {!editable && (
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                )}
              </div>
              <div className="order-summary-item-price">
                {makeDollarString(
                  parseFloat(item.price.substr(1)) * item.quantity
                )}
              </div>
            </div>
          );
        })}
      <div className="horizontal-break"></div>
      {showTax && (
        <div className="order-summary-item-container">
          <div className="order-summary-item-name">Tax:</div>
          <div className="order-summary-item-price">
            {makeDollarString(taxAmt)}
          </div>
        </div>
      )}
      <div className="order-summary-item-container">
        <div className="order-summary-item-name">Total:</div>
        <div className="order-summary-item-price">
          {showTax ? makeDollarString(total) : makeDollarString(initTotal)}
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
