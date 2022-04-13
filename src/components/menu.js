import React from "react";
import { Tabs, Tab, Navbar, Container, Nav, Accordion } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import MenuItem from "./menuItem";
import MealInformation from "./mealInformation";
import CustomAccordion from "./customAccordion";
import menuData from "../data/menu";
import "../styles/components/menu.css";

export function Menu(props) {
  let { type } = props;
  let lunchKeys = Object.keys(menuData.Lunch);
  let dinnerKeys = Object.keys(menuData.Dinner);

  let [showAccordion, setShowAccordion] = React.useState("-1");
  let [activeKeys, setActiveKeys] = React.useState([]);
  let [currentMenu, setCurrentMenu] = React.useState("");

  let changeActiveKeys = React.useCallback(
    (title) => {
      setCurrentMenu(title);
      setActiveKeys(title === "Lunch" ? lunchKeys : dinnerKeys);
    },
    [dinnerKeys, lunchKeys]
  );

  const toggleAccordion = (menu, key, index) => {
    if (showAccordion === `${menu}-${key}-${index}`) {
      setShowAccordion("-1");
    } else {
      setShowAccordion(`${menu}-${key}-${index}`);
    }
  };

  React.useEffect(() => {
    let now = new Date();
    let endOfLunch = new Date().setHours(15, 55);
    if (now > endOfLunch) {
      setCurrentMenu("Dinner");
      changeActiveKeys("Dinner");
    } else {
      setCurrentMenu("Lunch");
      changeActiveKeys("Lunch");
    }
  }, []);

  return (
    <div
      style={{ fontFamily: "blackPearl" }}
      className="menu-container text-dark"
    >
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
            <h3 className="menu-section-header" key={`menu-key-${index}`}>
              {key}
            </h3>
            <div className="menu-section-anchor" id={key}></div>
            {menuData[currentMenu][key].map((meal, mealIndex) => {
              return (
                <div className="menu-accordion-container">
                  {type && meal.price && (
                    <div
                      onClick={() => {
                        meal.price.split("|").length === 2
                          ? toggleAccordion(currentMenu, key, mealIndex)
                          : props.onAddButtonClicked(meal);
                      }}
                      className="add-to-order"
                    >
                      +
                    </div>
                  )}
                  {type && !meal.price && <div className="left-padding" />}
                  <Accordion
                    style={{ width: "100%" }}
                    activeKey={showAccordion}
                  >
                    <CustomAccordion
                      eventKey={`${currentMenu}-${key}-${mealIndex}`}
                      onElementClicked={() => {
                        toggleAccordion(currentMenu, key, mealIndex);
                      }}
                    >
                      <MenuItem
                        menukey={`menu-item-${mealIndex}`}
                        name={meal.name}
                        price={meal.price}
                        description={meal.description}
                      />
                    </CustomAccordion>
                    <Accordion.Collapse
                      eventKey={`${currentMenu}-${key}-${mealIndex}`}
                    >
                      <MealInformation
                        meal={meal}
                        showPriceOptions={
                          type && meal.price.split("|").length === 2
                            ? true
                            : false
                        }
                        optionNames={meal.description.split("|")}
                        priceOptions={meal.price.split("|")}
                        onPriceOptionClicked={props.onAddButtonClicked}
                      />
                    </Accordion.Collapse>
                  </Accordion>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
}
