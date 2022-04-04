import React from "react";
import { Tabs, Tab, Navbar, Container, Nav, Accordion } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import MenuItem from "./menuItem";
import MealInformation from "./mealInformation";
import CustomAccordion from "./customAccordion";
import menuData from "../data/menu";
import "../styles/components/menu.css";

export function Menu(props) {
  let lunchKeys = Object.keys(menuData.Lunch);
  let dinnerKeys = Object.keys(menuData.Dinner);

  let [activeKeys, setActiveKeys] = React.useState([]);
  let [currentMenu, setCurrentMenu] = React.useState("");

  let changeActiveKeys = React.useCallback(
    (title) => {
      setCurrentMenu(title);
      setActiveKeys(title === "Lunch" ? lunchKeys : dinnerKeys);
    },
    [dinnerKeys, lunchKeys]
  );

  React.useEffect(() => {
    let defaultMenu = props.defaultMenu || "Lunch";
    setCurrentMenu(defaultMenu);
    changeActiveKeys(defaultMenu);
  }, [props]);

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <Tabs
        onSelect={(eventKey) => changeActiveKeys(eventKey)}
        activeKey={currentMenu}
        id="time-of-day-menu"
      >
        <Tab eventKey="Lunch" title="Lunch"></Tab>
        <Tab eventKey="Dinner" title="Dinner"></Tab>
      </Tabs>

      <Navbar className="menu-item-container" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              {activeKeys.map((key, index) => {
                return (
                  <Link
                    key={`menu-item-key-${key}-${index}`}
                    className="menu-item-field"
                    to={`#${key}`}
                  >
                    {key}
                  </Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {activeKeys.map((key, index) => {
        return (
          <>
            <h3
              className="menu-section-header"
              id={key}
              key={`menu-key-${index}`}
            >
              {key}
            </h3>
            {menuData[currentMenu][key].map((meal, mealIndex) => {
              return (
                <Accordion defaultActiveKey="-1" style={{ width: "100%" }}>
                  <CustomAccordion eventKey={mealIndex}>
                    <MenuItem
                      menukey={`menu-item-${mealIndex}`}
                      name={meal.name}
                      price={meal.price}
                      description={meal.description}
                    />
                  </CustomAccordion>
                  <Accordion.Collapse eventKey={mealIndex}>
                    <MealInformation
                      ingredients={meal.ingredients}
                      picture={meal.picture}
                    />
                  </Accordion.Collapse>
                </Accordion>
              );
            })}
          </>
        );
      })}
    </div>
  );
}
