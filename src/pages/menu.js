import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Offcanvas, Button } from "react-bootstrap";
import { Menu } from "../components/menu";
import { NavbarCustom } from "../components/navbar";
import shoppingCart from "../images/menu-images/shopping_cart.png";
import { extractQueryParam } from "../utils/window";
import "../styles/pages/menu.css";
import {
  deleteFromLocalStorage,
  readFromLocalStorage,
  writeToLocalStorage,
} from "../utils/localStorage";
import OrderSummary from "../components/orderSummary";

export default function MenuPage() {
  const navigate = useNavigate();

  let [show, setShow] = React.useState(false);
  let [type, setType] = React.useState("");
  let [order, setOrder] = React.useState([]);
  let [numItems, setNumItems] = React.useState(0);

  React.useEffect(() => {
    let menuType = extractQueryParam("type");
    setType(menuType);
    let order = readFromLocalStorage("order");
    if (order) {
      order = JSON.parse(order);
      setOrder(order);

      // Count the number of items.
      let total = order.reduce((sum, a) => sum + a.quantity, 0);

      setNumItems(total);
    }
  }, []);

  const onAddButtonClicked = (meal) => {
    let existingItem = order.filter((item) => item.name === meal.name)[0];
    if (!!existingItem) {
      existingItem.quantity += 1;
    } else {
      let item = { ...meal };
      item.quantity = 1;
      order.push(item);
    }
    setOrder(order);
    writeToLocalStorage("order", JSON.stringify(order));
    setNumItems(numItems + 1);
  };

  const onClearCartButtonClicked = () => {
    deleteFromLocalStorage("order");
    setOrder([]);
    setNumItems(0);
  };

  const onItemQuantityChange = (event, index) => {
    if (parseInt(event.target.value) < order[index].quantity) {
      setNumItems(numItems--);
    } else {
      setNumItems(numItems++);
    }
    order[index].quantity = parseInt(event.target.value);
    if (order[index.quantity] === 0) {
      order.splice(index, 1);
    }
    setOrder(order);
    writeToLocalStorage("order", JSON.stringify(order));
  };

  const onCheckoutButtonClicked = () => {
    if (order.length === 0) {
      return;
    }

    let orderCopy = [...order];
    for (let item of orderCopy) {
      delete item.description;
      delete item.ingredients;
    }

    if (type === "togo") {
      navigate(`/checkout?type=togo`);
    } else if (type === "inperson") {
      navigate(`/checkout?type=inperson`);
    }
  };

  return (
    <>
      <NavbarCustom />
      {type && (
        <>
          <div className="menu-cart" onClick={() => setShow(true)}>
            <img
              className="shopping-cart-image"
              src={shoppingCart}
              alt="Shopping Cart"
            />
            <div className="cart-quantity">{numItems}</div>
          </div>
          <Offcanvas
            show={show}
            onHide={() => setShow(false)}
            placement={"end"}
            className="fix-position"
            backdropClassName="fix-position"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Your Order</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <OrderSummary
                order={order}
                editable={true}
                onClearCartButtonClicked={onClearCartButtonClicked}
                onItemQuantityChange={onItemQuantityChange}
              />
              {numItems > 0 && (
                <Button onClick={onCheckoutButtonClicked}>Checkout</Button>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
      <div className="menu-page-container">
        <Card className="menu-card-container">
          <Menu type={type} onAddButtonClicked={onAddButtonClicked} />
        </Card>
      </div>
    </>
  );
}
