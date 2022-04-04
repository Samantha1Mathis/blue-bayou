import React from "react";
import { Card } from "react-bootstrap";
import "./mealInformation.css";

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
    console.log(picture);
  }, [images, picture]);

  return (
    <Card>
      <Card.Body>
        {ingredients && <div>Ingredients: {ingredients}</div>}
        {/* {imageName && <img src={imageName} alt="What you're ordering" />} */}
        {imageName && (
          // <div
          //   style={{ backgroundImage: `url(${imageName})`, height: "100px" }}
          // ></div>
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
