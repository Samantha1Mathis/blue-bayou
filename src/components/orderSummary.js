import React from "react";
import "../styles/components/orderSummary.css";

function OrderSummary(props) {
  let { order, showTax } = props;

  const taxRate = 0.0725;

  let initTotal = 0;
  for (let item of order) {
    initTotal += parseFloat(item.price.substr(1)) * item.quantity;
  }
  let taxAmt = Math.round(initTotal * taxRate * 100) / 100;
  let total = Math.round((initTotal + taxAmt) * 100) / 100;

  return (
    <div className="order-summary-container">
      {order.map((item, index) => {
        return (
          <div
            className="order-summary-item-container"
            key={`order-item-${index}`}
          >
            <div className="order-summary-item-name">
              {item.quantity}x {item.name}
            </div>
            <div className="order-summary-item-price">
              ${parseFloat(item.price.substr(1)) * item.quantity}
            </div>
          </div>
        );
      })}
      <div className="horizontal-break"></div>
      {showTax && (
        <div className="order-summary-item-container">
          <div className="order-summary-item-name">Tax:</div>
          <div className="order-summary-item-price">{taxAmt}</div>
        </div>
      )}
      <div className="order-summary-item-container">
        <div className="order-summary-item-name">Total:</div>
        <div className="order-summary-item-price">
          ${showTax ? total : initTotal}
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
