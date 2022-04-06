import React from "react";
import DatePicker from "react-datepicker";
import { NavbarCustom } from "../components/navbar";
import Payment from "../components/payment";
import { extractQueryParam } from "../utils/window";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/pages/checkout.css";

function Checkout() {
  let [total, setTotal] = React.useState(0);
  let [order, setOrder] = React.useState([]);
  let [startTime, setStartTime] = React.useState(new Date());

  React.useEffect(() => {
    let userOrder = JSON.parse(extractQueryParam("order"));
    setOrder(userOrder);

    let currTotal = 0;
    for (let item of userOrder) {
      currTotal += parseFloat(item.price.substr(1));
    }
    setTotal(currTotal);
  }, []);

  return (
    <>
      <NavbarCustom />
      <div className="checkout-container">
        <h3 className="checkout-order-header">Order Details</h3>
        {order.map((item, index) => {
          return (
            <div className="order-item-container" key={`order-item-${index}`}>
              <div className="order-item-name">{item.name}</div>
              <div className="order-item-price">{item.price}</div>
            </div>
          );
        })}
        <div className="horizontal-break" />
        <div className="order-item-container">
          <div className="order-item-name">Total: </div>
          <div className="order-item-price">${total}</div>
        </div>
        <h3 className="checkout-order-header">Pick Up Time</h3>
        <p style={{ width: "50%", textAlign: "left" }}>
          Select when you would like to pick your food up
        </p>
        <div style={{ width: "50%" }}>
          <DatePicker
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
        <h3 className="checkout-order-header">Payment Information</h3>
        <Payment />
      </div>
    </>
  );
}

export default Checkout;
