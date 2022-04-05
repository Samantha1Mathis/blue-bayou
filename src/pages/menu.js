import React from "react";
import { Card } from "react-bootstrap";
import { Menu } from "../components/menu";
import { NavbarCustom } from "../components/navbar";
import shoppingCart from "../images/menu-images/shopping_cart.png";
import { extractQueryParam } from "../utils/window";
import "../styles/pages/menu.css";

export default function MenuPage() {
  let [type, setType] = React.useState("");

  React.useEffect(() => {
    let menuType = extractQueryParam("type");
    setType(menuType);
  }, []);

  return (
    <>
      <NavbarCustom />
      <div className="menu-cart">
        <img
          className="shopping-cart-image"
          src={shoppingCart}
          alt="Shopping Cart"
        />
      </div>
      <div className="menu-page-container">
        <Card style={{ width: "60%", padding: "10px" }}>
          <Menu />
        </Card>
      </div>
    </>
  );
}
