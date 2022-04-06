import React from "react";
import { Card } from "react-bootstrap";
import "../styles/components/mealInformation.css";

function MealInformation(props) {
  const { ingredients, picture } = props;
  const images = require.context(
    "../images/menu-images/",
    false,
    /\.(png|jpg|jpeg|gif)$/i
  );

  let [imageName, setImageName] = React.useState(undefined);

  React.useEffect(() => {
    if (!picture) {
      return;
    }
    let imageData = images(`./${picture}`);
    // setImageName(imageData);
    setImageName(imageData);
  }, [images, picture]);

  return (
    <Card>
      <Card.Body className="meal-information-container">
        {ingredients && (
          <div className="meal-information-ingredients">
            Ingredients: {ingredients}
          </div>
        )}
        {imageName && (
          <img
            className="meal-information-image"
            src={imageName}
            alt="What you're eating"
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default MealInformation;
