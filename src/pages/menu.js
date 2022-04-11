import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { Menu } from "../components/menu";
import { NavbarCustom } from "../components/navbar";
import shoppingCart from "../images/menu-images/shopping_cart.png";
import { extractQueryParam } from "../utils/window";
import "../styles/pages/menu.css";
import "../styles/pages/reservations.css";
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "../utils/localStorage";
import OrderSummary from "../components/orderSummary";

export default function MenuPage() {
  const navigate = useNavigate();

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

  const onCartButtonClicked = () => {
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
        <OverlayTrigger
          trigger={["hover", "focus"]}
          key="bottom"
          placement="bottom"
          overlay={
            <Popover className="checkout-overlay">
              <OrderSummary order={order} />
            </Popover>
          }
        >
          <div className="menu-cart" onClick={onCartButtonClicked}>
            <img
              className="shopping-cart-image"
              src={shoppingCart}
              alt="Shopping Cart"
            />
            <div className="cart-quantity">{numItems}</div>
          </div>
        </OverlayTrigger>
      )}
      <div className="menu-page-container">
        <Card className="menu-card-container">
          <Menu type={type} onAddButtonClicked={onAddButtonClicked} />
        </Card>
      </div>
    </>
  );
}
