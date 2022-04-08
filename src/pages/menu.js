import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { Menu } from "../components/menu";
import { NavbarCustom } from "../components/navbar";
import shoppingCart from "../images/menu-images/shopping_cart.png";
import { extractQueryParam } from "../utils/window";
import "../styles/pages/menu.css";
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "../utils/localStorage";

export default function MenuPage() {
  const navigate = useNavigate();

  let [type, setType] = React.useState("");
  let [order, setOrder] = React.useState([]);
  let [numItems, setNumItems] = React.useState(0);

  React.useEffect(() => {
    let menuType = extractQueryParam("type");
    setType(menuType);
    let order = readFromLocalStorage("order");
    console.log(order);
    if (order) {
      order = JSON.parse(order);
      setOrder(order);
      setNumItems(order.length);
    }
  }, []);

  const onAddButtonClicked = (meal) => {
    order.push(meal);
    setOrder(order);
    writeToLocalStorage("order", JSON.stringify(order));
    setNumItems(order.length);
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
              {order.map((item, index) => {
                return (
                  <div
                    className="cart-item-container"
                    key={`order-item-${index}`}
                  >
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">{item.price}</div>
                  </div>
                );
              })}
              <div className="cart-total">
                Total: $
                {order.reduce(
                  (sum, a) => sum + parseFloat(a.price.substr(1)),
                  0
                )}
              </div>
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
        <Card style={{ width: "60%", padding: "10px" }}>
          <Menu type={type} onAddButtonClicked={onAddButtonClicked} />
        </Card>
      </div>
    </>
  );
}
