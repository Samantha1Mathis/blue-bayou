import React from "react";
import { Card, OverlayTrigger, Popover } from "react-bootstrap";
import { Menu } from "../components/menu";
import { NavbarCustom } from "../components/navbar";
import shoppingCart from "../images/menu-images/shopping_cart.png";
import { extractQueryParam } from "../utils/window";
import "../styles/pages/menu.css";

export default function MenuPage() {
  let [type, setType] = React.useState("");
  let [order, setOrder] = React.useState([]);
  let [numItems, setNumItems] = React.useState(0);

  React.useEffect(() => {
    let menuType = extractQueryParam("type");
    setType(menuType);
  }, []);

  const onAddButtonClicked = (meal) => {
    order.push(meal);
    setOrder(order);
    setNumItems(order.length);
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
            <Popover>
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
            </Popover>
          }
        >
          <div className="menu-cart">
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
          <Menu onAddButtonClicked={onAddButtonClicked} />
        </Card>
      </div>
    </>
  );
}
