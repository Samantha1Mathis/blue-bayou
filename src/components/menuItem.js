import React from "react";
import "../styles/components/menu.css";

function MenuItem(props) {
  const { menuKey, name, price, description } = props;

  return (
    <div className="meal-container" key={menuKey}>
      <div className="meal-row">
        <div className="meal-name">{name}</div>
        <div className="meal-price">{price}</div>
      </div>
      <div className="meal-description">{description}</div>
    </div>
  );
}

export default MenuItem;
