import React from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Accordion, Button } from "react-bootstrap";
import { NavbarCustom } from "../components/navbar";
import Payment from "../components/payment";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/pages/checkout.css";
import {
  deleteFromLocalStorage,
  readFromLocalStorage,
} from "../utils/localStorage";
import OrderSummary from "../components/orderSummary";

function Checkout() {
  const navigate = useNavigate();

  let [order, setOrder] = React.useState([]);
  let [startTime, setStartTime] = React.useState(null);
  let [activeKey, setActiveKey] = React.useState("0");
  let [disableTimes, setDisableTimes] = React.useState([]);
  let [paymentSuccess, setPaymentSuccess] = React.useState(false);
  let [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    let orderData = readFromLocalStorage("order");
    if (orderData) {
      let userOrder = JSON.parse(orderData);
      setOrder(userOrder);
    }

    let times = [];
    let startDate = new Date();
    startDate.setHours(11, 0);
    let endDate = new Date();
    let currentMinutes = 0;
    while (startDate <= endDate) {
      times.push(new Date(startDate));
      currentMinutes = (currentMinutes + 15) % 60;
      if (currentMinutes === 0) {
        startDate.setHours(startDate.getHours() + 1);
      }
      startDate.setMinutes(currentMinutes);
    }
    setDisableTimes(times);
  }, []);

  const onHeaderClicked = (newKey) => {
    setActiveKey(newKey);
  };

  const onCheckoutButtonClicked = () => {
    setErrorMessage(false);
    setActiveKey("1");
  };

  const onSelectButtonClicked = () => {
    setErrorMessage(false);
    setActiveKey("2");
  };

  const onPayButtonClicked = () => {
    setActiveKey("3");
    setErrorMessage(false);
    setPaymentSuccess(true);
  };

  const onConfirmButtonClicked = () => {
    if (order.length > 0 && startTime && paymentSuccess) {
      deleteFromLocalStorage("order");
      navigate("/complete");
    } else if (order.length === 0) {
      setErrorMessage("You need to add something to your order to checkout!");
    } else if (!startTime) {
      setErrorMessage("You need to set a pick up time!");
    } else if (!paymentSuccess) {
      setErrorMessage("You need to actually pay for what you order!");
    } else {
      setErrorMessage("Something went wrong.");
    }
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
                minTime={new Date().setHours(11, 0)}
                maxTime={new Date().setHours(21, 0)}
                excludeTimes={disableTimes}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Pick a time for pickup"
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
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                <OrderSummary order={order} showTax={true} />
                <div className="horizontal-break"></div>
                <div>
                  <span>Pickup Time: </span>
                  <DatePicker
                    selected={startTime}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    disabled
                  />
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
