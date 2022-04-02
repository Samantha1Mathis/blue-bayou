import React from "react";
import menuData from "../data/menu";
import "./menu.css";

export function Menu() {
  let lunchKeys = Object.keys(menuData.Lunch);

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      {lunchKeys.map((key, index) => {
        return (
          <>
            <h3 className="menu-section-header" key={`menu-key-${index}`}>
              {key}
            </h3>
            {menuData.Lunch[key].map((meal, mealIndex) => {
              return (
                <div className="meal-container" key={`meal-key-${mealIndex}`}>
                  <div className="meal-row">
                    <div className="meal-name">{meal.name}</div>
                    <div className="meal-price">{meal.price}</div>
                  </div>
                  <div className="meal-description">{meal.description}</div>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
}
