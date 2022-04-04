import React from "react";
import { Card } from "react-bootstrap";

function MealInformation(props) {
  const { ingredients, picture } = props;

  let [imageName, setImageName] = React.useState(undefined);

  React.useEffect(() => {
    if (!picture) {
      return;
    }
    const images = require.context("../images/menu-images", true);
    let imageData = images(`./${picture}`);
    // setImageName(imageData);
    setImageName("../images/menu-images" + picture);
    console.log(picture);
  }, [picture]);

  return (
    <Card>
      <Card.Body>
        {ingredients && <div>Ingredients: {ingredients}</div>}
        {/* {imageName && <img src={imageName} alt="What you're ordering" />} */}
        {imageName && (
          <div
            style={{ backgroundImage: `url(${imageName})`, height: "100px" }}
          ></div>
        )}
      </Card.Body>
    </Card>
  );
}

export default MealInformation;
