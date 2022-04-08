import React from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Accordion, Button } from "react-bootstrap";
import { NavbarCustom } from "../components/navbar";
import Payment from "../components/payment";
import { extractQueryParam } from "../utils/window";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/pages/checkout.css";

function Checkout() {
  const navigate = useNavigate();

  let [total, setTotal] = React.useState(0);
  let [order, setOrder] = React.useState([]);
  let [startTime, setStartTime] = React.useState(new Date());
  let [activeKey, setActiveKey] = React.useState("0");

  React.useEffect(() => {
    let userOrder = JSON.parse(extractQueryParam("order"));
    setOrder(userOrder);

    let currTotal = 0;
    for (let item of userOrder) {
      currTotal += parseFloat(item.price.substr(1));
    }
    setTotal(currTotal);
  }, []);

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
    navigate("/complete");
  };

  const makeReadableTimefield = (date) => {
    let dateString = date.toISOString();
    console.log(dateString);
    let dateParts = dateString.split("T");
    let timeParts = dateParts[1].split(":");

    let timeOfDay = "";
    let hour = 0;
    if (parseInt(timeParts[0]) / 12 > 0) {
      timeOfDay = "pm";
      hour = parseInt(timeParts[0]) % 12;
    } else {
      timeOfDay = "am";
      hour = timeParts[0];
    }

    return hour + ":" + timeParts[0] + " " + timeOfDay;
  };

  return (
    <>
      <NavbarCustom />
      <div className="checkout-container">
        <Accordion className="checkout-accordion" flush activeKey={activeKey}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3 className="checkout-order-header">Order Details</h3>
            </Accordion.Header>
            <Accordion.Body>
              {order.map((item, index) => {
                return (
                  <div
                    className="order-item-container"
                    key={`order-item-${index}`}
                  >
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
              <Button
                variant="outline-primary"
                onClick={onCheckoutButtonClicked}
              >
                Checkout
              </Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
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
            <Accordion.Header>
              <h3 className="checkout-order-header">Payment Information</h3>
            </Accordion.Header>
            <Accordion.Body>
              <Payment onPayButtonClicked={onPayButtonClicked} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3 className="checkout-order-header">Confirm Order</h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="order-summary">
                {order.map((item, index) => {
                  return (
                    <div
                      className="order-item-container"
                      key={`order-item-${index}`}
                    >
                      <div className="order-item-name">{item.name}</div>
                      <div className="order-item-price">{item.price}</div>
                    </div>
                  );
                })}
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
