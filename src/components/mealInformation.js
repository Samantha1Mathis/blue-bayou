import React from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/components/mealInformation.css";

function MealInformation(props) {
  const {
    meal,
    showPriceOptions,
    optionNames,
    priceOptions,
    onPriceOptionClicked,
  } = props;
  const images = require.context(
    "../images/menu-images/",
    false,
    /\.(png|jpg|jpeg|gif)$/i
  );

  let [imageName, setImageName] = React.useState(undefined);

  React.useEffect(() => {
    if (!meal.picture) {
      return;
    }
    let imageData = images(`./${meal.picture}`);
    // setImageName(imageData);
    setImageName(imageData);
  }, [images, meal.picture]);

  return (
    <Card>
      <Card.Body>
        <div className="meal-information-container">
          {meal.ingredients && (
            <div className="meal-information-ingredients">
              Ingredients: {meal.ingredients}
            </div>
          )}
          {imageName && (
            <img
              className="meal-information-image"
              src={imageName}
              alt="What you're eating"
            />
          )}
        </div>
        {showPriceOptions && (
          <div className="price-option-container">
            {priceOptions.map((option, index) => {
              return (
                <Button
                  className="meal-information-price-option"
                  key={`meal-price-option-${option}-${index}`}
                  onClick={() => {
                    let addMeal = { ...meal };
                    addMeal.name = `${optionNames[index]} ${meal.name}`;
                    addMeal.price = option.replace(/\s/g, "");
                    console.log(addMeal.price);
                    onPriceOptionClicked(addMeal);
                  }}
                >
                  Add {optionNames[index]} - {option}
                </Button>
              );
            })}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default MealInformation;
