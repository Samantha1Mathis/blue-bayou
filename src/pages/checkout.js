import React from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Accordion, Button } from "react-bootstrap";
import { NavbarCustom } from "../components/navbar";
import Payment from "../components/payment";
import { extractQueryParam } from "../utils/window";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/pages/checkout.css";
import {
  deleteFromLocalStorage,
  readFromLocalStorage,
} from "../utils/localStorage";
import OrderSummary from "../components/orderSummary";

function Checkout() {
  const navigate = useNavigate();

  let [total, setTotal] = React.useState(0);
  let [order, setOrder] = React.useState([]);
  let [startTime, setStartTime] = React.useState(new Date());
  let [activeKey, setActiveKey] = React.useState("0");

  React.useEffect(() => {
    let userOrder = JSON.parse(readFromLocalStorage("order"));
    setOrder(userOrder);

    let currTotal = 0;
    for (let item of userOrder) {
      currTotal += parseFloat(item.price.substr(1));
    }
    setTotal(currTotal);
  }, []);

  const onHeaderClicked = (newKey) => {
    setActiveKey(newKey);
  };

  const onCheckoutButtonClicked = () => {
    setActiveKey("1");
  };

  const onSelectButtonClicked = () => {
    setActiveKey("2");
  };

  const onPayButtonClicked = () => {
    setActiveKey("3");
  };

  const onConfirmButtonClicked = () => {
    deleteFromLocalStorage("order");
    navigate("/complete");
  };

  return (
    <>
      <NavbarCustom />
      <div className="checkout-container">
        <Accordion className="checkout-accordion" flush activeKey={activeKey}>
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => onHeaderClicked("0")}>
              <h3 className="checkout-order-header">Order Details</h3>
            </Accordion.Header>
            <Accordion.Body>
              <OrderSummary order={order} showTax={true} />
              <Button
                variant="outline-primary"
                onClick={onCheckoutButtonClicked}
              >
                Checkout
              </Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => onHeaderClicked("1")}>
              <h3 className="checkout-order-header">Pick Up Time</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p style={{ textAlign: "left" }}>
                Select when you would like to pick your food up
              </p>
              <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
              <Button variant="outline-primary" onClick={onSelectButtonClicked}>
                Select
              </Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header onClick={() => onHeaderClicked("2")}>
              <h3 className="checkout-order-header">Payment Information</h3>
            </Accordion.Header>
            <Accordion.Body>
              <Payment onPayButtonClicked={onPayButtonClicked} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header onClick={() => onHeaderClicked("3")}>
              <h3 className="checkout-order-header">Confirm Order</h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="order-summary">
                <OrderSummary order={order} showTax={true} />
                <div className="horizontal-break"></div>
                <div>
                  <span>Pickup Time: </span>
                  <DatePicker selected={startTime} disabled />
                </div>
              </div>
              <Button
                variant="outline-primary"
                onClick={onConfirmButtonClicked}
              >
                Confirm
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Checkout;
